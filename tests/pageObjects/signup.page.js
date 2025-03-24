class SignupPage {
  async enterUsername(page, username) {
    await page.locator('[data-test-id="Signup-usernameInput"]').fill(username);
  }

  async enterPassword(page, password) {
    await page.locator('[data-test-id="Signup-passwordInput"]').fill(password);
  }

  async enterConfirmPassword(page, confirmPassword) {
    await page.locator('[data-test-id="Signup-confirmPasswordInput"]').fill(confirmPassword);
  }

  async submit(page) {
    await page.locator('[data-test-id="Signup-submitButton"]').click();
  }

  async fillForm(page, { username, password, confirmPassword }) {
    await this.enterUsername(page, username);
    await this.enterPassword(page, password);
    await this.enterConfirmPassword(page, confirmPassword);
  }

  
  async submit(page) {
    await page.locator('[data-test-id="Signup-submitButton"]').click();
  }

  async getErrorMessage(page) {
    return await page.locator('[data-test-id="Signup-errorMessage"]').textContent();
  }

  async clickLoginLink(page) {
    await page.locator('[data-test-id="Signup-loginLink"]').click();
  }

  async confirmPassword(page, password) {
    await page.locator('input[placeholder="Confirm your password"]').fill(password);
  }

  async clickSignup(page) {
    await page.locator('button:has-text("Create Account")').click();
  }
  
  }
  
  export default new SignupPage();
  