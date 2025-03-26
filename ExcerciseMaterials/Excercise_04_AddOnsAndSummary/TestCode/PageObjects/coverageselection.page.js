import { expect } from '@playwright/test';
class CoverageSelectionPage {
  async selectCoverageType(page, type) {
    // Mapping type to checkbox index or selector if needed
    await page.locator('[data-testid="Coverage-checkbox-0"]').check();
  }

  async selectAddon(page, addon) {
    await page.locator('[data-testid="Coverage-checkbox-1"]').check();
  }

  async clearAddons(page) {
    await page.locator('[data-testid="Coverage-checkbox-1"]').uncheck();
  }

  async compareOption(page, label) {
    await page.locator('[data-testid="Coverage-checkbox-3"]').check();
  }

  async proceedToSummary(page) {
    await page.click('[data-testid="Coverage-nextButton"]');
  }

  async isVisible(page) {
    await expect(page.locator('[data-testid="Coverage-container"]')).toBeVisible();
  }
}
export default new CoverageSelectionPage();