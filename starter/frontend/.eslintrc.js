module.exports = {
  ignorePatterns: ['build/', 'dist/', 'node_modules/'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'off',
    'react/prop-types': 0,
    'react/jsx-uses-vars': 'warn',
    'no-unused-vars': 'off',
  },
};