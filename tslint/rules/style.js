module.exports = {
  rules: {
    'array-type': [true, 'array'],
    // Prefer the eslint rules for this
    'arrow-parens': false,
    'arrow-return-shorthand': [true, 'multiline'],
    'import-spacing': true,
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
    }],
    'interface-name': [
      true,
      'always-prefix',
    ],
    'no-angle-bracket-type-assertion': true,
    'object-curly-spacing': [
      true,
      'always',
    ],
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ],
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'case-insensitive',
        'named-imports-order': 'lowercase-first',
      },
    ],
    'prefer-method-signature': true,
    quotemark: [true, 'single', 'jsx-double', 'avoid-escape'],
    semicolon: true,
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
  },
};
