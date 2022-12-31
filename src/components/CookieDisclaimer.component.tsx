import { Close as CloseIcon, Cookie as CookieIcon } from '@mui/icons-material';
import { Box, Button, Link, Typography, alpha } from '@mui/material';
import React from 'react';
import UniversalCookie, { CookieSetOptions } from 'universal-cookie';

export interface CookieDisclaimerProps {
  text: string;
  link: {
    text: string;
    href: string;
  };
  cookie: {
    name: string;
    options?: CookieSetOptions;
  };
}

export const CookieDisclaimer: React.FC<CookieDisclaimerProps> = ({ text, link, cookie }) => {
  const cookies = new UniversalCookie();
  const [show, setShow] = React.useState(cookies.get(cookie.name) === undefined);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    cookies.set(cookie.name, 'true', cookie.options);
    setShow(false);
  };

  if (!show) return null;
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: (theme) => theme.spacing(2),
        left: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: 1,
        height: '68px',
        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.9),
        boxShadow: (theme) => theme.shadows[1],
      }}
    >
      <Box
        sx={{
          aspectRatio: '1/1',
          width: 'auto',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: (theme) => theme.palette.primary.light,
            borderRadius: (theme) => `${theme.shape.borderRadius}px`,
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          <CookieIcon />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          textAlign: 'center',
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        <Typography>{text}</Typography>
        <Link href={link.href} sx={{ color: (theme) => theme.palette.primary.contrastText }}>
          {link.text}
        </Link>
      </Box>

      <Box
        sx={{
          aspectRatio: '1/1',
          width: 'auto',
          height: '100%',
        }}
      >
        <Button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minWidth: 'unset',
            height: '100%',
            backgroundColor: (theme) => theme.palette.primary.light,
            borderRadius: (theme) => `${theme.shape.borderRadius}px`,
            color: (theme) => theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.primary.dark,
            },
          }}
          onClick={handleClick}
        >
          <CloseIcon />
        </Button>
      </Box>
    </Box>
  );
};
