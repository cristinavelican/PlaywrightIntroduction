

exports.LoginPage = class LoginPage {
    USERNAME_FIELD = "#user-name"
    PASSWORD_FIELD = "#password"
    LOGIN_BUTTON = "#login-button"

    async loginWith(username, password) {
        await page.locator(this.USERNAME_FIELD).fill(username);
        await page.locator(this.PASSWORD_FIELD).fill(password);
        await page.locator(this.LOGIN_BUTTON).click();
    }
}