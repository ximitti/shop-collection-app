module.exports = {
  root: true,
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', '@meteorjs/eslint-config-meteor'],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unescaped-entities': 'off',
    'object-shorthand': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'max-len': [
      2,
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'consistent-return': 0,
  },
}
