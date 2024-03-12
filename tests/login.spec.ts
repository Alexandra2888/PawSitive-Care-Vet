import { test, expect } from '@playwright/test';

test.describe('Login Page Interactions', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the register page before each test
    await page.goto('http://localhost:5173/sign-in');
  });

  test('page loads with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Sign In');
  });

  test('initial form state is empty', async ({ page }) => {
  
  await expect(page.locator('input[type="password"]')).toBeEmpty();
  await expect(page.locator('input[type="email"]')).toBeEmpty();
  });

//   test('required fields display errors on empty submission', async ({ page }) => {
//     await page.getByRole('button', { name: 'Get started' }).click();
//     // Assuming error messages are displayed, adjust selectors as needed
//     await expect(page.locator('.name-error')).toHaveText('Name is required');
//     await expect(page.locator('.email-error')).toHaveText('Email is required');
//     await expect(page.locator('.password-error')).toHaveText('Password is required');
//   });

  test('navigating to register page', async ({ page }) => {
    await page.getByText('Register').click();
    // Verify the URL or page content to confirm navigation
    await expect(page.url()).toContain('/sign-up');
  });

  test('forgot password link navigation', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    // Verify the URL or page content to confirm navigation
    await expect(page.url()).toContain('/forgot-password');
  });

  // This test might be challenging due to external authentication handling and is often better handled with mock responses or skipped in end-to-end tests.
  test.skip('sign in with Google redirects to external auth', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
    // Here you would assert the behavior of the external auth flow, but it's generally complex to handle in end-to-end tests.
  });

});
