import { useEffect } from 'react';

// Type definitions for gtranslate global objects
declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
    };
    doGTranslate?: (language: string) => void;
  }
}

/**
 * Hook to refresh gtranslate when React components mount or update
 * This ensures gtranslate can detect and translate dynamically rendered content
 */
const useGtranslateRefresh = () => {
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // Trigger gtranslate to rescan the page for new content
      if (window.gtranslateSettings && window.doGTranslate) {
        window.doGTranslate(window.gtranslateSettings.default_language + '|' + window.gtranslateSettings.default_language);
      }
      
      // Alternative method - dispatch custom event for gtranslate
      const event = new CustomEvent('gtranslate-refresh', {
        detail: { source: 'react-component' }
      });
      window.dispatchEvent(event);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};

export default useGtranslateRefresh;