import { useWindowDimensions } from './useWindowDimensions.hooks';

export function useScreenSize() {
  const { breakpoint } = useWindowDimensions();

  if (breakpoint === 'xs' || breakpoint === 'sm') {
    return 'small';
  } else if (breakpoint === 'md' || breakpoint === 'lg') {
    return 'medium';
  } else return 'large';
}
