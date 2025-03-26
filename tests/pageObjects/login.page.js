import { expect } from '@playwright/test'
class LoginPage {

    async enterUsername(page, username) {
      await page.locator('[data-testid="Login-usernameInput"]').fill(username);
      // await page.locator('input[type="text"]').fill(username);
    }    

    async enterPassword(page, password) {
      await page.locator('[data-testid="Login-passwordInput"]').fill(password);
      // await page.getByTestId('Login-passwordInput').fill(password);
    }
  
    async clickSignIn(page) {
      await page.locator('button:has-text("Sign In")').click();
    }
  
    async submit(page) {
      await page.locator('[data-testid="Login-submitButton"]').click();
    }
  
    async login(page, username, password) {
      await this.enterUsername(page, username);
      await this.enterPassword(page, password);
      await this.submit(page);
    }
  }
  
  export default new LoginPage();
  