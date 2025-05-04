import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel:true,
  workers:5,
  timeout: 30_000,
  retries: 1,
  expect:{
    timeout:10_000
  },
  reporter: [['html'], ['junit', { outputFile: 'test-results/results.xml' }]],

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
});
