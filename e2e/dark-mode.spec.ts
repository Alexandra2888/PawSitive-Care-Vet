import { test, expect } from "@playwright/test";
import { mockSupabaseUnauthenticated } from "./helpers";

test.describe("Dark Mode Toggle", () => {
  test.use({
    viewport: { width: 1280, height: 720 },
    colorScheme: "light",
  });

  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.addInitScript(() => {
      localStorage.removeItem("darkTheme");
    });
    await page.goto("/");
  });

  test("toggles dark mode on body element", async ({ page }) => {
    const body = page.locator("body");
    await expect(body).not.toHaveClass(/dark-theme/);

    const themeToggle = page.locator("nav button.bg-transparent").last();
    await themeToggle.click();

    await expect(body).toHaveClass(/dark-theme/);

    await themeToggle.click();
    await expect(body).not.toHaveClass(/dark-theme/);
  });

  test("persists dark mode preference in localStorage", async ({ page }) => {
    const themeToggle = page.locator("nav button.bg-transparent").last();
    await themeToggle.click();

    const stored = await page.evaluate(() => localStorage.getItem("darkTheme"));
    expect(stored).toBe("true");

    await themeToggle.click();
    const storedAfter = await page.evaluate(() => localStorage.getItem("darkTheme"));
    expect(storedAfter).toBe("false");
  });
});
