module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: [
    './css',
    './rules/scss',
  ],
  rules: {
    // Sheet
    'max-empty-lines': 2,
    'no-browser-hacks': false,

    // Syntax
    'at-rule-no-unknown': false,
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
}
