const path = require('path')

module.exports = {
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: path.resolve(__dirname, './'),
    setupFilesAfterEnv: ['<rootDir>/tests/global-mocks.ts'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
    moduleNameMapper: {
        '^react$': 'preact/compat',
        '^react-dom/test-utils$': 'preact/test-utils',
        '^react-dom$': 'preact/compat',
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/tests/__mocks__/fileMock.js',
        '^@/(.*)': '<rootDir>/$1'
    }
}
