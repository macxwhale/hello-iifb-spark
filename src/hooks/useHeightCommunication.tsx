
import { useEffect, useRef, useCallback } from 'react';

interface HeightMessage {
  type: 'iframeHeight';
  height: number;
  route?: string;
  timestamp: number;
}

interface UseHeightCommunicationOptions {
  enabled?: boolean;
  debounceMs?: number;
  includeRoute?: boolean;
}

export const useHeightCommunication = (options: UseHeightCommunicationOptions = {}) => {
  const {
    enabled = true,
    debounceMs = 100,
    includeRoute = true
  } = options;

  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastHeightRef = useRef<number>(0);

  const sendHeightUpdate = useCallback(() => {
    if (!enabled) return;
    
    // Check if we're in an iframe context
    if (typeof window === 'undefined' || window.parent === window) {
      return;
    }

    try {
      const currentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // Only send if height has changed significantly (more than 5px difference)
      if (Math.abs(currentHeight - lastHeightRef.current) <= 5) {
        return;
      }

      lastHeightRef.current = currentHeight;

      const message: HeightMessage = {
        type: 'iframeHeight', // Changed from 'height-update' to match parent code
        height: currentHeight,
        timestamp: Date.now(),
        ...(includeRoute && { route: window.location.pathname })
      };

      window.parent.postMessage(message, '*');
      console.log('Height update sent:', message);
    } catch (error) {
      console.error('Failed to send height update:', error);
    }
  }, [enabled, includeRoute]);

  const debouncedSendHeight = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(sendHeightUpdate, debounceMs);
  }, [sendHeightUpdate, debounceMs]);

  useEffect(() => {
    if (!enabled) return;

    // Listen for height requests from parent
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'requestHeight') {
        console.log('Height request received from parent');
        sendHeightUpdate();
      }
    };

    window.addEventListener('message', handleMessage);

    // Send initial height
    sendHeightUpdate();

    // Create ResizeObserver to monitor document size changes
    const resizeObserver = new ResizeObserver(() => {
      debouncedSendHeight();
    });

    // Observe the document body and html element
    resizeObserver.observe(document.body);
    resizeObserver.observe(document.documentElement);

    // Also listen for window resize events
    const handleResize = () => debouncedSendHeight();
    window.addEventListener('resize', handleResize);

    // Listen for DOM mutations that might affect height
    const mutationObserver = new MutationObserver(() => {
      debouncedSendHeight();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Send height update when route changes
    const handleRouteChange = () => {
      // Small delay to ensure new content is rendered
      setTimeout(sendHeightUpdate, 50);
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('message', handleMessage);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [enabled, sendHeightUpdate, debouncedSendHeight]);

  // Also trigger height updates when images load
  useEffect(() => {
    if (!enabled) return;

    const handleImageLoad = () => debouncedSendHeight();
    
    // Listen for all image load events
    document.addEventListener('load', handleImageLoad, true);
    
    return () => {
      document.removeEventListener('load', handleImageLoad, true);
    };
  }, [enabled, debouncedSendHeight]);

  return {
    sendHeightUpdate: sendHeightUpdate
  };
};
