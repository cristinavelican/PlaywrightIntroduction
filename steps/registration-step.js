const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
const url = 'https://demowebshop.tricentis.com/'

Given('I am a new user', async () => {
    await page.goto("https://demowebshop.tricentis.com/register");
});

When('I want to register by providing my personal details', async () => {
    await page.getByLabel('Female').click();
    await page.getByLabel('First name:').fill("Cristina");
    await page.getByLabel('Last name:').fill("Ve");
    await page.getByLabel('Email:').fill("test234@test3456.com");
    await page.locator("#Password").fill("CristinaHere");
    await page.locator("#ConfirmPassword").fill("CristinaHere");
    await page.getByRole('button', { name: 'Register' }).click();

});

Then('I should be able to successfully register to the website', async () => {
    const registrationResult = page.locator("//div[@class='result']")
    await expect(registrationResult).toContainText("Your registration completed");
});