module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  overrides: [
    {
      files: ['rules/*.js'],
    },
  ],
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // Declarations
    'declaration-block-no-redundant-longhand-properties': null,
  },
};
