import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel:true,
  workers:5,
  timeout: 30_000,
  retries: 1,
  expect:{
    timeout:10_000
  },
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  projects:[
    {
      name:'Firefox',
      use:{...devices['Desktop Firefox']},
      fullyParallel:true,
      workers:4
    }
  ]
});
