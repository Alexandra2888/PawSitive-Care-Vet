import { test, expect } from "@playwright/test";
import { mockSupabaseUnauthenticated } from "./helpers";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockSupabaseUnauthenticated(page);
    await page.goto("/");
  });

  test("renders the banner with heading and CTA", async ({ page }) => {
    const heading = page.locator("#banner__heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Complete Health Care Solutions For Every Pet");

    const cta = page.locator("#banner").getByRole("link", { name: "Make Appointment" });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", "/add-appointments");
  });

  test("renders the Provide section with feature cards", async ({ page }) => {
    const provideHeading = page.getByText("We provide 24h of care");
    await expect(provideHeading).toBeVisible();

    const features = ["Online Booking", "Qualified Doctors", "Private Support", "Well Cared", "Need Emergency", "24 Hour Service"];
    for (const feature of features) {
      await expect(page.getByText(feature).first()).toBeVisible();
    }
  });

  test("renders the Services section with service list", async ({ page }) => {
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeVisible();

    await expect(servicesSection.getByText("Our services")).toBeVisible();

    const services = [
      "Infectious Diseases and Prevention",
      "Dermatology",
      "Diabetes, Nutrition, and Metabolic Diseases",
      "Inhalation Anesthesia",
      "Gastroenterology",
      "Internal Medicine",
    ];
    for (const service of services) {
      await expect(servicesSection.getByText(service)).toBeVisible();
    }
    await expect(servicesSection.getByText("Cardiology", { exact: true })).toBeVisible();
  });

  test("renders the Specialists section", async ({ page }) => {
    await expect(page.getByText("Our Top Specialists")).toBeVisible();

    const specialists = ["Dr. John Doe", "Dr. Carmen Makafui", "Dr. Liza Apeledo", "Dr. Abigail Brownie"];
    for (const name of specialists) {
      await expect(page.getByText(name)).toBeVisible();
    }
  });

  test("renders the Testimonials section", async ({ page }) => {
    await expect(page.getByText("What Our Clients Say")).toBeVisible();
  });

  test("renders the Contact section with a map", async ({ page }) => {
    const mapContainer = page.locator(".leaflet-container");
    await expect(mapContainer).toBeVisible();
  });

  test("renders the FAQ section with expandable items", async ({ page }) => {
    const faqSection = page.locator("#faq");
    await expect(faqSection).toBeVisible();
    await expect(faqSection.getByRole("heading", { name: "FAQ" })).toBeVisible();

    await expect(page.getByText("Do I need an appointment?")).toBeVisible();
    await expect(page.getByText("Do you offer emergency vet services?")).toBeVisible();
    await expect(page.getByText("I got a new pet. What do I need to do next?")).toBeVisible();
  });

  test("FAQ accordion expands and collapses on click", async ({ page }) => {
    const faqText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";

    await expect(page.locator("#faq").getByText(faqText).first()).not.toBeVisible();

    const toggleButtons = page.locator("#faq svg");
    await toggleButtons.first().click();

    await expect(page.locator("#faq").getByText(faqText).first()).toBeVisible();

    await toggleButtons.first().click();

    await expect(page.locator("#faq").getByText(faqText).first()).not.toBeVisible();
  });
});
