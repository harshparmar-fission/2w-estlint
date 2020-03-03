module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: [
    '../css/index',
  ],
  overrides: [
    {
      files: ['rules/*.js'],
    },
  ],
  rules: {
    // Sheet
    'max-empty-lines': 2,

    // Syntax
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['else', 'if'],
    }],
  },
};
