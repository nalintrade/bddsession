import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import SignupPage from '../pageObjects/signup.page.js';
import LoginPage from '../pageObjects/login.page.js';
import DashboardPage from '../pageObjects/dashboard.page.js';
import GetQuotePage from '../pageObjects/getquote.page.js';
import VehicleUsagePage from '../pageObjects/vehicleusage.page.js';
import world from '../support/world.js';

Given('I am a registered user', async () => {
  await world.setup();
  await world.navigateTo('/signup');
  await SignupPage.enterUsername(world.page, 'testuser');
  await SignupPage.enterPassword(world.page, 'password123');
  await SignupPage.enterConfirmPassword(world.page, 'password123');
  await SignupPage.submit(world.page);
});

Given('I am logged into the insurance portal', async () => {
  // await world.setup();
  await world.navigateTo('/login');
  await LoginPage.login(world.page, 'testuser', 'password123');
});

Given('I am on the dashboard', async () => {
  await DashboardPage.isVisible(world.page);
});

When('I start a new insurance quotation', async () => {
  await DashboardPage.startQuote(world.page);
});

Then('I should arrive at the vehicle information step', async () => {
  await GetQuotePage.isVisible(world.page);
});

When('I enter {string} as the make', async (make) => {
  await GetQuotePage.enterMake(world.page, make);
});

When('I enter {string} as the model', async (model) => {
  await GetQuotePage.enterModel(world.page, model);
});

When('I enter {string} as the year', async (year) => {
  await GetQuotePage.enterYear(world.page, year);
});

When('I enter {string} as the registration number', async (reg) => {
  await GetQuotePage.enterRegistration(world.page, reg);
});

When('I continue to the next step', async () => {
  await GetQuotePage.submit(world.page);
});

Then('I should arrive at the vehicle usage step', async () => {
  await VehicleUsagePage.isVisible(world.page);
});

When('I continue to the next step driver details', async () => {
  await VehicleUsagePage.submit(world.page);
});

Given('I have entered valid vehicle information', async () => {
  await GetQuotePage.fillForm(world.page, {
    make: 'Toyota',
    model: 'Corolla',
    year: '2020',
    registration: 'AB12 XYZ'
  });
  await GetQuotePage.submit(world.page);
});

When('I specify {string} as the annual mileage', async (miles) => {
  await VehicleUsagePage.enterMileage(world.page, miles);
});

When('I indicate {string} as the primary use', async (use) => {
  await VehicleUsagePage.selectPrimaryUse(world.page, use);
});

When('I choose {string} as the parking location', async (location) => {
  await VehicleUsagePage.selectParkingLocation(world.page, location);
});

Then('I should arrive at the driver information step', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Given('I have reached the driver information step', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I return to the vehicle information step', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I update the model to {string}', async (model) => {
  await GetQuotePage.enterModel(world.page, model);
});

Then('the model should reflect as {string}', async (expected) => {
  const value = await GetQuotePage.getModelValue(world.page);
  expect(value).toEqual(expected);
});

Then('I should be back at the driver information step', async () => {
  await GetQuotePage.submit(world.page);
  await VehicleUsagePage.submit(world.page);
  // DriverInformationPage.isVisible not implemented yet
  return 'pending';
});

When('I leave the make field empty', async () => {
  await GetQuotePage.enterMake(world.page, '');
});

Then('I should see the message {string}', async (message) => {
  const errorLocator = world.page.locator('span.error', { hasText: message });
  await expect(errorLocator).toBeVisible();
});

Then('I should remain on the vehicle information step', async () => {
  await GetQuotePage.isVisible(world.page);
});

Given('I have submitted vehicle usage details', async () => {
  await VehicleUsagePage.fillForm(world.page, {
    annualMileage: '12000',
    primaryUse: 'Commuting',
    parkingLocation: 'Garage'
  });
  await VehicleUsagePage.submit(world.page);
});

When('I provide the following driving history:', async (dataTable) => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I continue to the next step in driver information', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I should arrive at the coverage selection step', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Given('I have provided driver information', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I select {string} as the coverage type', async (type) => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I add {string} as an add-on', async (addon) => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I continue to the next step to premium estimate details', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I should see a premium estimate', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I should have the option to email the quote', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I choose {string} as the coverage type', async (type) => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I exclude add-ons', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I compare with {string}', async (option) => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I should see a comparison of premium and coverage details', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Given('I have reviewed my quotation', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

When('I choose to proceed with the application', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('I should arrive at the policy application step', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});

Then('the quote details should be pre-filled', async () => {
  // TODO: Implement using page object methods
  return 'pending';
});