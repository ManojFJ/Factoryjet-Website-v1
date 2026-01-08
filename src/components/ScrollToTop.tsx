import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/gtm';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Also ensure document.documentElement scrolls to top (for some browsers)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Track page view in GTM
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
