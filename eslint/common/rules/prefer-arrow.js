module.exports = {
  rules: {
    'prefer-arrow/prefer-arrow-functions': ['error', {
      disallowPrototype: false,
      singleReturnOnly: false,
      classPropertiesAllowed: false,
    }],
  },
};
