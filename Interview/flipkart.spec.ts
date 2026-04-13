import { test, expect } from '@playwright/test';

test('Flipkart Laptop Search', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  const closeBtn = page.locator('button:has-text("✕")');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  await page.locator('input[name="q"]').fill('laptop');
  await page.keyboard.press('Enter');

  await page.waitForSelector('div._1YokD2');

  await page.locator('select._2YxCDZ').first().selectOption('20000');
  await page.locator('select._2YxCDZ').nth(1).selectOption('60000');

  await page.waitForLoadState('networkidle');

  const ram = page.locator('text=8 GB');
  await ram.click();

  await page.waitForLoadState('networkidle');

  const products = page.locator('div._4rR01T');

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    products.nth(1).click()
  ]);

  await expect(newPage.locator('span.B_NuCI')).toBeVisible();

});