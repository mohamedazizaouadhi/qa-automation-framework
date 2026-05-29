import { test, expect } from '@playwright/test';

/**
 * Test Suite: Homepage & Navigation
 * Application: https://automationexercise.com
 * Author: Mohamed Aziz Aouadhi
 */

test.describe('Homepage & Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(page.locator('.logo img')).toBeVisible();
  });

  test('should display the navigation bar correctly', async ({ page }) => {
    await expect(page.locator('#header')).toBeVisible();
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
    await expect(page.locator('a[href="/products"]')).toBeVisible();
    await expect(page.locator('a[href="/view_cart"]').first()).toBeVisible();
    await expect(page.locator('a[href="/login"]')).toBeVisible();
  });

  test('should display featured products section', async ({ page }) => {
    await expect(page.locator('.features_items')).toBeVisible();
    const products = page.locator('.product-image-wrapper');
    expect(await products.count()).toBeGreaterThan(0);
  });

  test('should navigate to Products page from navbar', async ({ page }) => {
    await page.click('a[href="/products"]');
    await expect(page).toHaveURL(/.*\/products/);
    await expect(page.locator('h2').filter({ hasText: 'All Products' })).toBeVisible();
  });

  test('should navigate to Cart page from navbar', async ({ page }) => {
    await page.click('a[href="/view_cart"]');
    await expect(page).toHaveURL(/.*\/view_cart/);
    await expect(page.locator('#cart_info')).toBeVisible();
  });

  test('should navigate to Login page from navbar', async ({ page }) => {
    await page.click('a[href="/login"]');
    await expect(page).toHaveURL(/.*\/login/);
    await expect(page.locator('h2').filter({ hasText: 'Login to your account' })).toBeVisible();
  });

  test('should display footer with subscription section', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('#footer')).toBeVisible();
    await expect(page.locator('#susbscribe_email')).toBeVisible();
  });

  test('should subscribe with valid email in footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.fill('#susbscribe_email', 'test.automation@example.com');
    await page.click('#subscribe');
    await expect(page.locator('.alert-success')).toBeVisible();
  });

});
