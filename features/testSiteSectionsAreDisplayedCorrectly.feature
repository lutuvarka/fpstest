Feature: Site Sections can go into each of Casino, Poker and Sports pages to ensure the correct website is displayed

  Scenario Outline: Testing that user can access Casino section
    Given User has opened the main website
    When User select <site>
    Then Correct site is <rendered> and is state ready
    Examples:
      | site   | rendered |
      | Casino | Yes      |
      | Poker  | Yes      |
      | Sports | Yes      |