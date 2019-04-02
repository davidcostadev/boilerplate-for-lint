module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/forbid-prop-types': ['error', { forbid: ['object', 'array'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unsafe': 'error',
    'jsx-a11y/label-has-for': 'off',
    'prettier/prettier': ['error'],
  },
  env: { es6: true },
};
