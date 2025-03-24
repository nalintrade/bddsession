import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import SignupPage from '../pageObjects/signup.page.js';
import world from '../support/world.js';

Given('I am on the signup page', async () => {
  await world.setup();
  await world.navigateTo('/signup');
});

When('I enter {string} as the signup username', async (username) => {
  await SignupPage.enterUsername(world.page, username);
});

When('I enter {string} as the signup password', async (password) => {
  await SignupPage.enterPassword(world.page, password);
});

When('I confirm {string} as the signup password', async (password) => {
  await SignupPage.confirmPassword(world.page, password);
});

When('I click the "Create Account" button', async () => {
  await SignupPage.clickSignup(world.page);
});

Then('I should be redirected to the login page', async () => {
  expect(await world.page.url()).to.include('/login');
});


Given('I create a new user with username {string} and password {string}', async function (username, password) { 
  //Creating a user for this session as a work around as the temp localDB is bind to current session no persisting users. 
  await this.step('I am on the signup page');
  await this.step('I enter "${username}" as the signup username');
  await this.step('I enter "${password}" as the signup password');
  await this.step('I confirm "${password}" as the signup password');
  await this.step('I click the "Create Account" button');

});