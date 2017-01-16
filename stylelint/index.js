module.exports = {
  "plugins": [
    "stylelint-scss"
  ],
  'extends': [
    'stylelint-config-standard',
    './rules/color',
    './rules/declaration',
    './rules/font',
    './rules/selector',
    './rules/sheet',
    './rules/syntax',
  ],
  'rules': [
    'stylelint-disable-reason': 'always-after'
  ]
}
