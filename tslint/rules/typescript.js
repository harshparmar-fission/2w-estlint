module.exports = {
  rules: {
    'member-access': [true, 'check-accessor'],
    'no-empty-interface': true,
    'no-inferrable-types': true,
    'no-internal-module': true,
    'no-magic-numbers': true,
    'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
    'prefer-for-of': true,
    typedef: [
      true, 'callSignature', 'indexSignature', 'parameter', 'propertySignature', 'variableDeclarator', 'memberVariableDeclarator',
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        parameter: 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace',
      },
    ],
  },
};
