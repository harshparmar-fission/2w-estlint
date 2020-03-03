module.exports = {
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
      },
    },
  ],
  rules: {
    // Must disable these base ESLint rules to prevent reporting of incorrect errors.
    camelcase: 'off',
    indent: 'off',
    'no-magic-numbers': 'off',
    'no-unused-vars': 'off',
    semi: 'off',

    // Rules disabled for miscellaneous reasons.
    'arrow-parens': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/14
    'no-undef': 'off', // Buggy in TypeScript. Use "noUnusedLocals" in tsconfig.json instead.

    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/camelcase': ['error', {
      allow: ['^UNSAFE_'],
    }],
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'off',
      overrides: {
        accessors: 'explicit',
      },
    }],
    // eslint-disable-next-line no-magic-numbers
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'never' }],
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_+$',
    }],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': ['error', {
      variableDeclaration: true,
    }],
  },
};
