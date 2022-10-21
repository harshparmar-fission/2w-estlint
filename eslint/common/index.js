module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/eslint.js',

    // Plugins
    'plugin:chai-friendly/recommended',
    './rules/import.js',
    './rules/prefer-arrow.js',
  ],
  ignorePatterns: ['node_modules/*'],
  plugins: ['chai-friendly', 'import', 'prefer-arrow'],
  rules: {
    'linebreak-style': 0,
  },
};
