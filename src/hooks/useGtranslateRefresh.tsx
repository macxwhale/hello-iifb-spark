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
    // Multiple attempts with increasing delays for production environments
    const timers: NodeJS.Timeout[] = [];
    
    // Immediate attempt
    timers.push(setTimeout(() => {
      triggerGtranslateRefresh();
    }, 50));
    
    // Second attempt with longer delay for production
    timers.push(setTimeout(() => {
      triggerGtranslateRefresh();
    }, 500));
    
    // Third attempt for slow-loading production environments
    timers.push(setTimeout(() => {
      triggerGtranslateRefresh();
    }, 2000));

    return () => timers.forEach(timer => clearTimeout(timer));
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