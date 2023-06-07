Feature: Test to see if login button displays a pop up window

  Scenario: Not logged in user is able to see pop up login
    Given User is not logged in to the PokerStars
    And both Join and Login buttons are visible
    When User clicks on Login button
    Then Pop up login window is displayed