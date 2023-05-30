const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dx9353",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
