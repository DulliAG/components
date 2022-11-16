import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { LinkRouter } from './RouterLink.component';

export interface NavbarLink {
  text: string;
  href: string;
  routerLink?: boolean;
}

export interface NavbarProps extends AppBarProps {
  brand: string | React.ReactNode;
  pages?: NavbarLink[];
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { brand, pages } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      {...props}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        boxShadow: (theme) => theme.shadows[10],
        ...props.sx,
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {typeof brand === 'string' ? (
              <Typography variant="h5" fontWeight="bold" noWrap>
                {brand}
              </Typography>
            ) : (
              brand
            )}
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {typeof brand === 'string' ? (
              <Typography variant="h5" fontWeight="bold" noWrap>
                {brand}
              </Typography>
            ) : (
              brand
            )}
          </Box>

          {pages && pages.length > 0 && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {pages.map(({ text, href, routerLink }, index, list) =>
                routerLink ? (
                  <LinkRouter
                    key={text}
                    to={href}
                    sx={{
                      transition: 'color 100ms',
                      textDecoration: 'none',
                      fontWeight: 'bolder',
                      mr: index + 1 === list.length ? 0 : 2,
                      color: (theme) => theme.palette.text.primary,
                      '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                      },
                    }}
                  >
                    {text}
                  </LinkRouter>
                ) : (
                  <Link
                    key={text}
                    href={href}
                    sx={{
                      transition: 'color 100ms',
                      textDecoration: 'none',
                      fontWeight: 'bolder',
                      mr: index + 1 === list.length ? 0 : 2,
                      color: (theme) => theme.palette.text.primary,
                      '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                      },
                    }}
                  >
                    {text}
                  </Link>
                )
              )}
            </Box>
          )}

          {pages && pages.length > 0 && (
            <Box
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(({ text, href, routerLink }, index) => (
                  <MenuItem key={text + index}>
                    {routerLink ? (
                      <LinkRouter
                        key={text}
                        to={href}
                        sx={{
                          textAlign: 'center',
                          color: (theme) => theme.palette.text.primary,
                          textDecoration: 'none',
                        }}
                      >
                        {text}
                      </LinkRouter>
                    ) : (
                      <Link
                        key={text}
                        href={href}
                        sx={{
                          textAlign: 'center',
                          color: (theme) => theme.palette.text.primary,
                          textDecoration: 'none',
                        }}
                      >
                        {text}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
};
