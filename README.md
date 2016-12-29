# 2W-Lint
A collection of linters specific for the 2nd Watch coding standards.

- [Contributing](#contributing)
- [Installation](#installation)
- [Usage](#usage)
  - [ESLint](#eslint) - Javascript
  - [TSLint](#tslint) - Typescript
  - [CSSLint](#csslint) - CSS (_pending_)

## Contributing

If there are rules that need changed / updated, submit an [issue](https://github.com/2ndWatch/2W-Lint/issues/new) or [pull request](https://github.com/2ndWatch/2W-Lint/pulls). If necessary, we can review rule changes as a group.

## Installation

**via NPM**:  
`npm install --save-dev ssh://github.com/2ndWatch/2W-Lint.git`

**via Yarn**:  
`yarn add --dev ssh://github.com/2ndWatch/2W-Lint.git`

In the future, versions will be tagged. You will specify a specific tag when installing into your project. Alternatively, you can continue to use the un-tagged url to always get the latest version.

## Usage

**Note:**  
When updating your code to account for linting rules, please do so in a separate commit from any other features/bug fixes being worked on. This helps keep your commits focused on a logical set of changes, and makes code review a much easier process.

### ESLint:

[ESLint](http://eslint.org/) is a linting utility for Javascript. There are integrations for all major IDEs that will automatically lint your `.js` and `.jsx` files. The utility can also be run via command line.

Our rules are currently based on the default Airbnb Javascript style guide [[link](https://github.com/airbnb/javascript)].

1. Add an `.eslintrc` file to your repository
2. Extend the 2W-Lint eslint config

  ```
  {
    "extends": "./node_modules/2W-lint/eslint/index.js"
  }
  ```
3. Add any additional custom rules

**Usage with Webpack**:  
Use the [eslint-loader](https://github.com/MoOx/eslint-loader) webpack loader.

**Usage with Gulp**:  
Use the [eslint-gulp](https://github.com/adametry/gulp-eslint) plugin.

---

### TSLint:

[TSLint](https://palantir.github.io/tslint/) is a linting utility for Typescript. There are some IDE integrations that will automatically lint your `.ts` and `.tsx`, but support varies. The utility can also be run via command line.


Our rules are customized and heavily influenced by the Airbnb Javascript style guide [[link](https://github.com/airbnb/javascript)].

There are currently two versions of our configuration: `front-end` and `back-end`, with the only difference being the front-end configuration includes rules for ReactJS.

1. Add a `tslint.json` file to your repository
2. Extend the 2W-Lint tslint config

  ```
  {
    "extends": ["./node_modules/2W-lint/tslint/front-end"]
  }
  ```
3. Add any additional custom rules

**Usage with Webpack**:  
Use the [tslint-loader](https://www.npmjs.com/package/tslint-loader) webpack loader.

**Usage with Gulp**:  
Use the [tslint-gulp](https://www.npmjs.com/package/gulp-tslint) plugin.

---

### CSSLint:

**_Support Pending_**

[CSSLint](https://github.com/CSSLint/csslint) is a linting utility for CSS.
