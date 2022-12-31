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

export const DarkTheme = createTheme({
  breakpoints: breakpoints,
  direction: direction,
  shape: shape,
  unstable_strictMode: unstable_strictMode,
  palette: {
    mode: 'dark',
    primary: {
      '50': '#53b86a',
      '500': '#28a745',
      '900': '#1c7430',
      main: '#28a745',
      light: '#53b86a',
      dark: '#1c7430',
      contrastText: '#fff',
    },
    divider: 'rgba(194, 224, 255, 0.08)',
    background: {
      default: '#212121',
      paper: '#212121',
    },
    text: {
      primary: '#fff',
      secondary: '#BDBDBD ',
      disabled: '#F5F5F5 ',
    },
  },
  typography: typography,
  mixins: mixins,
  shadows: shadows,
  transitions: transitions,
  zIndex: zIndex,
});
