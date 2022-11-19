import { Box, Drawer as MuiDrawer, DrawerProps as MuiDrawerProps, styled } from '@mui/material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkRouter } from './RouterLink.component';

export const drawerWidth = 260;

export interface DrawerLinkProps {
  label: string;
  icon: JSX.Element | React.ReactNode;
  path: string;
  onClick: () => void;
  routerLink?: boolean;
  disablePadding?: boolean;
}
export const DrawerLink: React.FC<DrawerLinkProps> = ({
  label,
  icon,
  path,
  onClick,
  routerLink,
  disablePadding = false,
}) => {
  return routerLink ? (
    <LinkRouter onClick={onClick} to={path} sx={{ textDecoration: 'none', color: 'unset' }}>
      <ListItem disablePadding={disablePadding}>
        <ListItemButton sx={{ borderRadius: (theme) => `${theme.shape.borderRadius}px` }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    </LinkRouter>
  ) : (
    <Link onClick={onClick} to={path} style={{ textDecoration: 'none', color: 'unset' }}>
      <ListItem disablePadding={disablePadding}>
        <ListItemButton sx={{ borderRadius: (theme) => `${theme.shape.borderRadius}px` }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export const DrawerContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: `${theme.transitions.duration.enteringScreen} ${theme.transitions.easing.easeIn}`,
  width: open ? drawerWidth : 0,
  flexShrink: 0,
  [theme.breakpoints.only('xs')]: {
    width: open ? drawerWidth * 1.15 : 0,
  },
}));

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <MuiDrawer
      variant="persistent"
      {...props}
      sx={{
        transition: (theme) =>
          `${theme.transitions.duration.enteringScreen} ${theme.transitions.easing.easeIn}`,
        display: 'block',
        '& .MuiDrawer-paper': {
          transition: (theme) =>
            `${theme.transitions.duration.enteringScreen} ${theme.transitions.easing.easeIn}`,
          boxSizing: 'border-box',
          width: { xs: drawerWidth * 1.15, md: drawerWidth },
          backgroundColor: '#333',
          color: (theme) => theme.palette.primary.contrastText,
        },
        ...props.sx,
      }}
    >
      {props.children}
    </MuiDrawer>
  );
};
