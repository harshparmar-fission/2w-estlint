module.exports = {
  rules: {
    // Errors
    // ------

    // disallow use of constant expressions in conditions
    'no-constant-condition': ['error'],
    // disallow control characters in regular expressions
    'no-control-regex': ['error'],
    // disallow a duplicate case label.
    'no-duplicate-case': ['error'],
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': ['error'],
    // disallow assigning to the exception in a catch block
    'no-ex-assign': ['error'],
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': ['error'],
    // disallow unnecessary semicolons
    'no-extra-semi': ['error'],
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': ['error'],
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': ['error'],
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': ['error'],
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': ['error'],
    // disallow sparse arrays
    'no-sparse-arrays': ['error'],
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',
    // Avoid code that looks like two expressions but is actually one
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': ['error'],
    // disallow comparisons with the value NaN
    'use-isnan': ['error'],
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': ['error'],

    // Best Practices
    // --------------

    // enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 4],
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'error',
    // disallow magic numbers
    'no-magic-numbers': 'off',
    // disallow use of multiple spaces
    'no-multi-spaces': 'error',

    // Style
    // --------------

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],
    // enforce spacing inside single-line blocks
    'block-spacing': ['error', 'always'],
    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // enforce camelcase naming convention
    camelcase: 'error',
    // require or disallow trailing commas
    'comma-dangle': ['error', 'always-multiline'],
    // require or disallow newline at the end of files
    'eol-last': 'error',
    // disallow specified identifiers
    // TODO: Re-enable this rule once bug is fixed:
    // https://github.com/eslint/eslint/issues/12567
    // 'id-blacklist': [
    //   'error', 'any', 'Number', 'number', 'String', 'string',
    //   'Boolean', 'boolean', 'Undefined', 'undefined',
    // ],
    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'off',
    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'error',
    // require or disallow an empty line between class members
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],
    // enforce a maximum line length
    'max-len': ['error', {
      code: 140,
    }],
    'no-nested-ternary': 'off',
    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],
    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      consistent: true,
      minProperties: 10,
    }],
    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed'],
    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single'],
    // require object keys to be sorted
    'sort-keys': 'off',
    // enforce consistent spacing before 'function' definition opening parenthesis
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // ES6
    // --------------

    // enforces no braces where they can be omitted
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    // require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    // require space before/after arrow function's arrow
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'object-shorthand': 'error',
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error'],
    // require 'const' declarations for variables that are never reassigned after declared
    'prefer-const': 'error',
    // require destructuring from arrays and/or objects
    'prefer-destructuring': 'off',
    // require template literals instead of string concatenation
    'prefer-template': 'error',
  },
};
