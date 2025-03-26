import { expect } from '@playwright/test';
class VehicleUsagePage {
  async enterMileage(page, mileage) {
    await page.locator('[data-testid="VehicleUsage-mileageInput"]').fill(mileage);
  }

  // async selectPrimaryUse(page, use) {
  //   await page.locator('[data-testid="VehicleUsage-primaryUseSelect"]').selectOption(use);
  // }

  async selectPrimaryUse(page, use) {
    await page.locator('[data-testid="VehicleUsage-primaryUseSelect"]').click();
    await page.locator('[data-testid="VehicleUsage-primaryUseSelect"]').selectOption({ label: use });
  }
  
  async selectParkingLocation(page, location) {
    await page.locator('[data-testid="VehicleUsage-parkingLocationSelect"]').click();
    await page.locator('[data-testid="VehicleUsage-parkingLocationSelect"]').click();
    await page.locator('[data-testid="VehicleUsage-parkingLocationSelect"]').selectOption({ label: location });
  }
  

  // async selectParkingLocation(page, location) {
  //   await page.locator('[data-testid="VehicleUsage-parkingLocationSelect"]').selectOption(location);
  // }

  async submit(page) {
    await page.click('[data-testid="VehicleUsage-nextButton"]');
    // await page.pause();
  }

  async goBack(page) {
    await page.click('[data-testid="VehicleUsage-backButton"]');
  }

  async fillForm(page, data) {
    await this.enterMileage(page, data.annualMileage);
    await this.selectPrimaryUse(page, data.primaryUse);
    await this.selectParkingLocation(page, data.parkingLocation);
  }

  async isVisible(page) {
    await expect(page.locator('[data-testid="VehicleUsage-form"]')).toBeVisible();
  }
}
export default new VehicleUsagePage();