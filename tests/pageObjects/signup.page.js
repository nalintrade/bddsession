class SignupPage {
  async enterUsername(page, username) {
    await page.locator('[data-testid="Signup-usernameInput"]').fill(username);
  }

  async enterPassword(page, password) {
    await page.locator('[data-testid="Signup-passwordInput"]').fill(password);
  }

  async enterConfirmPassword(page, confirmPassword) {
    await page.locator('[data-testid="Signup-confirmPasswordInput"]').fill(confirmPassword);
  }

  async submit(page) {
    await page.locator('[data-testid="Signup-submitButton"]').click();
  }

  async fillForm(page, { username, password, confirmPassword }) {
    await this.enterUsername(page, username);
    await this.enterPassword(page, password);
    await this.enterConfirmPassword(page, confirmPassword);
  }

  
  async submit(page) {
    await page.locator('[data-testid="Signup-submitButton"]').click();
  }

  async getErrorMessage(page) {
    return await page.locator('[data-testid="Signup-errorMessage"]').textContent();
  }

  async clickLoginLink(page) {
    await page.locator('[data-testid="Signup-loginLink"]').click();
  }

  async confirmPassword(page, password) {
    await page.locator('input[placeholder="Confirm your password"]').fill(password);
  }

  async clickSignup(page) {
    await page.locator('button:has-text("Create Account")').click();
  }
  
  }
  
  export default new SignupPage();
  