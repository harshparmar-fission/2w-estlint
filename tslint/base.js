const path = require('path');

const tslintEslint = require.resolve('tslint-eslint-rules');
const tslintMS = require.resolve('tslint-microsoft-contrib');

module.exports = {
  extends: [
    'tslint:latest',
    './rules/eslint.js',
    './rules/functionality.js',
    './rules/maintainability.js',
    './rules/react.js',
    './rules/style.js',
    './rules/typescript.js',
  ],
  rulesDirectory: [
    path.join(path.dirname(tslintEslint), 'dist/rules'),
    path.dirname(tslintMS),
  ],
};
