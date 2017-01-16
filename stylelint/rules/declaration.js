module.exports = {
  rules: {
    // Declarations
    'declaration-block-no-redundant-longhand-properties': false,
    'declaration-block-no-ignored-properties': true,
    'declaration-block-properties-order': [
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
        unspecified: 'bottomAlphabetical'
      },
    ],
  },
};
