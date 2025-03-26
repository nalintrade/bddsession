import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  use: {
    headless: false, // Set to true for headless execution
    browserName: 'chrome', // Use Google Chrome instead of default Chromium
    channel: 'chrome', // Explicitly select Google Chrome
    viewport: { width: 1280, height: 720 },
    baseURL: 'http://localhost:3000', // Ensure this matches your React app's running URL
    actionTimeout: 5000,
  },
  use: {
    testIdAttribute: 'data-testid'  // Ensure this matches your setup
  }
});
