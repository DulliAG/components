import { Box, styled } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
  minHeight: '100%',
  backgroundColor: theme.palette.background.default,
}));
