const path = require('path');

const tslintMS = require.resolve('tslint-microsoft-contrib');

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-eslint-rules',
    './rules/eslint.js',
    './rules/functionality.js',
    './rules/maintainability.js',
    './rules/react.js',
    './rules/style.js',
    './rules/typescript.js',
  ],
  rulesDirectory: [
    path.dirname(tslintMS),
  ],
};
