module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest'
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
        '\\.(css|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '^@components/(.*)': '<rootDir>/src/components/$1',
        '^@pages/(.*)': '<rootDir>/src/pages/$1',
        '^@root/(.*)': '<rootDir>/$1',
        '^@tests/(.*)': '<rootDir>/tests/$1'
    }
}
