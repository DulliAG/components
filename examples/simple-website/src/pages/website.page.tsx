import {
  Breadcrumb,
  CookieDisclaimer,
  Footer, // Main,
  Navbar,
  ServiceBar,
  useWindowDimensions,
} from '@dulliag/components';
import { Box, styled } from '@mui/material';

export const Main = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: theme.palette.background.default,
}));

export default function Website() {
  const windowDimensions = useWindowDimensions();

  return (
    <Main>
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
        brand="DulliAG"
        pages={[
          { text: 'Webseite', href: 'https://dulliag.de' },
          { text: 'Simple Website', href: '/simple-website', routerLink: true },
          { text: 'App with Drawer', href: '/app-with-drawer', routerLink: true },
        ]}
      />
      <Breadcrumb
        sx={{
          position: 'sticky',
          top: windowDimensions.breakpoint === 'xs' ? 56 : 64,
        }}
        links={[
          { text: 'Home', href: '/', routerLink: true },
          { text: 'Simple Website', href: '/simple-website', routerLink: true },
        ]}
      />

      {Array.from({ length: 3 }).map(() => (
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
              { text: 'Impressum', href: '/Impressum', routerLink: true },
              { text: 'Datenschutz', href: '/Datenschutz', routerLink: true },
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
    </Main>
  );
}
