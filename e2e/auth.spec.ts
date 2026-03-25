import { test, expect } from "@playwright/test";
import {
  mockSupabaseUnauthenticated,
  mockSupabaseAuthenticated,
  mockProfiles,
  SUPABASE_URL,
} from "./helpers";

test.describe("Sign In Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/sign-in");
  });

  test("renders the sign-in form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.getByRole("button", { name: "Get started" })).toBeVisible();
  });

  test("has link to register page", async ({ page }) => {
    await expect(page.getByText("Don't have an account?")).toBeVisible();
    const registerLink = page.locator('a[href="/sign-up"]');
    await expect(registerLink).toBeVisible();
    await registerLink.click();
    await expect(page).toHaveURL("/sign-up");
  });

  test("has link to forgot password page", async ({ page }) => {
    const forgotLink = page.locator('a[href="/forgot-password"]');
    await expect(forgotLink).toBeVisible();
    await forgotLink.click();
    await expect(page).toHaveURL("/forgot-password");
  });

  test("shows Google OAuth button", async ({ page }) => {
    await expect(page.getByRole("button", { name: /google/i })).toBeVisible();
  });

  test("successful login navigates to home", async ({ page }) => {
    await mockSupabaseAuthenticated(page);

    await page.locator('input[type="email"]').fill("test@example.com");
    await page.locator('input[type="password"]').fill("password123");
    await page.getByRole("button", { name: "Get started" }).click();

    await expect(page).toHaveURL("/");
  });
});

test.describe("Sign Up Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/sign-up");
  });

  test("renders the sign-up form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Sign Up" })).toBeVisible();
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Get started" })).toBeVisible();
  });

  test("has link to login page", async ({ page }) => {
    await expect(page.getByText("Have an account?")).toBeVisible();
    const loginLink = page.locator('a[href="/sign-in"]');
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page).toHaveURL("/sign-in");
  });

  test("successful sign-up navigates to sign-in", async ({ page }) => {
    await mockSupabaseAuthenticated(page);
    await mockProfiles(page);

    await page.locator("#name").fill("Test User");
    await page.locator('input[type="email"]').fill("test@example.com");
    await page.locator("#password").fill("StrongPass123!");
    await page.getByRole("button", { name: "Get started" }).click();

    await expect(page).toHaveURL("/sign-in");
  });
});

test.describe("Forgot Password Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/forgot-password");
  });

  test("renders the forgot password form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /forgot password/i })).toBeVisible();
    await expect(page.locator('input[type="text"]')).toBeVisible();
    await expect(page.getByRole("button", { name: "Recover password" })).toBeVisible();
  });

  test("has link back to login", async ({ page }) => {
    const loginLink = page.locator('.card-info a[href="/sign-in"]');
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page).toHaveURL("/sign-in");
  });

  test("has link to register", async ({ page }) => {
    const registerLink = page.locator('.card-info a[href="/sign-up"]');
    await expect(registerLink).toBeVisible();
    await registerLink.click();
    await expect(page).toHaveURL("/sign-up");
  });

  test("submitting reset triggers navigation", async ({ page }) => {
    await page.route(`${SUPABASE_URL}/auth/v1/recover*`, (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({}),
      }),
    );

    await page.locator('input[type="text"]').fill("test@example.com");
    await page.getByRole("button", { name: "Recover password" }).click();

    await expect(page).toHaveURL("/");
  });
});
