
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useHeightCommunication } from '@/hooks/useHeightCommunication';

const Layout = () => {
  const location = useLocation();
  const { sendHeightUpdate } = useHeightCommunication({
    enabled: true,
    debounceMs: 100,
    includeRoute: true
  });

  // Trigger height update when route changes
  useEffect(() => {
    // Small delay to ensure new content is fully rendered
    const timer = setTimeout(() => {
      sendHeightUpdate();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, sendHeightUpdate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
