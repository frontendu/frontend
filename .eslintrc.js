module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'react/prop-types': [0]
  },
  globals: {
    'graphql': true,
    '__PREFIX_PATHS__': true,
    '__PATH_PREFIX__': true
  }
};