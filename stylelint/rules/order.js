module.exports = {
  rules: {
    'order/declaration-block-order': [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules',
        'at-rules',
    ],
    'order/declaration-block-properties-specified-order': [
      [
        /* Positioning */
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        /* Box-model */
        'display',
        'float',
        'width',
        'height',

        /* Typography */
        'font',
        'line-height',
        'color',
        'text-align',

        /* Visual */
        'background-color',
        'border',
        'border-radius',
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
