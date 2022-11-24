Feature: End to end ecommerce validation 

    Application Regression
    @Regression
    Scenario: Ecommerce products validation
    Given I open ecommerce page
    When I added items to cart
    And validate the total prices
    Then select the country, submit and verify success message

    @Smoke
    Scenario: I fill the form details
    Given I open ecommerce page
    When I fill the form details
    | name | gender |
    | Emy  | Male   |
    And validate the forms behaviour
    Then select the the shop page
    