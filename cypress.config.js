const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Update to match your test file path
    baseUrl: "http://localhost:3000", // Ensure this matches your server URL
  },
});
