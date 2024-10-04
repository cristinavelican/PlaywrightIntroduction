Feature: Login features

Scenario: Check that a standard user can login successfully to the website
Given I am a user with valid authentication credentials
When I fill in my credentials
Then I can successfully be logged in