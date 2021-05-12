# 2W-Lint
A collection of linters specific for the 2nd Watch coding standards.

- [Contributing](#contributing)
- [Installation](#installation)
- [Usage](#usage)
  - [ESLint](#eslint) - Javascript
  - [StyleLint](#stylelint) - CSS

## Contributing

If there are rules that need changed / updated, submit an [issue](https://gitlab.com/2ndwatch/packages/2w-eslint/-/issues) or [merge request](https://gitlab.com/2ndwatch/packages/2w-eslint/-/merge_requests). If necessary, we can review rule changes as a group.

## Installation

Configure the .npmrc in your project to pull from our private package repository:
```
@2ndwatch:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=1tE6T233rtNJxKQHyJ3P
```

**via NPM**:  
`npm install --save-dev @2ndwatch/eslint`

**via Yarn**:  
`yarn add --dev @2ndwatch/eslint`

## Usage

**Note:**  
When updating your code to account for linting rules, please do so in a separate commit from any other features/bug fixes being worked on. This helps keep your commits focused on a logical set of changes, and makes code review a much easier process.

### ESLint:

[ESLint](http://eslint.org/) is a linting utility for Javascript. There are integrations for all major IDEs that will automatically lint your `.js` and `.jsx` files. The utility can also be run via command line.

Our rules are currently based on the default Airbnb Javascript style guide [[link](https://github.com/airbnb/javascript)].

For documentation and examples on the available rules, refer to the following:  
- [ESLint List of available rules](http://eslint.org/docs/rules/)
- [Airbnb JS rule configuration](https://github.com/airbnb/javascript)
- [Airbnb React rule configuration](https://github.com/airbnb/javascript)

**To configure linting:**

1. Add an `.eslintrc` file to your repository
2. Extend the 2W-Lint eslint config

  ```
  {
    "extends": "./node_modules/@2ndwatch/eslint/eslint-typescript/frontend/index.js"
  }
  ```
3. Add any additional custom rules

**Usage with Webpack**:  
Use the [eslint-loader](https://github.com/MoOx/eslint-loader) webpack loader.

**Usage with Gulp**:  
Use the [eslint-gulp](https://github.com/adametry/gulp-eslint) plugin.

---

### Stylelint:

[Stylelint](http://stylelint.io/) is a linting utility for CSS and its various flavors (SASS, LESS, etc). There are integrations for all major IDEs that will automatically lint your `.css` and `.scss` files. The utility can also be run via command line.


Our rules are customized and influenced by several prominent leaders in the industry:
- Github's [Primer](http://primercss.io/guidelines/)
- Airbnb's [style guide](https://github.com/airbnb/css)
- Mark Ottos [Code Guide](http://codeguide.co/)


There are currently two versions of our configuration: `css` and `scss`, with the difference being the scss configuration includes rules for .scss files.

For documentation and examples on the available rules, refer to the following:  
- [Stylelint List of available rules](http://stylelint.io/user-guide/rules/)
- [Stylelint standard configuration](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-scss available rules](https://github.com/kristerkari/stylelint-scss)

**To configure linting:**

1. Add an `.stylelintrc` file to your repository
2. Extend the @2ndwatch/eslint stylelint config

  ```
  {
    "extends": "./node_modules/@2ndwatch/eslint/stylelint/scss/index.js"
  }
  ```
3. Add any additional custom rules

**Usage with your editor**:
Use a compatible plugin. Options are found on the [stylelint website](http://stylelint.io/user-guide/complementary-tools/#editor-plugins)

**Usage with Webpack**:  
Use the [stylelint-webpack-plugin](https://github.com/JaKXz/stylelint-webpack-plugin) webpack plugin.

**Usage with Gulp**:  
Use the [gulp-stylelint](https://github.com/olegskl/gulp-stylelint) plugin.
