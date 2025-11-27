import globals from 'globals';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        firebase: 'readonly',
        GameManager: 'writable',
        Grid: 'writable',
        HTMLActuator: 'writable',
        KeyboardInputManager: 'writable',
        LocalScoreManager: 'writable',
        Tile: 'writable',
        highestTileIndex: 'writable',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern:
            '^(GameManager|Grid|HTMLActuator|KeyboardInputManager|LocalScoreManager|Tile|highestTileIndex|_.*)$',
        },
      ],
      'no-console': 'off',
      'prefer-const': 'warn',
      'no-var': 'warn',
      eqeqeq: ['warn', 'always'],
      curly: ['warn', 'all'],
      'no-undef': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-prototype-builtins': 'warn',
    },
  },
  {
    files: [
      'eslint.config.js',
      'vite.config.js',
      'vitest.config.js',
      'playwright.config.js',
      'tests/**/*.js',
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.devcontainer/**'],
  },
];
