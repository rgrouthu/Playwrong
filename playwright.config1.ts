import { defineConfig, devices, expect } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    workers: 4,
    timeout: 10 * 1000,
    expect: {
        timeout: 30 * 1000,
    },
    retries: 1,
    reporter: [["html"], ["json"]],

    use: {
        browserName: 'chromium',
        headless: true,
        baseURL: 'google.co.in',
        viewport: { width: 720, height: 720 },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true





    },

    projects:[
        {
            name:'Desktop Firefox',
            use:{...devices['Desktop Firefox']}
        },
        {
            name:'Galaxy Note'
            use:{...devices['Galaxy Note 3']}
        }
    ]


});