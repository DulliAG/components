import {
  Breadcrumb,
  CookieDisclaimer,
  Drawer,
  DrawerContainer,
  DrawerLink,
  Footer,
  Main,
  Navbar,
  ServiceBar,
  useWindowDimensions,
} from '@dulliag/components';
import {
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { List } from '@mui/material';
import React from 'react';

export default function DrawerApp() {
  const { breakpoint } = useWindowDimensions();
  const [showDrawer, setShowDrawer] = React.useState(breakpoint !== 'xs');

  return (
    <Main sx={{ flexDirection: 'row' }}>
      <DrawerContainer open={showDrawer}>
        <Drawer open={showDrawer}>
          <List>
            {[
              {
                label: 'Simple Website',
                icon: <DashboardIcon />,
                path: '/simple-website',
                routerLink: true,
              },
              {
                label: 'App with Drawer',
                icon: <DashboardIcon />,
                path: '/app-with-drawer',
                routerLink: true,
              },
            ].map((link, index) => (
              <DrawerLink key={link.label + index} {...link} onClick={() => {}} />
            ))}
          </List>
        </Drawer>
      </DrawerContainer>

      <Box
        sx={{
          width: '100%',
          backgroundColor: (theme) => theme.palette.grey[600],
        }}
      >
        <CookieDisclaimer
          text="Wir verwenden Cookies!"
          link={{ text: 'Mehr Infos...', href: 'https://www.cookiesandyou.com/' }}
          cookie={{ name: 'dag:cokies' }}
        />
        <ServiceBar
          onSignIn={(event) => {
            event.preventDefault();
            console.log('Sign in');
          }}
          onSignUp={(event) => {
            event.preventDefault();
            console.log('Sign up');
          }}
          onSignOut={(event) => {
            event.preventDefault();
            console.log('Sign out');
          }}
          user={null}
          // user={{
          //   username: 'Username',
          //   avatarUrl: 'https://i.pravatar.cc/150?img=66',
          // }}
        />
        <Navbar
          sx={{
            position: 'sticky',
          }}
          brand={
            <>
              <IconButton
                color="inherit"
                aria-label="toggle drawer"
                onClick={() => setShowDrawer((prev) => !prev)}
              >
                {showDrawer ? <MenuOpenIcon /> : <MenuIcon />}
              </IconButton>
              <Typography variant="h5" fontWeight="bolder">
                DulliAG
              </Typography>
            </>
          }
          pages={[
            { text: 'Webseite', href: 'https://dulliag.de' },
            { text: 'Simple Website', href: '/simple-website', routerLink: true },
            { text: 'App with Drawer', href: '/app-with-drawer', routerLink: true },
          ]}
        />
        <Breadcrumb
          sx={{
            position: 'sticky',
            top: breakpoint === 'xs' ? 56 : 64,
          }}
          links={[
            { text: 'Home', href: '/', routerLink: true },
            { text: 'App with Drawer', href: '/app-with-drawer', routerLink: true },
          ]}
        />

        {Array.from({ length: 2 }).map(() => (
          <Box
            sx={{
              width: '500px',
              maxWidth: '100%',
              height: '550px',
              mx: 'auto',
              backgroundColor: 'red',
            }}
          >
            This is a container
          </Box>
        ))}

        <Footer
          sx={{ mt: 'auto' }}
          text={`© ${new Date().getFullYear()} DulliAG`}
          categories={[
            {
              heading: 'Allgemeines',
              links: [
                { text: 'Impressum', href: 'https://dulliag.de/Impressum' },
                { text: 'Datenschutz', href: 'https://dulliag.de/Datenschutz' },
              ],
            },
            {
              heading: 'Links',
              links: [
                { text: 'Discord', href: '' },
                { text: 'Steam Gruppe', href: '' },
                { text: 'YouTube', href: 'https://youtube.com' },
              ],
            },
            {
              heading: 'Partner',
              links: [],
            },
            {
              heading: 'Apps',
              links: [
                { text: 'Storage', href: 'https://storage.dulliag.de' },
                { text: 'Share', href: 'https://share.dulliag.de' },
                { text: 'URL-Kürzer', href: 'https://url.dulliag.de' },
              ],
            },
            {
              heading: 'Sonstiges',
              links: [{ text: 'Google', href: 'https://google.com' }],
            },
          ]}
        />
      </Box>
    </Main>
  );
}
