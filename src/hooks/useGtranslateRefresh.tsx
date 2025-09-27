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
    // Method 1: Direct gtranslate API call
    if (window.gtranslateSettings && window.doGTranslate) {
      window.doGTranslate(window.gtranslateSettings.default_language + '|' + window.gtranslateSettings.default_language);
    }
    
    // Method 2: Custom event dispatch
    const event = new CustomEvent('gtranslate-refresh', {
      detail: { source: 'react-component', timestamp: Date.now() }
    });
    window.dispatchEvent(event);
    
    // Method 3: Force gtranslate to rescan DOM
    if (typeof window.gtranslateReady === 'function') {
      window.gtranslateReady();
    }
    
    // Method 4: jQuery trigger (if available)
    if (window.jQuery && window.jQuery.fn.trigger) {
      window.jQuery(document).trigger('gtranslate-refresh');
    }
  };
};

export default useGtranslateRefresh;