import { expect } from '@playwright/test';
class DashboardPage {
  async startQuote(page) {
    await page.locator('[data-test-id="Dashboard-link-GetQuote"]').click();
  }

  async isVisible(page) {
    await expect(page.locator('[data-test-id="Dashboard-container"]')).toBeVisible();
  }
}
export default new DashboardPage();