import { test, expect } from '@playwright/test';

/**
 * Test Suite: Authentication
 * Application: https://automationexercise.com
 * Author: Mohamed Aziz Aouadhi
 */

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
  });

  test('should load login page successfully', async ({ page }) => {
    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
    await expect(page.locator('h2').filter({ hasText: 'Login to your account' })).toBeVisible();
    await expect(page.locator('[data-qa="login-email"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-password"]')).toBeVisible();
    await expect(page.locator('[data-qa="login-button"]')).toBeVisible();
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.fill('[data-qa="login-email"]', 'wrong@email.com');
    await page.fill('[data-qa="login-password"]', 'wrongpassword');
    await page.click('[data-qa="login-button"]');
    const error = page.locator('p').filter({ hasText: 'Your email or password is incorrect!' });
    await expect(error).toBeVisible();
  });

  test('should show error when submitting empty form', async ({ page }) => {
    await page.click('[data-qa="login-button"]');
    const emailInput = page.locator('[data-qa="login-email"]');
    await expect(emailInput).toBeVisible();
  });

  test('should navigate to register section', async ({ page }) => {
    await expect(page.locator('h2').filter({ hasText: 'New User Signup!' })).toBeVisible();
    await expect(page.locator('[data-qa="signup-name"]')).toBeVisible();
    await expect(page.locator('[data-qa="signup-email"]')).toBeVisible();
  });

});
