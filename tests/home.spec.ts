import { test, expect } from '@playwright/test';

test.describe('Homepage Basic Interactions', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('http://localhost:5173/');
  });

  test('verify navigation to PawSitive Care Vet', async ({ page }) => {
    await page.getByRole('link', { name: 'PawSitive Care Vet' }).click();
    await expect(page.getByRole('link', { name: 'PawSitive Care Vet' })).toBeVisible();
    await expect(page.getByRole('main')).toContainText('PawSitive Care Vet');
  });


  test('verify banner part', async ({page}) => {
    await page.locator('div').filter({ hasText: 'Complete Health Care' }).nth(1).click();
    await page.getByRole('heading', { name: 'Complete Health Care' }).click();
    await expect(page.getByRole('heading', { name: 'Complete Health Care' })).toBeVisible();
    await expect(page.locator('#banner__heading')).toContainText('Complete Health Care Solutions For Every Pet');
    await page.getByText('Because your pet\'s health is').click();
    await expect(page.getByText('Because your pet\'s health is')).toBeVisible();
    await expect(page.locator('#banner')).toContainText('Because your pet\'s health is our top priority.');
    await page.getByRole('img', { name: 'banner' }).click();
    await page.locator('#banner').getByRole('link', { name: 'Make Appointment' }).click();
});


test('verify provide section', async ({page}) => {
  await expect(page.getByRole('heading', { name: 'Complete Health Care' })).toBeVisible();
  await page.getByText('helping your pet live their').click();
  await page.locator('article').filter({ hasText: 'Online BookingLorem ipsum' }).click();
  await page.locator('article').filter({ hasText: 'Qualified DoctorsLorem ipsum' }).click();
  await page.locator('article').filter({ hasText: 'Private SupportLorem ipsum' }).click();
  await page.locator('article').filter({ hasText: 'Well CaredLorem ipsum dolor' }).click();
  await page.locator('article').filter({ hasText: 'Need EmergencyLorem ipsum' }).click();
  await page.locator('article').filter({ hasText: '24 Hour ServiceLorem ipsum' }).click();
});


