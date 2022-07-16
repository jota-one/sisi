// Reference: https://github.com/unjs/unbuild#configuration
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './api/index'
  ],

  outDir: 'dist/api',

  // Generates .d.ts declaration file
  declaration: true,
})