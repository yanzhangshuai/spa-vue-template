import type { JestConfigWithTsJest } from 'ts-jest';
import { root } from '../build/util/path';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  rootDir: root,
  testEnvironment: 'jsdom',
  testEnvironmentOptions: { customExportConditions: ['node', 'node-addons'] },
  testMatch: ['<rootDir>/test/modules/**/**/*.{test,spec}.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-typescript']] }],
    '.+\\.vue$': '@vue/vue3-jest'
  },
  collectCoverageFrom: ['src/**/*.{vue,tsx,ts}', '!**/node_modules/**'],
  coverageReporters: ['html'],
  coverageDirectory: './report/test'
};

export default config;
