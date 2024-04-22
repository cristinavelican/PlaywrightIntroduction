# Practical exercises

Using this framework as an example and the https://demowebshop.tricentis.com/, create Cucumber scenarios for each of the below tests and implement them using Playwright:

## Login/ Registration

1. Check that it is impossible to complete the registration process when you have non-matching ‘password’ and ‘confirm password’ fields. An error message should be visible
2. Log in using an existing user, i.e. with a registered email and password

## Shopping basket
1. Add a product to your shopping basket and check if the counter increases with 1
2. Add multiple products (same product) to your shopping basket and check if the counter increases with the same amount of products added
3. As a guest user, I can add an item X times to my shopping cart and perform a straight checkout, having a valid discount coupon code (AutomationDiscount2), via Ground shipping, via “Cash on Delivery” Payment method

## Search and filtering
1. Check you can sort based on the name of products, from A-Z and verify that the sorting is correct
2. Search for a specific product, based on a key-word
3. Search a product with the advanced search, using a specific category and price range

## My account / Settings:
1. Check that you can change your password and log in with your new password
2. Check that you can add an address to your account