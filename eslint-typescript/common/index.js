module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    '../../eslint/frontend/index',
    './rules/eslint-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
