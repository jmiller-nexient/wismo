module.exports = {
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/*.test.{ts,tsx}',
    '!app/*/RbGenerated*/*.{ts,tsx}',
    '!app/app.tsx',
    '!app/global-styles.ts',
    '!app/*/*/Loadable.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 60,
      lines: 80,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleDirectories: ['app', 'node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  preset: 'ts-jest/presets/js-with-babel',
  setupFiles: ['raf/polyfill', '<rootDir>/internals/testing/enzyme-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: 'tests/.*\\.test\\.tsx?$',
};
