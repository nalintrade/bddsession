import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginPage from '../pageObjects/login.page.js';
// import SignupSteps from  './signup.steps.js';
import world from '../support/world.js';

Given('I am on the login page', async () => {
  await world.navigateTo('/login'); // Use full URL
});

When('I enter {string} as username', async (username) => {
  await LoginPage.enterUsername(world.page, username);
});

When('I enter {string} as password', async (password) => {
  await LoginPage.enterPassword(world.page, password);
});

When('I click the "Sign In" button', async () => {
  await LoginPage.clickSignIn(world.page);
});

Then('I should be redirected to the dashboard', async () => {
  expect(await world.page.url()).to.include('/dashboard');
});



Given('I am loggedinto Dashboard', async () => {

  await world.navigateTo('/login'); // Use full URL
});

Given('I logged in to the Dashboard with username {string} and password {string}', async function (username, password) { 
  //Actual login
  await this.step('I am on the login page');
  await this.step('I enter "${username}" as username');
  await this.step('I enter "${password}" as password');
  await this.step('I click the "Sign In" button');
});


