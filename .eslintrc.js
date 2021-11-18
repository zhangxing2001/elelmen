module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    'no-trailing-spaces': 0,
    // 'no-unused-vars': 0
    // 'comma-dangle':1
    // 'semi':'off'
    // "space-before-function-paren": "off",
    // "no-unused-vars":0
    'space-before-function-paren': 0
  }
}
