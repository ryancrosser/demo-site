module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    BUILD_INFO: true,
    HAL9000_URL: true,
    HAL9000_CONFIG: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^__' }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
