import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3001/',
    headless: false,
    screenshot: "only-on-failure"
  },
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3001/'
  }
});
