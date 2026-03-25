import { test, expect } from "@playwright/test";
import { mockSupabaseUnauthenticated } from "./helpers";

test.describe("404 Not Found Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
  });

  test("shows 404 page for unknown routes", async ({ page }) => {
    await page.goto("/some-random-nonexistent-page");

    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("This is not the page you are looking for!")).toBeVisible();
  });

  test("has a Go Back Home link", async ({ page }) => {
    await page.goto("/totally-invalid-path");

    const homeLink = page.getByRole("link", { name: "Go back to the home page" });
    await expect(homeLink).toBeVisible();
    await homeLink.click();
    await expect(page).toHaveURL("/");
  });
});
