import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { Root } from './Root';
import { Home } from './Home';

// Route module importers mapped to React.lazy friendly default exports
export const preloadMap = {
  blogs: () => import('./BlogsPage').then((m) => ({ default: m.BlogsPage })),
  blogPost: () => import('./BlogPostPage').then((m) => ({ default: m.BlogPostPage })),
  pricing: () => import('./PricingPage').then((m) => ({ default: m.PricingPage })),
  contact: () => import('./ContactPage').then((m) => ({ default: m.ContactPage })),
  referral: () => import('./ReferralPage').then((m) => ({ default: m.ReferralPage })),
  manifesto: () => import('./ManifestoPage').then((m) => ({ default: m.ManifestoPage })),
  privacy: () => import('./PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })),
  terms: () => import('./TermsOfService').then((m) => ({ default: m.TermsOfService })),
  refund: () => import('./RefundPolicy').then((m) => ({ default: m.RefundPolicy })),
};

const BlogsPage = lazy(preloadMap.blogs);
const BlogPostPage = lazy(preloadMap.blogPost);
const PricingPage = lazy(preloadMap.pricing);
const ContactPage = lazy(preloadMap.contact);
const ReferralPage = lazy(preloadMap.referral);
const ManifestoPage = lazy(preloadMap.manifesto);
const PrivacyPolicy = lazy(preloadMap.privacy);
const TermsOfService = lazy(preloadMap.terms);
const RefundPolicy = lazy(preloadMap.refund);

// Eagerly background preload all route chunks after initial home render
if (typeof window !== 'undefined') {
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 100));
  idleCallback(() => {
    Object.values(preloadMap).forEach((preload) => preload());
  });
}

function RouteWrapper({ Component }: { Component: React.ComponentType }) {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'blogs', element: <RouteWrapper Component={BlogsPage} /> },
      { path: 'blogs/:slug', element: <RouteWrapper Component={BlogPostPage} /> },
      { path: 'blog', element: <RouteWrapper Component={BlogPostPage} /> },
      { path: 'pricing', element: <RouteWrapper Component={PricingPage} /> },
      { path: 'contact', element: <RouteWrapper Component={ContactPage} /> },
      { path: 'referral', element: <RouteWrapper Component={ReferralPage} /> },
      { path: 'manifesto', element: <RouteWrapper Component={ManifestoPage} /> },
      { path: 'privacy', element: <RouteWrapper Component={PrivacyPolicy} /> },
      { path: 'terms', element: <RouteWrapper Component={TermsOfService} /> },
      { path: 'refund', element: <RouteWrapper Component={RefundPolicy} /> },
      { path: '*', Component: Home },
    ],
  },
]);
