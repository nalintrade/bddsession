// import { TextEncoder, TextDecoder } from 'util';
// Object.assign(global, { TextDecoder, TextEncoder });

module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
      '^react-router-dom/(.*)$': '<rootDir>/node_modules/react-router-dom/$1'
    },
    testPathIgnorePatterns: [
      '/node_modules/',
      '/public/'
    ],
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: '.',
        outputName: 'jest-junit.xml'
      }]
    ],
    testEnvironment: 'jsdom'
  };