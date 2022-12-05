Feature: Bootcamp E2E

    Background:
    Given I am on the home page
    And I can close the promo banner if it appears

    @search
    Scenario: As a user, I can search for a single product
    When I type in a "Windows" in the search bar
    And I click the search button
    Then I am redirected to the appropriate page with the "Windows" results
    And I can see at least one item was found

    @logo
    Scenario: As a user, I can go to Today's Best Deals tab and then go back to the home page by clicking on the Internet shop logo
    When I click on the Today's Best Deals tab
    And I am redirected to the Today's Best Deals page
    Then I click on the Internet page logo
    And I am on the home page