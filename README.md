# Frontend Technical Test

Welcome to Flutter International (Pokerstars) technical exercise for frontend test engineers!

The site we would like you to test can be found at: https://www.pokerstarssports.uk, you will need to be browsing from a UK IP address in order to access it. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1
Write 10 or more Gherkin scenarios to cover behaviour on the home page.

### Task 2
Create a simple javascript framework using WebdriverIO and Cucumber to automate a selection of the scenarios you have created. You should include at least 5 scenarios.
- https://www.npmjs.com
- https://webdriver.io/docs/gettingstarted
- https://webdriver.io/docs/frameworks#using-cucumber

After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.

************
Introduction

Hi Flutter International,

It was an interesting task for sure!
I am more of a Cypress-guy and some things in WebDriver.io threw me off for a while 
but I think I recovered (thanks to StackOverflow) and pretty OK with submitting this.

Thanks for this chance and good luck in your searches.

Todor

********
Approach

- I started with exploratory testing by manually clicking around and assuming some 
  features and behavior
- Then, I started writing scenarios in BDD
- Then, I chose the ones to automate: Some obvious ones for volume :) and then 
a couple more technical ones to demonstrate some level of skill...

**********
To improve

- Choose a naming strategy and stick to it...
- Refactor the entry points of some tests into a Gherkin "Background" statement
- Implement the rest of the feature files
- Add support for different browsers, including headless (see next point)
- Add a CI/CD pipeline (github action)
- Add test evidence (screenshots, etc) collection
- More test cases! :)

************
Instructions

0. (Prerequisites) Have Node.js and Chrome browser installed
1. Install the solution locally with 'npm install'
2. To run all tests: 'npm run tests'

   To run an individual feature: Edit 'package.json/scripts/individual-feature' like so:
   "individual-feature": "wdio run ./wdio.conf.js --spec features/________.feature",
   (fill the blank with the name of the desired feature file)
   
= Observe tests running in parallel. The terminal will report the pass/fail count

************
All features

    Feature: Add a bet, gamble 100. Potential returns should be more than 100
    
      Scenario: Checking that entered stake on a bet shows higher potential return
        Given User has clicked on a bet
        When User enters 100 pounds stake
        Then Alert message is shown with potential returns higher than 100 pounds value


    Feature: Validate that the AZ List of Sports is populated
    
      Scenario: Testing the A-Z Sports list is not empty
        Given User has opened the Sports section
        When User checks the AZ List
        Then User can select from the list of sports


    Feature: Test that each radio button changes how the odds are displayed as bets
    
      We will be implementing scenario outline to apply the best practice in test case creation

        Scenario Outline: Each radio button changes how odds are being displayed
          Given User has selected their odds <type>
          When User visits the bets section
          Then <odds> are displayed with correct conversion
          Examples:
            | type                                                                      | odds |
            | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[1]/input | /    |
            | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[2]/input | .    |
            | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[3]/input | +    |


    Feature:  Bet on the first 3 options, ensure bet slip is populated with 3 singles
    
      Scenario: User can mix and select multiple bets to be added to the bet slip
        Given User has accessed one of the game sites
        When User clicks a on a new bet
        And add two more other bets from the same game site
        Then Bet slip is populated with total of 3 bets


    Feature: Smoke Test - Check website is working correctly and is ready
    
        Scenario: Check if website is working
          Given User has opened the PokerStar website
          When User opens the website
          Then Website is in ready state


    Feature: Force validation error for staking on a bet
    
      Scenario: Test one million pounds stake for negative testing
        Given User has placed a new bet
        When User stakes one million pounds
        Then Error message is displayed


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


    Feature: Testing Bet Slip
    
      Scenario: Validate empty bet list and adding new bet
        Given Bet slip is empty
        When User add a bet
        Then Bet slip is populated
        When User removes the bet
        Then Bet slip is empty again


    Feature: Test to see if login button displays a pop up window

      Scenario: Not logged in user is able to see pop up login
        Given User is not logged in to the PokerStars
        And both Join and Login buttons are visible
        When User clicks on Login button
        Then Pop up login window is displayed


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
