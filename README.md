# @dulliag/components

## Topics

- [Installation](#installation)
- [How to build](#how-to-build)

## Installation

1. Create `.npmrc`

   ```
   @dulliag:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=<GITHUB_PERSONAL_ACCESS_TOKEN>
   ```

2. Install package
   > Make sure to have [Material UI](https://mui.com) installes in order to use these components and the provided theme properly
   ```shell
   npm install @dulliag/components
   ```

## Local setup

1. Install all dependencies

   ```shell
   npm install
   ```

2. Setup husky

   > Install husky once in order to run our GIT-hooks
   > If you already have installed the dependencies Husky should already got set-up

   ```shell
   npm run prepare
   ```

   **How to add a hook?**

   ```shell
   npx husky add .husky/pre-commit "npm test"
   git add .husky/pre-commit
   ```

   Make a commit

   ```shell
   git commit -m "Keep calm and commit"
   # `npm test` will run
   ```

## Local testing

## How to build

1. Create a new build using `npm run build`

If the build was successful we proceed with the following steps...

2. Increase the version using the command `npm version [major|minor|patch]`

3. Make sure you are logged in `npm login --registry=https://npm.pkg.github.com --scope=@dulliag`

4. After this publish this package by using the `npm publish --access public` command
