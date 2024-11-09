const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}", // Update to match your test file path
    
  },
});
