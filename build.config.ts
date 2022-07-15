// Reference: https://github.com/unjs/unbuild#configuration
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './api',
    './ui',
  ],

  // Generates .d.ts declaration file
  declaration: true,
})