test('verify services section', async ({page}) => {
await page.locator('div').filter({ hasText: 'Our servicesMaking a' }).nth(1).click();
await expect(page.getByRole('heading', { name: 'Our services' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Our services' })).toBeVisible();
await expect(page.locator('#services')).toContainText('Our services');
await page.getByText('Making a difference in the').click();
await expect(page.getByText('Making a difference in the')).toBeVisible();
await expect(page.locator('#services')).toContainText('Making a difference in the lives of pets and their owners.');
await page.getByText('Infectious Diseases and').click();
await expect(page.getByText('Infectious Diseases and')).toBeVisible();
await expect(page.locator('#services')).toContainText('Infectious Diseases and Prevention');
await page.getByText('Cardiology', { exact: true }).click();
await expect(page.getByText('Cardiology', { exact: true })).toBeVisible();
await expect(page.locator('#services')).toContainText('Cardiology');
await page.getByText('Dermatology').click();
await expect(page.getByText('Dermatology')).toBeVisible();
await expect(page.locator('#services')).toContainText('Dermatology');
await page.getByText('Diabetes, Nutrition, and').click();
await expect(page.getByText('Diabetes, Nutrition, and')).toBeVisible();
await expect(page.locator('#services')).toContainText('Diabetes, Nutrition, and Metabolic Diseases');
await page.getByText('Inhalation Anesthesia').click();
await expect(page.getByText('Inhalation Anesthesia')).toBeVisible();
await expect(page.locator('#services')).toContainText('Inhalation Anesthesia');
await page.getByText('Gastroenterology').click();
await expect(page.getByText('Gastroenterology')).toBeVisible();
await expect(page.locator('#services')).toContainText('Gastroenterology');
await page.getByText('Internal Medicine').click();
await expect(page.getByText('Internal Medicine')).toBeVisible();
await expect(page.locator('#services')).toContainText('Internal Medicine');
await page.getByRole('img', { name: 'Services Image' }).click();
});


test('verify specialists section', async ({page}) => {
await page.getByText('Our Top SpecialistsA happier').click();
await page.getByRole('heading', { name: 'Our Top Specialists' }).click();
await expect(page.getByRole('heading', { name: 'Our Top Specialists' })).toBeVisible();
await expect(page.locator('#specialists')).toContainText('Our Top Specialists');
await page.getByText('A happier, healthier life').click();
await expect(page.getByText('A happier, healthier life')).toBeVisible();
await expect(page.locator('#specialists')).toContainText('A happier, healthier life starts with us.');
await page.locator('article').filter({ hasText: 'Dr. John DoeSurgery Specialist' }).click();
await page.locator('article').filter({ hasText: 'Dr. Carmen MakafuiAnaesthetic' }).click();
await page.locator('article').filter({ hasText: 'Dr. Liza ApeledoOrthopedic' }).click();
await page.locator('article').filter({ hasText: 'Dr. Abigail BrownieCardiology' }).click();
});

test('verify testimonial section', async ({page}) => {
await page.getByText('What Our Clients SayVeterinary care that\'s rooted in compassion.Lorem ipsum').click();
await page.getByRole('heading', { name: 'What Our Clients Say' }).click();
await expect(page.getByRole('heading', { name: 'What Our Clients Say' })).toBeVisible();
await expect(page.locator('#testimonials')).toContainText('What Our Clients Say');
await page.getByText('Veterinary care that\'s rooted').click();
await expect(page.getByText('Veterinary care that\'s rooted')).toBeVisible();
await expect(page.locator('#testimonials')).toContainText('Veterinary care that\'s rooted in compassion.');
await page.locator('.swiper-wrapper > div:nth-child(6)').click();
});

test('verify map section', async ({page}) => {
await page.locator('#section').click();
await page.locator('#section').getByRole('heading', { name: 'PawSitive Vet Care' }).click();
await expect(page.locator('#section').getByRole('heading', { name: 'PawSitive Vet Care' })).toBeVisible();
await expect(page.locator('#section')).toContainText('PawSitive Vet Care');
await page.getByText('Partnering with you for your').click();
await expect(page.getByText('Partnering with you for your')).toBeVisible();
await expect(page.locator('#section')).toContainText('Partnering with you for your pet\'s health.');
await page.locator('#section').getByText('+2335555555').click();
await expect(page.locator('#section').getByText('+2335555555')).toBeVisible();
await expect(page.locator('#section')).toContainText('+2335555555');
await page.locator('#section').getByText('support@pawsitive-vet.com').click();
await expect(page.locator('#section').getByText('support@pawsitive-vet.com')).toBeVisible();
await expect(page.locator('#section')).toContainText('support@pawsitive-vet.com');
await page.getByText('1600 Amphitheatre Parkway,').click();
await expect(page.getByText('1600 Amphitheatre Parkway,')).toBeVisible();
await expect(page.locator('#section')).toContainText('1600 Amphitheatre Parkway, Mountain View, CA 94043, USA');
await page.locator('div').filter({ hasText: '+− Leaflet | © OpenStreetMap' }).nth(3).click();
});

test('verify faq section', async ({page}) => {
await page.locator('div').filter({ hasText: 'FAQ1. Do I need an' }).nth(1).click();
await page.getByRole('img', { name: 'Faq Image' }).click();
await page.getByRole('heading', { name: 'FAQ' }).click();
await expect(page.getByRole('heading', { name: 'FAQ' })).toBeVisible();
await expect(page.locator('#faq')).toContainText('FAQ');
await page.getByText('Do I need an appointment?').click();
await expect(page.getByText('Do I need an appointment?')).toBeVisible();
await expect(page.locator('#faq')).toContainText('1. Do I need an appointment?');
await page.locator('li').filter({ hasText: 'Do I need an appointment?' }).getByRole('img').click();
await page.getByText('Lorem ipsum dolor sit amet,').click();
await expect(page.getByText('Lorem ipsum dolor sit amet,')).toBeVisible();
await expect(page.locator('#faq')).toContainText('1. Do I need an appointment?Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
await page.getByText('Do you offer emergency vet services?').click();
await expect(page.getByText('Do you offer emergency vet services?')).toBeVisible();
await expect(page.locator('#faq')).toContainText('2. Do you offer emergency vet services?');
await page.locator('li').filter({ hasText: 'Do you offer emergency vet services?' }).getByRole('img').click();
await expect(page.locator('li').filter({ hasText: '2. Do you offer emergency vet' }).locator('span')).toBeVisible();
await expect(page.locator('#faq')).toContainText('2. Do you offer emergency vet services?Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
await page.getByText('3. I got a new pet. What do I').click();
await expect(page.getByText('3. I got a new pet. What do I')).toBeVisible();
await expect(page.locator('#faq')).toContainText('3. I got a new pet. What do I need to do next?');
await page.locator('li').filter({ hasText: '3. I got a new pet. What do I' }).getByRole('img').click();
});


test('verify footer', async ({page}) => {
await page.getByLabel('Social Links').click();
await page.getByLabel('logo').click();
await page.getByText('Caring for your furry family').click();
await page.getByLabel('Social Links').locator('div').filter({ hasText: '+' }).click();
await page.getByLabel('Social Links').getByText('support@pawsitive-vet.com').click();
await page.getByRole('heading', { name: 'Support', exact: true }).click();
await page.getByRole('link', { name: 'Privacy Policy' }).click();
await page.getByRole('link', { name: 'Cookie Policy' }).click();
await page.getByRole('link', { name: 'Purchasing Policy' }).click();
await page.getByRole('link', { name: 'Terms & Conditions' }).click();
await page.getByRole('link', { name: 'Career' }).click();
await page.getByRole('heading', { name: 'Permalinks' }).click();
await page.getByLabel('Social Links').getByRole('link', { name: 'Home' }).click();
await page.getByRole('link', { name: 'Services' }).click();
await page.getByRole('link', { name: 'Specialists' }).click();
await page.getByRole('link', { name: 'Testimonials' }).click();
await page.getByRole('link', { name: 'Get Appointment' }).click();
await page.getByRole('heading', { name: 'Contact Us' }).click();
await page.getByText('Press').click();
await page.getByText('FAQs').click();
await page.getByRole('link', { name: '' }).click();
await page.getByRole('link', { name: '' }).click();
await page.getByRole('link', { name: '' }).click();
await page.getByRole('link', { name: '' }).click();
await page.locator('div').filter({ hasText: /^© All Rights Reserved 2023$/ }).click();
});
});
