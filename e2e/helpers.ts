import { Page, expect } from "@playwright/test";

const SUPABASE_URL = "https://luryenpgsjrxskztvzdz.supabase.co";

const FAKE_USER = {
  id: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  aud: "authenticated",
  role: "authenticated",
  email: "test@example.com",
  email_confirmed_at: "2026-01-01T00:00:00Z",
  created_at: "2026-01-01T00:00:00Z",
  updated_at: "2026-01-01T00:00:00Z",
  user_metadata: { full_name: "Test User" },
  app_metadata: { provider: "email" },
};

const FAKE_SESSION = {
  access_token: "fake-access-token",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: Math.floor(Date.now() / 1000) + 3600,
  refresh_token: "fake-refresh-token",
  user: FAKE_USER,
};

export async function mockSupabaseUnauthenticated(page: Page) {
  await page.route(`${SUPABASE_URL}/auth/v1/token*`, (route) =>
    route.fulfill({
      status: 400,
      contentType: "application/json",
      body: JSON.stringify({
        error: "invalid_grant",
        error_description: "Invalid login credentials",
      }),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/session*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ data: { session: null }, error: null }),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/user*`, (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ error: "not_authenticated" }),
    }),
  );

  await page.route(`${SUPABASE_URL}/rest/v1/**`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([]),
    }),
  );
}

export async function mockSupabaseAuthenticated(page: Page) {
  await page.route(`${SUPABASE_URL}/auth/v1/token*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(FAKE_SESSION),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/session*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ data: { session: FAKE_SESSION }, error: null }),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/user*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(FAKE_USER),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/signup*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ user: FAKE_USER, session: FAKE_SESSION }),
    }),
  );

  await page.route(`${SUPABASE_URL}/auth/v1/logout*`, (route) =>
    route.fulfill({ status: 204, body: "" }),
  );
}

export async function mockAppointments(page: Page, appointments: any[] = []) {
  await page.route(`${SUPABASE_URL}/rest/v1/appointments*`, (route) => {
    if (route.request().method() === "GET") {
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(appointments),
      });
    }
    if (route.request().method() === "POST") {
      return route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify([
          { id: 1, ...JSON.parse(route.request().postData() ?? "{}") },
        ]),
      });
    }
    return route.continue();
  });
}

export async function mockProfiles(page: Page) {
  await page.route(`${SUPABASE_URL}/rest/v1/profiles*`, (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([]),
    }),
  );
}

/**
 * Authenticate by going through the sign-in UI.
 * After this call the React auth context has a user and client-side
 * navigation to protected routes will succeed.
 */
export async function signInViaUI(page: Page) {
  await page.goto("/sign-in");
  await page.locator('input[type="email"]').fill("test@example.com");
  await page.locator('input[type="password"]').fill("password123");
  await page.getByRole("button", { name: "Get started" }).click();
  await expect(page).toHaveURL("/");
}

export { FAKE_USER, FAKE_SESSION, SUPABASE_URL };
