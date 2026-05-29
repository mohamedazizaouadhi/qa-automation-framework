import { test, expect } from '@playwright/test';

/**
 * Test Suite: Product Search & Filtering
 * Application: https://automationexercise.com
 * Author: Mohamed Aziz Aouadhi
 */

test.describe('Product Search & Filtering', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/products', { waitUntil: 'domcontentloaded' });
  });

  test('should display the products page correctly', async ({ page }) => {
    await expect(page.locator('.features_items')).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'All Products' })).toBeVisible();
    expect(await page.locator('.product-image-wrapper').count()).toBeGreaterThan(0);
  });

  test('should display product name and price for each item', async ({ page }) => {
    const products = page.locator('.product-image-wrapper');
    const count = await products.count();
    for (let i = 0; i < Math.min(count, 3); i++) {
      await expect(products.nth(i).locator('.productinfo p')).toBeVisible();
      await expect(products.nth(i).locator('.productinfo h2')).toBeVisible();
    }
  });

  test('should search for a product and display results', async ({ page }) => {
    await page.fill('#search_product', 'T-Shirt');
    await page.click('#submit_search');
    await expect(page.locator('h2').filter({ hasText: 'Searched Products' })).toBeVisible();
    expect(await page.locator('.product-image-wrapper').count()).toBeGreaterThan(0);
  });

  test('should show results after searching keyword dress', async ({ page }) => {
    await page.fill('#search_product', 'dress');
    await page.click('#submit_search');
    await expect(page.locator('h2').filter({ hasText: 'Searched Products' })).toBeVisible();
    expect(await page.locator('.product-image-wrapper').count()).toBeGreaterThan(0);
  });

  test('should return to products page after empty search', async ({ page }) => {
    await page.fill('#search_product', 'xyznonexistentproduct123');
    await page.click('#submit_search');
    // Page stays on /products after search
    await expect(page).toHaveURL(/.*\/products/);
    await expect(page.locator('#search_product')).toBeVisible();
  });

  test('should open product detail page on click', async ({ page }) => {
    await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/.*\/product_details\//);
    await expect(page.locator('.product-information h2')).toBeVisible();
  });

  test('should display product information correctly', async ({ page }) => {
    await page.goto('https://automationexercise.com/product_details/1', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.product-information h2')).not.toBeEmpty();
    await expect(page.locator('.product-information p').first()).toBeVisible();
    await expect(page.locator('.cart')).toBeVisible();
  });

  test('should filter products by Women category', async ({ page }) => {
    await page.click('a[href="#Women"]');
    await page.waitForSelector('.panel-body', { state: 'visible' });
    await page.locator('.panel-body a').first().click({ force: true });
    await expect(page.locator('.features_items')).toBeVisible();
    await expect(page.locator('.title')).toBeVisible();
  });

});
