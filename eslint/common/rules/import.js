module.exports = {
  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        '**/__tests/**', // 2ndWatch pattern
        'test.{js,jsx,ts,tsx}', // repos with a single test file
        'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/karma.config.{js,ts}', // karma config
        '**/karma.config.*.{js,ts}', // karma config
        '**/jest.config.{js,ts}', // jest config
        '**/jest.setup.{js,ts}', // jest setup
        '**/vue.config.{js,ts}', // vue-cli config
        '**/webpack.config.{js,ts}', // webpack config
        '**/webpack.config.*.{js,ts}', // webpack config
        '**/rollup.config.{js,ts}', // rollup config
        '**/rollup.config.*.{js,ts}', // rollup config
        '**/gulpfile.{js,ts}', // gulp config
        '**/gulpfile.*.{js,ts}', // gulp config
        '**/Gruntfile{,.{js,ts}}', // grunt config
        '**/protractor.conf.{js,ts}', // protractor config
        '**/protractor.conf.*.{js,ts}', // protractor config
        '**/karma.conf.{js,ts}', // karma config
      ],
      optionalDependencies: false,
    }],
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        ['builtin', 'external'],
        ['internal', 'unknown', 'parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'off',
  },
};
