import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';

export default [
    // Ignored folder/files
    {
        ignores: ['**/node_modules/*', '**/.next/*', '**/out/*']
    },
    // Global settings
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...globals.node
            }
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    },
    // JS/TS
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': 0,
            '@typescript-eslint/explicit-member-accessibility': 0,
            '@typescript-eslint/indent': 0,
            '@typescript-eslint/ban-ts-ignore': 0,
            '@typescript-eslint/explicit-module-boundary-types': 0,
            '@typescript-eslint/member-delimiter-style': 0,
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/no-use-before-define': 0,
            '@typescript-eslint/consistent-type-imports': [1, {
                prefer: 'type-imports',
            }],
            '@typescript-eslint/no-unused-vars': [2, {
                argsIgnorePattern: '^_',
            }],
            'no-console': [1, {
                allow: ['warn', 'error', 'info'],
            }],
            'comma-dangle': ['error', 'never']
        }
    },
    // React
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    // React hooks
    {
        plugins: {
            'react-hooks': reactHooksPlugin,
        },
        rules: reactHooksPlugin.configs.recommended.rules
    },
    // JSX A11y
    {
        ...jsxA11yPlugin.flatConfigs.recommended,
        rules: {
            'jsx-a11y/anchor-is-valid': ['error', {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }]
        }
    },
    // Next.js
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            '@next/next/no-sync-scripts': 0
        }
    },
    // Prettier
    prettierConfig,
    // React Testing Library
    {
        files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
        ...testingLibraryPlugin.configs['flat/react']
    }
];
