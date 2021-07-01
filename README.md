# @dulliag/components

## This package contains following components and interfaces...

- [CookieDisclaimer](#cookiedisclaimer)
- [Footer](#footer)

### CookieDisclaimer

```tsx
import { CookieDisclaimer } from '@dulliag/components';

<CookieDisclaimer />;
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

## How to build

1. Create a new build using `npm run prepare`

If the build was successful we proceed with the following steps...

2. Increase the version using the command `npm version [major|minor|patch]`

3. Make sure you are logged in `npm login`

4. After this publish this package by using the `npm publish --access public` command
