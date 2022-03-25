import { defaults as tsjPreset } from 'ts-jest/presets';

export default {
  rootDir: process.cwd(),
  roots: ['<rootDir>/test/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    ...tsjPreset.transform,
    '^.+\\.vue$': '@vue/vue3-jest'
  },

  globals: {
    '@vue/vue3-jest': {
      compilerOptions: {
        propsDestructureTransform: true
      }
    }
  },

  moduleFileExtensions: ['ts', 'tsx', 'vue-test', 'js', 'jsx', 'json', 'node']
};
