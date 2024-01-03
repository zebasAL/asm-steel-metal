import { useEffect } from 'react';
import { useRouter } from '~/routes/hooks/use-router'
import { usePathname } from '~/routes/hooks/use-pathname'

// ----------------------------------------------------------------------

export default function useScrollToTop() {
  useEffect(() => {
    const handleRouteChange = () => {
        window.scrollTo(0, 0);
    };

    handleRouteChange();
  }, []);

  return null;
}
