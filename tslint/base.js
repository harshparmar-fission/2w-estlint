const path = require('path');

const microsoft = require.resolve('tslint-microsoft-contrib');
const codestyle = require.resolve('tslint-consistent-codestyle/rules');

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-eslint-rules',
    './rules/codestyle.js',
    './rules/eslint.js',
    './rules/functionality.js',
    './rules/maintainability.js',
    './rules/react.js',
    './rules/style.js',
    './rules/typescript.js',
  ],
  rulesDirectory: [
    path.dirname(microsoft),
    path.dirname(codestyle),
  ],
};
