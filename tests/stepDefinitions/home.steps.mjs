import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import HomePage from '../pageObjects/home.page.js';
import world from '../support/world.js';

Given('I am on the home page', async () => {
  await world.setup();
  await world.navigateTo('/'); // Use full URL
});

Then('I should see the title {string}', async (expectedTitle) => {
  const actualTitle = await HomePage.getTitle(world.page);
  expect(actualTitle).to.equal(expectedTitle);
});

Then('I should see a button {string}', async (buttonText) => {
  const isVisible = await HomePage.isButtonVisible(world.page, buttonText);
  expect(isVisible).to.be.true;
});

Then('I should see the section heading {string}', async (expectedHeading) => {
  const actualHeading = await HomePage.getSectionHeading(world.page);
  expect(actualHeading).to.equal(expectedHeading);
});

Then('I should see the service {string} with description {string}', async (serviceName, expectedDescription) => {
  const serviceDescription = await HomePage.getServiceDescription(world.page, serviceName);
  expect(serviceDescription).to.equal(expectedDescription);
});


