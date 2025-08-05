const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,

  // ✅ Mantido para capturar falhas automáticas
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',

  e2e: {
    env: {
      username: "standard_user",
      password: "secret_sauce"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,

    // ✅ INSERIDO AQUI: Captura screenshots de sucesso e falha
    setupFilesAfterEnv: ['cypress/support/screenshotHandler.js']
  },

  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss'
  }
});
