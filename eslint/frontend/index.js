module.exports = {
  extends: [
    'eslint-config-airbnb',
    '../common/index',

    // Plugins
    './rules/jsx-a11y',
    './rules/react',
  ],
  plugins: ['jsx-a11y', 'react'],
};
