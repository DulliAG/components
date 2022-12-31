import { createTheme } from '@mui/material';
import {
  breakpoints,
  direction,
  mixins,
  shadows,
  shape,
  transitions,
  typography,
  unstable_strictMode,
  zIndex,
} from './theme';

export const LightTheme = createTheme({
  breakpoints: breakpoints,
  direction: direction,
  shape: shape,
  unstable_strictMode: unstable_strictMode,
  palette: {
    mode: 'light',
    divider: 'rgb(218, 220, 224)',
    primary: {
      '50': '#53b86a',
      '500': '#28a745',
      '900': '#1c7430',
      main: '#28a745',
      light: '#53b86a',
      dark: '#1c7430',
      contrastText: '#fff',
    },
  },
  typography: typography,
  mixins: mixins,
  shadows: shadows,
  transitions: transitions,
  zIndex: zIndex,
});
