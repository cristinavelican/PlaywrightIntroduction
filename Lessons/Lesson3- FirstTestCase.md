# Structure

## Test files
Every test file need to have either the .js, the .ts or .mjs extension
In order for Playwright to recognize it as a test class, it needs to contain in the name either the word 'test' or 'spec'

## Test methods
Every test method will have two mandatory parameters:
* the name/description of the test
* the test function/ body
```
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
```
## Locators
Prefer user-facing ways to locate elements

- getByLabel

```jsx
    await page.getByLabel("First name").fill("Cristina");
```

- getByRole

```jsx
await page.getByRole("button", {name: "Register"}).click();
```

- getText

Other locators:

- getByPlaceholder
- getByAltText()
- getByTitle()
- getByTestId()

Generic locators:
- You can use also CSS and Xpath selectors
```
await page.locator('.needs-validation label[for="lastName"]').fill("Ve");
```


# How to write the first test case
A test has 3 main parts:
Context of the test (GIVEN)
Set the state of the application

* Navigate to the page
* Prerequisite conditions
* Get DOM element
```
await page.goto(URL);
```

Action (WHEN)
Perform an Action, interact with an element

* Type
```
await page.getByLabel('Date of birth').fill('2023-10-10');
```
* Click
```
await btn.click({button: 'right'});
```
* Press key
```
await page.keyboard.press('Enter');
```
* reload page
```
await page.reload();
```
* hover
```
await locator.hover();
```
...

Expected behaviour (THEN)
Assert the state of the application after the action taken and verify the behavior of the changes.

* have value
```
await expect(message).toHaveValue("London");
```
* have text
```
await expect(message).not.toContainText("London");
```
* be visible
```
await expect(message).not.toBeVisible();
```

* "be empty
```
await expect(message).toBeEmpty();
```

...
Link to different types of assertions in Playwright - https://playwright.dev/docs/test-assertions

## The scenario to automate - Webshop | Add product to cart
User navigates to https://demowebshop.tricentis.com/ and searches for "simple computer" and adds the product to the shopping cart

## Steps:
1. Create a new .ts class inside the "tests" folder with the name "shoppingCart.test.ts"
2. Import the required info from Playwright:
```
import {test, expect} from '@playwright/test';
```
3. Write the test:
```
test("Add product to shopping cart", async ({page}) => {
    //CONTEXT
    await page.goto("https://demowebshop.tricentis.com/");
    //ACTION
    await page.locator("#small-searchterms").fill("computing and internet");
    await page.keyboard.press('Enter');
    await page.getByRole('button', { name: 'Add to cart' }).click()
   
    //ASSERTION
    const shoppingCartValue = page.locator("(//span[@class='cart-qty'])[1]")
    await expect(shoppingCartValue).toContainText("1");
    
})
```
4. Run it via VSC by clicking on the icon in front of the test or via the terminal:
```
npx playwright test shoppingCart.test.ts -g "Add\s+product\s+to\s+shopping\s+cart$"
```