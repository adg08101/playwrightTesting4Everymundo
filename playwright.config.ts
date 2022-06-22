import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
      baseURL: 'https://google.com/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    browserName: 'chromium',
  },
  reporter: [ ['junit', { outputFile: 'results.xml' }] ],
};

export default config;