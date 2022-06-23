import { test, expect } from '@playwright/test';
import config from '../../playwright.config';
import { ExampleClass } from '../pages/example.page';

test.describe('feature examples', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.use.baseURL);
  });

  test('Navigate to Google', async ({ page }) => {
    const url = await page.url();
    expect(url).toContain('google');
  });

  test('Search for Playwright', async ({ page }) => {
    let exampletest = new ExampleClass(page);
    await exampletest.typeSearchText();
    await exampletest.pressEnter();
    const text = await exampletest.searchResult();
    await console.log(text);
    expect(text).toContain('Playwright: Fast and reliable');
    await exampletest.goToFirstResult();
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Get started').first()).toHaveAttribute('href', '/docs/intro');
    await page.click('text=Get started');
    // Expect some text to be visible on the page.
    await expect(page.locator('text=Introduction').first()).toBeVisible();
  });
});