import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  use: {
      baseURL: 'https://tp-dev.everymundo.net/en-pt/flights-from-lisbon-to-miami',
    headless: false,
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    browserName: 'chromium',
    viewport: { width: 1920, height: 1080 },
  },
  timeout: 60000,
};

export default config;