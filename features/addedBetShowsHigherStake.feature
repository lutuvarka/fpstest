Feature: Add a bet, gamble 100. Potential returns should be more than 100

  Scenario: Checking that entered stake on a bet shows higher potential return
    Given User has clicked on a bet
    When User enters 100 pounds stake
    Then Alert message is shown with potential returns higher than 100 pounds value