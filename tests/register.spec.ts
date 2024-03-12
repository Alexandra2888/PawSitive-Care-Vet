import { test, expect } from '@playwright/test';

test.describe('Register Page Interactions', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the register page before each test
    await page.goto('http://localhost:5173/sign-up');
  });

  test('page loads with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Sign Up');
  });

  test('initial form state is empty', async ({ page }) => {
    await expect(page.locator('#name')).toBeEmpty();
    await expect(page.locator('input[type="email"]')).toBeEmpty();
    await expect(page.locator('#password')).toBeEmpty();
  });

//   test('required fields display errors on empty submission', async ({ page }) => {
//     await page.getByRole('button', { name: 'Get started' }).click();
//     // Assuming error messages are displayed, adjust selectors as needed
//     await expect(page.locator('.name-error')).toHaveText('Name is required');
//     await expect(page.locator('.email-error')).toHaveText('Email is required');
//     await expect(page.locator('.password-error')).toHaveText('Password is required');
//   });

  test('navigating to login page', async ({ page }) => {
    await page.getByText('Have an account?Login').click();
    // Verify the URL or page content to confirm navigation
    await expect(page.url()).toContain('/sign-in');
  });

  test('forgot password link navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgotpassword?' }).click();
    // Verify the URL or page content to confirm navigation
    await expect(page.url()).toContain('/forgot-password');
  });

  // This test might be challenging due to external authentication handling and is often better handled with mock responses or skipped in end-to-end tests.
  test.skip('sign in with Google redirects to external auth', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
    // Here you would assert the behavior of the external auth flow, but it's generally complex to handle in end-to-end tests.
  });

});
