import { expect } from '@playwright/test';
class QuoteSummaryPage {
  async proceedToApplication(page) {
    await page.click('[data-testid="QuoteSummary-proceedButton"]');
  }

  async isPremiumVisible(page) {
    await expect(page.locator('[data-testid="QuoteSummary-price"]')).toBeVisible();
  }

  async isSaveOptionVisible(page) {
    await expect(page.locator('[data-testid="QuoteSummary-emailButton"]')).toBeVisible();
  }

  async isBenefitsVisible(page) {
    await expect(page.locator('[data-testid="QuoteSummary-benefitsBox"]')).toBeVisible();
  }

  async getFormText(page) {
    return await page.locator('form').textContent();
  }
}
export default new QuoteSummaryPage();