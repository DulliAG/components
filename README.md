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

2. Import required files in your index.(js|jsx|ts|tsx)

```tsx
import '@dulliag/components/style/master.scss';
import 'remixicon/fonts/remixicon.css';
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

### CookieDisclaimer

```tsx
import { CookieDisclaimer } from '@dulliag/components';

<CookieDisclaimer />;
```

### Breadcrumb

```tsx
import { Breadcrumb } from '@dulliag/components';

<Breadcrumb />;
```

### Toast

```tsx
import {
  Toast,
  ToastList,
  ToastContext,
  useToastContext,
  ToastContextProvider,
} from '@dulliag/components';

<ToastContextProvider>{/* children */}</ToastContextProvider>;
```

**How to use...**

> If no `type`-value is given the default type is set to success.
> You don't need to give an value for `close` and `action`

```tsx
import React, { FC, useState } from 'react';
import {
  CookieDisclaimer,
  ToastContextProvider,
  useToastContext,
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
  const addToast = useToastContext();
  const [name, setName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // {
    //   type: "success" || "info" || "error",
    //   text: "This some text!",
    //   close: "ALERT",
    //   action: () => alert("You have clicked the button!")
    // }
    addToast({
      type: "error",
      text: `Welcome ${name}`,
    });
  }

  return <form onSubmit={handleSubmit}>
    <input placeholder="Enter your name..." onChange={(e) => setName(e.target.value)}>
    <button type="submit">Fire toast</button>
  </form>
}
```

### Navbar

```tsx
import { NavbarLink, NavbarProps, Navbar } from '@dulliag/components';

<Navbar
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

## How to build

1. Create a new build using `npm run prepare`

If the build was successful we proceed with the following steps...

2. Increase the version using the command `npm version [major|minor|patch]`

3. Make sure you are logged in `npm login`

4. After this publish this package by using the `npm publish --access public` command
