module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['./test/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts'],
  transformIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  testMatch: ['**/*.spec.{j,t}s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue,ts}',
    '!src/main.ts',
    '!src/pages/**/index.ts',
    '!src/router/index.ts',
    '!src/shims-*.d.ts',
  ],
};
