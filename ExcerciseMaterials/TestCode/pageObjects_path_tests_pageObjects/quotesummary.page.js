import { expect } from '@playwright/test';
class QuoteSummaryPage {
  async proceedToApplication(page) {
    await page.click('[data-test-id="QuoteSummary-proceedButton"]');
  }

  async isPremiumVisible(page) {
    await expect(page.locator('[data-test-id="QuoteSummary-price"]')).toBeVisible();
  }

  async isSaveOptionVisible(page) {
    await expect(page.locator('[data-test-id="QuoteSummary-emailButton"]')).toBeVisible();
  }

  async isBenefitsVisible(page) {
    await expect(page.locator('[data-test-id="QuoteSummary-benefitsBox"]')).toBeVisible();
  }

  async getFormText(page) {
    return await page.locator('form').textContent();
  }
}
export default new QuoteSummaryPage();