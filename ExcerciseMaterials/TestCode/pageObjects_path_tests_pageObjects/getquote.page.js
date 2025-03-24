import { expect } from '@playwright/test';
class GetQuotePage {
  async enterMake(page, make) {
    await page.locator('[data-test-id="GetQuote-makeInput"]').fill(make);
  }

  async enterModel(page, model) {
    await page.locator('[data-test-id="GetQuote-modelInput"]').fill(model);
  }

  async enterYear(page, year) {
    await page.locator('[data-test-id="GetQuote-yearInput"]').fill(year);
  }

  async enterRegistration(page, reg) {
    await page.locator('[data-test-id="GetQuote-registrationInput"]').fill(reg);
  }

  async getModelValue(page) {
    return await page.locator('[data-test-id="GetQuote-modelInput"]').inputValue();
  }

  async submit(page) {
    await page.click('[data-test-id="GetQuote-nextButton"]');
  }

  async fillForm(page, data) {
    await this.enterMake(page, data.make);
    await this.enterModel(page, data.model);
    await this.enterYear(page, data.year);
    await this.enterRegistration(page, data.registration);
  }

  async isVisible(page) {
    await expect(page.locator('[data-test-id="GetQuote-form"]')).toBeVisible();
  }
}
export default new GetQuotePage();