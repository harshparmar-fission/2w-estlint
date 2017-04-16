module.exports = {
  rules: {
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-sparse-arrays': true,
    'no-switch-case-fall-through': true,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    // Disabling for perf reasons
    // See: https://github.com/palantir/tslint/issues/1854
    // 'no-use-before-declare': true,
    'typeof-compare': true,
  },
};
