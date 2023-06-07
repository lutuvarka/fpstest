Feature: Validate that the AZ List of Sports is populated

  Scenario: Testing the A-Z Sports list is not empty
    Given User has opened the Sports section
    When User checks the AZ List
    Then User can select from the list of sports