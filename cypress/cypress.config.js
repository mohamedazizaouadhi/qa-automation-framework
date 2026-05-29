const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
})