Feature:  Bet on the first 3 options, ensure bet slip is populated with 3 singles

  Scenario: User can mix and select multiple bets to be added to the bet slip
    Given User has accessed one of the game sites
    When User clicks a on a new bet
    And add two more other bets from the same game site
    Then Bet slip is populated with total of 3 bets