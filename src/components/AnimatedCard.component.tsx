import { Card as MuiCard, CardProps as MuiCardProps, alpha } from '@mui/material';
import React from 'react';

export const AnimatedCard: React.FC<MuiCardProps & React.PropsWithChildren> = (props) => {
  return (
    <MuiCard
      {...props}
      sx={{
        transition: 'all 200ms',
        position: 'relative',
        overflow: 'hidden',
        p: 2,
        color: (theme) => theme.palette.text.primary,
        backgroundColor: (theme) => theme.palette.background.paper,
        '&::before': {
          content: '""',
          zIndex: 0,
          transition: 'all 200ms',
          position: 'absolute',
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.4),
          right: '-60px',
          top: '-40px',
          width: '100px',
          height: '100px',
          borderRadius: '50px',
        },
        // '&:hover::before': {
        //   right: 0,
        //   top: 0,
        //   width: '100%',
        //   height: '100%',
        //   backgroundColor: (theme) => theme.palette.primary.main,
        //   borderRadius: 0,
        // },
        // '&:hover': {
        //   color: (theme) => theme.palette.primary.contrastText,
        // },
        ...props.sx,
      }}
    >
      {props.children}
    </MuiCard>
  );
};
