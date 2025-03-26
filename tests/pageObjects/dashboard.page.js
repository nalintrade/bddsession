import { expect } from '@playwright/test';
class DashboardPage {
  async startQuote(page) {
    await page.locator('[data-testid="Dashboard-link-GetQuote"]').click();
  }

  async isVisible(page) {
    await expect(page.locator('[data-testid="Dashboard-container"]')).toBeVisible();
  }
}
export default new DashboardPage();