module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['google', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
}