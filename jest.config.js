module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/config/tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coveragePathIgnorePatterns: ['styles.ts'],
  collectCoverageFrom: [
    'src/core/utils/**/*.{ts,tsx}',
    'src/presentation/components/**/*.{ts,tsx}',
    'src/presentation/pages/**/*.{ts,tsx}',
    '!src/presentation/pages/index.ts',
    '!src/presentation/components/index.ts',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|webp)$':
      '<rootDir>/src/config/tests/fileMock.js',
  },
  moduleNameMapper: {
    '^root(.*)$': '<rootDir>/src$1',
    '^presentation(.*)$': '<rootDir>/src/presentation$1',
    '^core(.*)$': '<rootDir>/src/core$1',
    '^config(.*)$': '<rootDir>/src/config$1',
    '^contracts(.*)$': '<rootDir>/src/contracts$1',
  },
};
