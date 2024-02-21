Feature: User authentication

  Background:
    Given I am on the Luma homepage

  Scenario: As a user, I can create a new account for shopping
    When I click on Create an Account button to navigate to registration page
    And I type in valid data to registrate
    And I click on Create an Account button to submit registration
    Then I should see message regarding succesfull registration


  Scenario: As a registered user, I can log into my account
    When I click on Sign In button to navigate to sign in page
    And I type in valid credentials
    And I click on Sign In button to log into my account
    Then I should see message with my name