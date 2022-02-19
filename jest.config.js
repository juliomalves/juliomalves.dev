const nextJest = require('next/jest')

const nextJestConfig = nextJest({ dir: './' })

module.exports = nextJestConfig({
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/global-mocks.ts'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testMatch: ['<rootDir>/tests/specs/**/*.test.{ts,tsx}'],
    moduleNameMapper: {
        '^react$': 'preact/compat',
        '^react-dom/test-utils$': 'preact/test-utils',
        '^react-dom$': 'preact/compat',
        '^@/(.*)': '<rootDir>/$1'
    },
    collectCoverageFrom: ['<rootDir>/components/**/*.{ts,tsx}', '<rootDir>/helpers/**/*.{ts,tsx}', '<rootDir>/pages/**/*.{ts,tsx}'],
    coverageDirectory: '<rootDir>/tests/coverage',
    coverageReporters: ['text-summary', 'lcov', 'html'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
})
