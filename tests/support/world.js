import { chromium } from 'playwright';

class World {
  async setup() {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: false });
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async navigateTo(path) {
    await this.page.goto(`${process.env.BASE_URL || 'http://localhost:3000'}${path}`);
  }

  async teardown() {
    try {
      if (this.page) await this.page.close();
      if (this.context) await this.context.close();
      if (this.browser) {
        await this.browser.close();
        this.browser = null;
      }
    } catch (err) {
      console.error("Error during teardown:", err);
    }
  }
}

export default new World();
