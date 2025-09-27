import { useEffect } from 'react';

// Type definitions for gtranslate global objects
declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
    };
    doGTranslate?: (language: string) => void;
    gtranslateReady?: () => void;
    jQuery?: any;
  }
}

/**
 * Hook to refresh gtranslate when React components mount or update
 * This ensures gtranslate can detect and translate dynamically rendered content
 */
const useGtranslateRefresh = () => {
  useEffect(() => {
    console.log('🌐 GTranslate: Hook initialized, checking script availability...');
    
    // First, ensure gtranslate script is loaded
    const ensureGtranslateScript = () => {
      return new Promise<void>((resolve) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="gtranslate"]');
        
        if (window.doGTranslate && window.gtranslateReady) {
          console.log('🌐 GTranslate: Script already loaded and ready');
          resolve();
          return;
        }
        
        if (existingScript) {
          console.log('🌐 GTranslate: Script tag found, waiting for it to load...');
          // Script exists but functions not ready, wait a bit more
          const checkReady = () => {
            if (window.doGTranslate && window.gtranslateReady) {
              console.log('🌐 GTranslate: Functions now available');
              resolve();
            } else {
              setTimeout(checkReady, 200);
            }
          };
          checkReady();
          return;
        }
        
        console.log('🌐 GTranslate: No script found, attempting to load...');
        
        // Try to find and execute any inline gtranslate scripts
        const inlineScripts = document.querySelectorAll('script:not([src])');
        let gtranslateConfigFound = false;
        
        inlineScripts.forEach(script => {
          if (script.textContent?.includes('gtranslateSettings') || 
              script.textContent?.includes('doGTranslate')) {
            console.log('🌐 GTranslate: Found inline gtranslate script, re-executing...');
            gtranslateConfigFound = true;
            try {
              // Re-execute the script
              eval(script.textContent);
            } catch (e) {
              console.warn('🌐 GTranslate: Error executing inline script:', e);
            }
          }
        });
        
        if (gtranslateConfigFound) {
          // Wait a bit for the script to initialize
          setTimeout(() => {
            if (window.doGTranslate && window.gtranslateReady) {
              console.log('🌐 GTranslate: Functions available after script re-execution');
              resolve();
            } else {
              console.warn('🌐 GTranslate: Functions still not available after script re-execution');
              resolve(); // Continue anyway
            }
          }, 500);
        } else {
          console.warn('🌐 GTranslate: No gtranslate configuration found in page');
          resolve(); // Continue anyway
        }
      });
    };
    
    // Load script first, then attempt refreshes
    ensureGtranslateScript().then(() => {
      const timers: NodeJS.Timeout[] = [];
      
      // Immediate attempt after script is ready
      timers.push(setTimeout(() => {
        triggerGtranslateRefresh();
      }, 100));
      
      // Second attempt with longer delay
      timers.push(setTimeout(() => {
        triggerGtranslateRefresh();
      }, 1000));
      
      // Third attempt for production environments
      timers.push(setTimeout(() => {
        triggerGtranslateRefresh();
      }, 3000));
      
      // Store timers for cleanup
      (window as any).__gtranslateTimers = timers;
    });

    return () => {
      // Clean up timers
      const timers = (window as any).__gtranslateTimers || [];
      timers.forEach((timer: NodeJS.Timeout) => clearTimeout(timer));
      delete (window as any).__gtranslateTimers;
    };
  }, []);

  const triggerGtranslateRefresh = () => {
    console.log('🌐 GTranslate: Triggering refresh attempt...');
    
    // Check gtranslate availability
    const hasSettings = !!window.gtranslateSettings;
    const hasDoGTranslate = !!window.doGTranslate;
    const hasGtranslateReady = typeof window.gtranslateReady === 'function';
    const hasJQuery = !!window.jQuery;
    
    console.log('🌐 GTranslate Status:', {
      hasSettings,
      hasDoGTranslate,
      hasGtranslateReady,
      hasJQuery,
      defaultLanguage: window.gtranslateSettings?.default_language
    });
    
    // Method 1: Direct gtranslate API call
    if (hasSettings && hasDoGTranslate) {
      console.log('🌐 GTranslate: Using doGTranslate method');
      window.doGTranslate(window.gtranslateSettings.default_language + '|' + window.gtranslateSettings.default_language);
    } else {
      console.warn('🌐 GTranslate: doGTranslate method not available');
    }
    
    // Method 2: Custom event dispatch
    console.log('🌐 GTranslate: Dispatching custom event');
    const event = new CustomEvent('gtranslate-refresh', {
      detail: { source: 'react-component', timestamp: Date.now() }
    });
    window.dispatchEvent(event);
    
    // Method 3: Force gtranslate to rescan DOM
    if (hasGtranslateReady) {
      console.log('🌐 GTranslate: Calling gtranslateReady()');
      window.gtranslateReady();
    } else {
      console.warn('🌐 GTranslate: gtranslateReady function not available');
    }
    
    // Method 4: jQuery trigger (if available)
    if (hasJQuery && window.jQuery.fn.trigger) {
      console.log('🌐 GTranslate: Using jQuery trigger');
      window.jQuery(document).trigger('gtranslate-refresh');
    } else if (hasJQuery) {
      console.warn('🌐 GTranslate: jQuery available but trigger method missing');
    } else {
      console.warn('🌐 GTranslate: jQuery not available');
    }
    
    console.log('🌐 GTranslate: Refresh attempt completed');
  };
};

export default useGtranslateRefresh;