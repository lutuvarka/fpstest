Feature: Test to validate that each tab can be opened within the Sports section

  Scenario Outline: Validate each of the five sub-sections can be displayed
    Given User is located on the Sports
    When User enters <tab>
    Then is it correctly <displayed>
    Examples:
      | tab        | displayed |
      | Home       | Yes       |
      | In-Play    | Yes       |
      | My Bets    | Yes       |
      | Promotions | Yes       |
      | Settings   | Yes       |