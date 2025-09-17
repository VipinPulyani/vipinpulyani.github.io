import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

const Analytics = () => {
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return null;
};

export default Analytics;