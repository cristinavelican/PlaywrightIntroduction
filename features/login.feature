Feature: Login features

Scenario: Check that a standard user can login successfully to the website
Given I am a user who visits the website
When I fill in the credentials for "standard_user"
Then I can successfully be logged in

Scenario: User is not allowed to authenticate
Given I am a user who visits the website
When I fill in the credentials for "locked_out_user"
Then I will be denied access with the following message "Epic sadface: Sorry, this user has been locked out."