import { Box, BoxProps, Grid, Link, Typography } from '@mui/material';
import React from 'react';

export interface FooterCategory {
  heading: string;
  links: FooterLink[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface BaseFooterProps extends BoxProps {
  text?: string;
}

export interface FooterProps extends BoxProps {
  text?: string;
  categories?: FooterCategory[];
  baseFooterBoxProps?: BoxProps;
}

export const BaseFooter: React.FC<BaseFooterProps> = (props) => {
  const { text = `© ${new Date().getFullYear()}` } = props;
  return (
    <Box
      {...props}
      sx={{
        p: 3,
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        ...props.sx,
      }}
    >
      <Typography sx={{ textAlign: 'center', fontWeight: 'bolder' }}>{text}</Typography>
    </Box>
  );
};

export const Footer: React.FC<FooterProps> = (props) => {
  const { categories, text, baseFooterBoxProps } = props;

  if (!categories || categories.length < 1) {
    return <BaseFooter text={text} />;
  }
  return (
    <Box {...props} sx={{ backgroundColor: '#333', ...props.sx }}>
      <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
        {categories.length > 0 && (
          <Grid container spacing={3} columns={{ xs: 2, md: 5 }}>
            {categories.map(({ heading, links }, index) => (
              <Grid key={heading + index} item xs={1} md={1}>
                <Typography variant="h5" color={(theme) => theme.palette.primary.main}>
                  {heading}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {links.map((link) => (
                    <Link
                      key={heading + link.text + index}
                      sx={{
                        transition: 'color 100ms',
                        textDecoration: 'none',
                        color: (theme) => 'rgba(255, 255, 255, 0.6)',
                        '&:hover': {
                          textDecoration: 'none',
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <BaseFooter text={text} {...baseFooterBoxProps} />
    </Box>
  );
};
