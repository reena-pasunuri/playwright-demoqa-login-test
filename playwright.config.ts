import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',  
  use: {
    headless: false,  // Set to false to watch the test execution
    trace: 'on',      // Enable trace logs for debugging
    screenshot: 'on', // Capture screenshots on failure
    video: 'on',      // Record video of the test execution
  },
  reporter: [['html', { outputFolder: 'reports' }]], // Generate HTML reports
});
