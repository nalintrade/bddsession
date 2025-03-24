import { expect } from '@playwright/test';
class DriverInformationPage {
  async fillForm(page, data) {
    const licenseYears = data.licenseDuration === '5+ years' ? '6' : '2';
    const claims = data.claimsHistory.includes('No') ? '0' : '1';
    await page.locator('[data-test-id="DriverInfo-licenseInput"]').fill(licenseYears);
    await page.locator('[data-test-id="DriverInfo-claimsInput"]').fill(claims);
  }

  async submit(page) {
    await page.click('[data-test-id="DriverInfo-nextButton"]');
  }

  async goBackToVehicleUsage(page) {
    await page.click('[data-test-id="DriverInfo-backButton"]');
  }

  async isVisible(page) {
    await expect(page.locator('[data-test-id="DriverInfo-container"]')).toBeVisible();
  }
}
export default new DriverInformationPage();