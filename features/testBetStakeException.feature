Feature: Force validation error for staking on a bet

  Scenario: Test one million pounds stake for negative testing
    Given User has placed a new bet
    When User stakes one million pounds
    Then Error message is displayed