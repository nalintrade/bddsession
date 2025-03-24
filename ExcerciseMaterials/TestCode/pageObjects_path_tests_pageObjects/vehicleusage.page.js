import { expect } from '@playwright/test';
class VehicleUsagePage {
  async enterMileage(page, mileage) {
    await page.locator('[data-test-id="VehicleUsage-mileageInput"]').fill(mileage);
  }

  // async selectPrimaryUse(page, use) {
  //   await page.locator('[data-test-id="VehicleUsage-primaryUseSelect"]').selectOption(use);
  // }

  async selectPrimaryUse(page, use) {
    await page.locator('[data-test-id="VehicleUsage-primaryUseSelect"]').click();
    await page.locator('[data-test-id="VehicleUsage-primaryUseSelect"]').selectOption({ label: use });
  }
  
  async selectParkingLocation(page, location) {
    await page.locator('[data-test-id="VehicleUsage-parkingLocationSelect"]').click();
    await page.locator('[data-test-id="VehicleUsage-parkingLocationSelect"]').click();
    await page.locator('[data-test-id="VehicleUsage-parkingLocationSelect"]').selectOption({ label: location });
  }
  

  // async selectParkingLocation(page, location) {
  //   await page.locator('[data-test-id="VehicleUsage-parkingLocationSelect"]').selectOption(location);
  // }

  async submit(page) {
    await page.click('[data-test-id="VehicleUsage-nextButton"]');
    // await page.pause();
  }

  async goBack(page) {
    await page.click('[data-test-id="VehicleUsage-backButton"]');
  }

  async fillForm(page, data) {
    await this.enterMileage(page, data.annualMileage);
    await this.selectPrimaryUse(page, data.primaryUse);
    await this.selectParkingLocation(page, data.parkingLocation);
  }

  async isVisible(page) {
    await expect(page.locator('[data-test-id="VehicleUsage-form"]')).toBeVisible();
  }
}
export default new VehicleUsagePage();