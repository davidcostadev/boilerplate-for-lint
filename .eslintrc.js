module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  env: { es6: true },
};
