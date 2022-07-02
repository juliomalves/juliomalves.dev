const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const nextJestConfig = nextJest({ dir: './' })

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/global-mocks.ts'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testMatch: ['<rootDir>/tests/specs/**/*.test.{ts,tsx}'],
    moduleNameMapper: {
        '^react$': 'preact/compat',
        '^react-dom/test-utils$': 'preact/test-utils',
        '^react-dom$': 'preact/compat',
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
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
}

module.exports = nextJestConfig(config)
