import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  extract: {
    // accepts globs and file paths relative to project root
    include: ['index.html', 'src/**/*.{vue,tsx}'],
    exclude: ['node_modules/**/*', '.git/**/*']
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        primary: '#007fff'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px'
      }
    }
  }
});
