const {Given, When, Then} = require('@cucumber/cucumber')
const {LoginPage} = require('../pages/LoginPage')
// import expect for assertion
const { expect } = require("@playwright/test");
const url = 'https://www.saucedemo.com/';
let loginPage = new LoginPage();

Given('I am a user with valid authentication credentials', async () => {
    // Write code here that turns the phrase above into concrete actions
    await page.goto(url);
  });

When('I fill in my credentials', async () => {
    // Write code here that turns the phrase above into concrete actions
    
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    page.on('dialog', dialog => dialog.accept());
});

Then('I can successfully be logged in', async () => {
    // Write code here that turns the phrase above into concrete actions
    await expect(page.locator(".app_logo")).toContainText("Swag Labs");
});