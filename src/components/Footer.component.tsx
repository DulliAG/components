import { Box, BoxProps, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { LinkRouter } from './RouterLink.component';

export interface FooterCategory {
  heading: string;
  links: FooterLink[];
}

export interface FooterLink {
  text: string;
  href: string;
  routerLink?: boolean;
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
    <Box
      {...props}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        borderTop: (theme) => `1.5px solid ${theme.palette.divider}`,
        ...props.sx,
      }}
    >
      <Box sx={{ px: { xs: 2, md: 5 }, py: 2 }}>
        {categories.length > 0 && (
          <Grid container spacing={3} columns={{ xs: 2, md: 5 }}>
            {categories.map(({ heading, links }, index) => (
              <Grid key={heading + index} item xs={1} md={1}>
                <Typography variant="h5" color={(theme) => theme.palette.primary.main}>
                  {heading}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {links.map(({ text, href, routerLink }, index) =>
                    routerLink ? (
                      <Box key={text}>
                        <LinkRouter
                          to={href}
                          sx={{
                            transition: 'color 100ms',
                            textDecoration: 'none',
                            color: (theme) => theme.palette.text.secondary,
                            '&:hover': {
                              textDecoration: 'none',
                              color: (theme) => theme.palette.primary.main,
                            },
                          }}
                        >
                          {text}
                        </LinkRouter>
                      </Box>
                    ) : (
                      <Box key={heading + text + index}>
                        <Link
                          sx={{
                            transition: 'color 100ms',
                            textDecoration: 'none',
                            color: (theme) => theme.palette.text.secondary,
                            '&:hover': {
                              textDecoration: 'none',
                              color: (theme) => theme.palette.primary.main,
                            },
                          }}
                          href={href}
                        >
                          {text}
                        </Link>
                      </Box>
                    )
                  )}
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
