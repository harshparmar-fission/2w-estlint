module.exports = {
  extends: [
    'stylelint-config-standard',
    './rules/color',
    './rules/declaration',
    './rules/font',
    './rules/selector',
    './rules/sheet',
    './rules/syntax',
  ],
  rules: {
    // Declarations
    'declaration-block-no-redundant-longhand-properties': null,
    // Sheet
    'stylelint-disable-reason': 'always-after',
  },
};
