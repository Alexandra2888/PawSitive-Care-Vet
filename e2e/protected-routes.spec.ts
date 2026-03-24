import { test, expect } from "@playwright/test";
import {
  mockSupabaseUnauthenticated,
  mockSupabaseAuthenticated,
  mockAppointments,
  injectAuthSession,
} from "./helpers";

test.describe("Protected Routes — Unauthenticated", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
  });

  test("redirects /add-appointments to /sign-in", async ({ page }) => {
    await page.goto("/add-appointments");
    await expect(page).toHaveURL("/sign-in");
  });

  test("redirects /appointments to /sign-in", async ({ page }) => {
    await page.goto("/appointments");
    await expect(page).toHaveURL("/sign-in");
  });
});

test.describe("Add Appointments — Authenticated", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseAuthenticated(page);
    await mockAppointments(page);
    await injectAuthSession(page);
    await page.goto("/add-appointments");
  });

  test("renders the add appointment form", async ({ page }) => {
    await expect(page.getByText("Add new appointment:")).toBeVisible();
  });

  test("displays all required form fields", async ({ page }) => {
    await expect(page.getByText("Full Name:")).toBeVisible();
    await expect(page.getByText("Email:")).toBeVisible();
    await expect(page.getByText("Phone:")).toBeVisible();
    await expect(page.getByText("Select a pet:")).toBeVisible();
    await expect(page.getByText("Your pet is:")).toBeVisible();
    await expect(page.getByText("Pet Name:")).toBeVisible();
    await expect(page.getByText("Add age:")).toBeVisible();
    await expect(page.getByText("Select a time:")).toBeVisible();
    await expect(page.getByText("Select a date:")).toBeVisible();
    await expect(page.getByText("Select doctor:")).toBeVisible();
    await expect(page.getByText("Reason:")).toBeVisible();
  });

  test("has submit button and see appointments link", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Add new appointment" })).toBeVisible();
    await expect(page.getByRole("link", { name: "See appointments" })).toBeVisible();
  });

  test("See appointments link navigates to appointments list", async ({ page }) => {
    await page.getByRole("link", { name: "See appointments" }).click();
    await expect(page).toHaveURL("/appointments");
  });

  test("can fill and submit the appointment form", async ({ page }) => {
    await page.locator("#name").fill("John Smith");
    await page.locator('input[type="email"]').fill("john@example.com");
    await page.locator('input[type="number"]').first().fill("5551234567");
    await page.locator("#petName").fill("Buddy");
    await page.locator('input[type="number"]').nth(1).fill("3");
    await page.locator('input[type="time"]').fill("10:00");
    await page.locator("#date").fill("2026-04-15");
    await page.locator("#reason").fill("Annual checkup");

    await page.getByRole("button", { name: "Add new appointment" }).click();
    await expect(page).toHaveURL("/appointments");
  });
});

test.describe("Appointments List — Authenticated", () => {
  test("renders appointment table with data", async ({ page }) => {
    await mockSupabaseAuthenticated(page);
    await mockAppointments(page, [
      {
        id: 1,
        pet_name: "Buddy",
        date: "2026-04-15",
        time: "10:00",
        doctor: "John Doe",
        reason: "Annual checkup",
      },
      {
        id: 2,
        pet_name: "Whiskers",
        date: "2026-04-20",
        time: "14:30",
        doctor: "Liza Apeledo",
        reason: "Vaccination",
      },
    ]);
    await injectAuthSession(page);
    await page.goto("/appointments");

    await expect(page.getByText("Buddy")).toBeVisible();
    await expect(page.getByText("2026-04-15")).toBeVisible();
    await expect(page.getByText("Annual checkup")).toBeVisible();

    await expect(page.getByText("Whiskers")).toBeVisible();
    await expect(page.getByText("2026-04-20")).toBeVisible();
    await expect(page.getByText("Vaccination")).toBeVisible();
  });

  test("shows empty table when no appointments", async ({ page }) => {
    await mockSupabaseAuthenticated(page);
    await mockAppointments(page, []);
    await injectAuthSession(page);
    await page.goto("/appointments");

    const table = page.locator("table");
    await expect(table).toBeVisible();

    const rows = table.locator("tbody tr");
    await expect(rows).toHaveCount(0);
  });

  test("has link to add new appointment", async ({ page }) => {
    await mockSupabaseAuthenticated(page);
    await mockAppointments(page, []);
    await injectAuthSession(page);
    await page.goto("/appointments");

    const addLink = page.getByRole("link", { name: "Add new appointment" });
    await expect(addLink).toBeVisible();
    await addLink.click();
    await expect(page).toHaveURL("/add-appointments");
  });
});
