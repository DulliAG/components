# @dulliag/components

![npm](https://img.shields.io/npm/v/@dulliag/components?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@dulliag/components?label=Downloads&style=for-the-badge)
![NPM](https://img.shields.io/npm/l/@dulliag/components?style=for-the-badge)

## Topics

- [Installation](#installation)
- [This package contains](#this-package-contains)
- [How to build](#how-to-build)

## Installation

1. Install the npm-package using `npm i @dulliag/components`

2. Import required files in your index.(js|jsx|ts|tsx) and index.html which is located in your public folder

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
  />
</head>
```

```tsx
import '@dulliag/components/style/master.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';
```

**Make sure you have `react-router-dom`(`npm i react-routerdom`) (and `npm i @types/react-router-dom -D` if you're using Typescript) installed for using the Breadcrumb, Navbar and Footer**.

Like this

```tsx
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Breadcrumb, Footer } from '@dulliag/components';

<Router>
  <Navbar />
  <Breadcrumb />
  {/* Website content goes here... */}
  <Footer />
</Router>;
```

## This package contains...

- [CookieDisclaimer](#cookiedisclaimer)
- [Breadcrumb](#breadcrumb)
- [Toast](#toast)
- [Navbar](#navbar)
- [Footer](#footer)
- [Spinner](#spinner)

### CookieDisclaimer

```tsx
import { CookieDisclaimerProps, CookieDisclaimer } from '@dulliag/components';

<CookieDisclaimer cookieName="cookies" />;
```

### Breadcrumb

```tsx
import { BreadcrumbProps, Breadcrumb } from '@dulliag/components';

<Breadcrumb defaultPathName="DulliAG" />;
```

### Toast

```tsx
import {
  IToast,
  ToastContext,
  ToastContextProvider,
} from '@dulliag/components';

<ToastContextProvider>{/* children */}</ToastContextProvider>;
```

**How to use...**

> If no `type`-value is given the default type is set to success.
> You don't need to give an value for `close`

```tsx
import React, { FC, useContext, useState } from 'react';
import {
  CookieDisclaimer,
  ToastContextProvider,
  ToastContext,
  Navbar,
  Breadcrumb,
  Footer,
} from '@dulliag/components';

<ToastContextProvider>
  <CookieDisclaimer />
  <Navbar links={...} />
  <Breadcrumb />
  <TestSection />
  <Footer props={...} />
</ToastContextProvider>

const TestSection: FC = () => {
  const {toasts, setToasts} = useContext(ToastContext);
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setToasts(list => [...list, {
      type: "info",
      text: `Welcome ${name}`,
      close: {
        text: "Logout",
        action: () => {/*code...*/}
      }
    }])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter your name..." onChange={(e) => setName(e.target.value)}>
      <button type="submit">Fire toast</button>
    </form>
  );
}
```

### Navbar

```tsx
import { NavbarLink, NavbarProps, Navbar } from '@dulliag/components';

<Navbar
  brand="DulliAG"
  badge="Beta"
  links={NavbarLink[]}
/>;
```

### Footer

```tsx
import { FooterLink, FooterAd, FooterAuthor, FooterProps, Footer } from '@dulliag/components';

<Footer
  links={FooterLink[]}
  partner={FooterLink[]}
  other={FooterLink[]}
  ad={FooterAd}
  author={FooterAuthor}
  version={string}
/>;
```

### Spinner

```tsx
import { SpinnerProps, Spinner } from '@dulliag/components';

<Spinner small={true} large={false} />;
```

## How to build

1. Create a new build using `npm run prepare`

If the build was successful we proceed with the following steps...

2. Increase the version using the command `npm version [major|minor|patch]`

3. Make sure you are logged in `npm login`

4. After this publish this package by using the `npm publish --access public` command
