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
    'node_modules/tslint-eslint-rules/dist/rules',
    'node_modules/tslint-microsoft-contrib',
  ],
};
