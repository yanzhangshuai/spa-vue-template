import type { InitialOptionsTsJest } from 'ts-jest';
import { root } from '../build/util/path';

const config: InitialOptionsTsJest = {
  preset: 'ts-jest',
  rootDir: root,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/modules/**/**/*.{test,spec}.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '.+\\.vue$': '@vue/vue3-jest'
  },

  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'preserve',
        jsxFragmentFactory: 'h',
        esModuleInterop: true,
        target: 'esnext',
        module: 'esnext',
        sourceMap: true,
        allowJs: true
      }
    },
    'babelConfig': {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-typescript']]
    }
  },
  collectCoverageFrom: ['src/**/*.{vue,tsx,ts}', '!**/node_modules/**'],
  coverageReporters: ['html'],
  coverageDirectory: './report/test'
};

export default config;
