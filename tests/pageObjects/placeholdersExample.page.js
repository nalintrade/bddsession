class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = '#username' || '[data-test="username"]'; // Flexible selector
        this.passwordField = '#password' || '[data-test="password"]';
        this.loginButton = '#login' || '[data-test="login-btn"]';
    }

    async navigate() {
        await this.page.goto('https://example.com/login');
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameField, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }
}

// module.exports = LoginPage;
export default new LoginPage();