Feature: Cart

    Background:
    Given I am on the Luma homepage

    Scenario: As a user, I can add an item to my cart and proceed to checkout page
    When I click on What's New button
    And I open first item in Luma's Latest section
    And I select required fields
    And I click on Add to Cart button
    And I collect name of the product
    And I click on shopping cart button
    And I see added item in the shopping cart
    And I click on Proceed to Checkout button
    Then I should see Checkout page

    Scenario: As a user, I can add two items to my cart and see calculated total price
    When I click on What's New button
    And I open first item in Luma's Latest section
    And I select required fields
    And I click on Add to Cart button
    And I collect the price of first item
    And I click on What's New button again
    And I open second item in Luma's Latest section
    And I select required fields again
    And I click on Add to Cart button again
    And I collect the price of second item
    And I click on shopping cart button
    Then I should see calculated price of both items 