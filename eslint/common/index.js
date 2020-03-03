module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/eslint.js',

    // Plugins
    'plugin:chai-friendly/recommended',
    './rules/import.js',
    './rules/prefer-arrow.js',
  ],
  plugins: ['chai-friendly', 'import', 'prefer-arrow'],
};
