import { Outlet, useLocation } from 'react-router';
import React from 'react';
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';

export function Root() {
  const { pathname, hash } = useLocation();

  // Non-blocking deferred scroll positioning for 60fps route switching
  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Defer window scroll reset to next animation frame so new route renders instantly
    const rAF = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(rAF);
  }, [pathname, hash]);

  return (
    <>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </>
  );
}
