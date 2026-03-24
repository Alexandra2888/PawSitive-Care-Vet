import { test, expect } from "@playwright/test";
import { mockSupabaseUnauthenticated } from "./helpers";

test.describe("Navigation — Desktop", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/");
  });

  test("displays the desktop navbar with logo", async ({ page }) => {
    await expect(page.getByText("PawSitive Care Vet")).toBeVisible();
  });

  test("has Home and Make Appointment nav links", async ({ page }) => {
    const nav = page.locator("nav");
    await expect(nav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Make Appointment" })).toBeVisible();
  });

  test("navigating to Home link loads home page", async ({ page }) => {
    await page.locator("nav").getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
    await expect(page.locator("#banner__heading")).toBeVisible();
  });

  test("Make Appointment link redirects unauthenticated user to sign-in", async ({ page }) => {
    await page.locator("nav").getByRole("link", { name: "Make Appointment" }).click();
    await expect(page).toHaveURL("/sign-in");
  });

  test("does not show logout button when not authenticated", async ({ page }) => {
    const logoutButtons = page.locator("nav button");
    const count = await logoutButtons.count();
    for (let i = 0; i < count; i++) {
      const btn = logoutButtons.nth(i);
      const hasLogout = await btn.locator("svg").count();
      if (hasLogout > 0) {
        const parentLi = btn.locator("..");
        const text = await parentLi.textContent();
        expect(text?.toLowerCase()).not.toContain("logout");
      }
    }
  });
});

test.describe("Navigation — Mobile", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/");
  });

  test("shows burger menu button on mobile", async ({ page }) => {
    const burgerButton = page.locator("button:has(.burger-line)");
    await expect(burgerButton).toBeVisible();
  });

  test("opens burger menu and shows navigation links", async ({ page }) => {
    const burgerButton = page.locator("button:has(.burger-line)");
    await burgerButton.click();

    const navItems = page.locator("#nav__items");
    await expect(navItems.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(navItems.getByRole("link", { name: "Appointments" })).toBeVisible();
  });

  test("burger menu navigates to Home", async ({ page }) => {
    const burgerButton = page.locator("button:has(.burger-line)");
    await burgerButton.click();
    await page.locator("#nav__items").getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
  });
});
