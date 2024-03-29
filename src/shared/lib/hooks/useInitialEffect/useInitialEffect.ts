import { useEffect } from 'react';

export function useInitialEffect(callback: () => void, deps?: string) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
}
