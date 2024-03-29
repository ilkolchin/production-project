module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'prettier',
    'fsd-stable',
  ],
  rules: {
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'to',
          'data-testid',
          'name',
          'alt',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'testID',
          'role',
          'tag',
          'as',
          'border',
          'testid',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error',
    // Checks effect dependencies
    'react/display-name': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'fsd-stable/fsd-paths-checker': [
      'error',
      {
        alias: '@',
      },
    ],
    'fsd-stable/public-api-imports-only': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.ts',
          '**/*.test.ts',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'fsd-stable/fsd-layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
