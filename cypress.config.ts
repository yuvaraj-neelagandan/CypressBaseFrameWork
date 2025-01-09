import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // baseUrl: 'https://www.saucedemo.com/',
    specPattern: process.env.SPEC_PATTERN || 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    videosFolder: 'cypress/video_Captures',
    screenshotsFolder: 'cypress/screen_captures',
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Capture screenshots on failure
    reporter: 'mochawesome', // Use Mochawesome for reporting
    reporterOptions: {
      overwrite: true,
      html: true,
      json: true,
      reportDir: 'cypress/reports', // Output folder for reports
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
