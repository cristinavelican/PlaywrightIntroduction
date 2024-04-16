# Playwright running

## How to run a test from Terminal
There are at least two ways you can run a Playwright test.
One is directly from the Terminal (CMD) by positioning yourself in the project directory.

```
npx playwright test  -- this command will run all the tests from your project
npx playwright test ./tests -- this command will run all the tests from inside "tests" folder 
npx playwright test ./tests/test_file.js -- this command will run all the tests from the test_file json file
npx playwright test ./tests/test_file.js -g "Save\s+screenshot\s+files$" -- this command will run only the test "Save screenshot files" from the test_file.js
```

## How to run a test from Visual Studio Code
If you haven't install it yet, I recommend to use it, by downloading it from https://code.visualstudio.com/download
It has nice integration with Playwright, by installing the extensions "Playwright Runner" and "Playwright Test for VSCode".
Once those are installed you will get autocomplete functionality for your tests, but also the "TEST Explorer" functionality which will allo you to:
* Pick locators
* Record a test
* Show browser
* Reveal the test output
But more importanly, you will be able to run your tests directly by playing the icon in front of the test (by default it will run headless)

## Next lesson 
[Organize and Write a first test case]()


