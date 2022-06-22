import { test, expect } from '@playwright/test';
import config from '../../playwright.config';
import { ExampleClass } from '../pages/example.page';

test('Navigate to Google', async ({ page }) => {
  await page.goto(config.use.baseURL);
  const url = await page.url();
  expect(url).toContain('google');
});

test('Search for Playwright', async ({ page }) => {
  await page.goto(config.use.baseURL);
  let exampletest = new ExampleClass(page);
  await exampletest.typeSearchText();
  await exampletest.pressEnter();
  const text = await exampletest.searchResult();
  await console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});