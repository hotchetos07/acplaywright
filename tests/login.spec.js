// @ts-check
const { test, expect } = require('@playwright/test');

test('User can login', async ({ page }) => {
  await page.goto('https://app.adventurerscodex.com/accounts/login/');

  await expect(page.getByRole('link', { name: 'Adventurer\'s Codex Adventurer' })).toBeVisible();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('playwrightautomationuser');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('Automation619!');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('heading', { name: 'Welcome to Adventurer\'s Codex' }).click();
});
