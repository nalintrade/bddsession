class HomePage {
    async getTitle(page) {
      return await page.locator('h1').textContent();
    }
  
    async isButtonVisible(page, buttonText) {
      return await page.locator(`button:has-text("${buttonText}")`).isVisible();
    }

    async getSectionHeading(page) {
      return await page.locator('h2:has-text("Why Choose MercuryDemo?")').textContent();
    }
  
    async getServiceDescription(page, serviceName) {
      return await page.locator(`div.feature-card h3:has-text("${serviceName}") + p`).textContent();
    }
    
  }
  // module.exports = new HomePage();
  // export default new HomePage();
  export default new HomePage();