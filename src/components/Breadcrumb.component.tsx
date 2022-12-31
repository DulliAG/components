import { Box, BoxProps, Link, Breadcrumbs as MuiBreadcrumb, useTheme } from '@mui/material';
import React from 'react';
import { useWindowDimensions } from '../hooks';
import { LinkRouter } from './RouterLink.component';

export interface BreadcrumbLink {
  text: string;
  href: string;
  last?: boolean;
  routerLink?: boolean;
}

export interface BreadcrumbLinkProps extends BreadcrumbLink {}

export interface BreadcrumbProps extends BoxProps {
  separator?: React.ReactNode;
  links: BreadcrumbLink[];
  maxItems?: number;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  last = false,
  text,
  href,
  routerLink = false,
}) => {
  const theme = useTheme();
  if (routerLink) {
    return (
      <LinkRouter
        to={href}
        sx={{
          transition: 'color 100ms',
          textDecoration: 'none',
          color: last ? theme.palette.primary.main : theme.palette.text.primary,
          '&:hover': {
            color: last ? theme.palette.primary.dark : theme.palette.primary.main,
          },
        }}
      >
        {text}
      </LinkRouter>
    );
  }
  return (
    <Link
      sx={{
        transition: 'color 100ms',
        textDecoration: 'none',
        color: (theme) => (last ? theme.palette.primary.main : theme.palette.text.primary),
        '&:hover': {
          color: (theme) => (last ? theme.palette.primary.dark : theme.palette.primary.main),
        },
      }}
      href={href}
    >
      {text}
    </Link>
  );
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { breakpoint } = useWindowDimensions();
  const { separator = '›', maxItems = breakpoint === 'xs' ? 3 : undefined, links } = props;
  return (
    <Box
      {...props}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        px: { xs: 2, md: 6 },
        py: 1,
        backgroundColor: (theme) => theme.palette.background.default,
        borderTop: (theme) => `1.5px solid ${theme.palette.divider}`,
        borderBottom: (theme) => `1.5px solid ${theme.palette.divider}`,
        ...props.sx,
      }}
    >
      <MuiBreadcrumb aria-label="breadcrumb" separator={separator} maxItems={maxItems}>
        {links.map((link, index, list) => (
          <BreadcrumbLink key={link.text + link.href} last={index + 1 === list.length} {...link} />
        ))}
      </MuiBreadcrumb>
    </Box>
  );
};
