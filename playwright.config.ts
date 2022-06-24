import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  use: {
      baseURL: 'https://tp-dev.everymundo.net/en-pt/flights-from-lisbon-to-miami',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    browserName: 'chromium',
  },
  reporter: [ ['junit', { outputFile: 'results.xml' }] ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ]
};

export default config;