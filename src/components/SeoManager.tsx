import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const noindexPaths = ['/payment'];
    const shouldNoindex = noindexPaths.some((p) => location.pathname.startsWith(p));
    const robotsContent = shouldNoindex ? 'noindex, nofollow' : 'index, follow';

    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);

    const setMetaProperty = (property: string, value: string) => {
      const meta = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (meta) meta.setAttribute('content', value);
    };

    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('twitter:url', canonicalUrl);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;

    const id = decodeURIComponent(location.hash.replace(/^#/, ''));
    const attemptScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return true;
      }
      return false;
    };

    if (attemptScroll()) return;

    const t = window.setTimeout(() => {
      attemptScroll();
    }, 50);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
};

export default SeoManager;
