import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test('has title', async ({ page }, testInfo) => { 

  await allure.step('Step 1: Demo', async() => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  await testInfo.attach('login', {
    body: await page.screenshot(),
    contentType: 'image/png',
  });  
});

test('get started link', async ({ page }) => {
  await allure.displayName("Test Authentication");
  await allure.owner("John Doe");
  await allure.tags("Web interface", "Authentication");
  await allure.severity("critical");

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.screenshot();
});

