Feature: Testing Bet Slip

  Scenario: Validate empty bet list and adding new bet
    Given Bet slip is empty
    When User add a bet
    Then Bet slip is populated
    When User removes the bet
    Then Bet slip is empty again