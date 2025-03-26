import { expect } from '@playwright/test';
class DriverInformationPage {
  async fillForm(page, data) {
    const licenseYears = data.licenseDuration === '5+ years' ? '6' : '2';
    const claims = data.claimsHistory.includes('No') ? '0' : '1';
    await page.locator('[data-testid="DriverInfo-licenseInput"]').fill(licenseYears);
    await page.locator('[data-testid="DriverInfo-claimsInput"]').fill(claims);
  }

  async submit(page) {
    await page.click('[data-testid="DriverInfo-nextButton"]');
  }

  async goBackToVehicleUsage(page) {
    await page.click('[data-testid="DriverInfo-backButton"]');
  }

  async isVisible(page) {
    await expect(page.locator('[data-testid="DriverInfo-container"]')).toBeVisible();
  }
}
export default new DriverInformationPage();