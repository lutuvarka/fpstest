const { Given, When, Then } = require('@wdio/cucumber-framework');
const sportsPage = require('../pageobjects/sportsPage.js');

Given('User has opened the PokerStar website', async () => {
    await browser.url('/sports'); //We don't need to input the full URL as we've already set our baseUrl in the config file
    await browser.maximizeWindow();
    await sportsPage.cookiesAccept.click(); //This is the cookie pop up bar, where we just need to accept them to carry on with other DOM elements
});

When('User opens the website', async () => {
    await expect(browser).toHaveUrl('https://www.pokerstars.uk/sports/') //Check that the url is correct
});

Then('Website is in ready state', async () => {
    await browser.waitUntil(
        () => browser.execute(() => document.readyState === 'complete'),
        {
            timeout: 5000,
            timeoutMsg: 'The Poker Stars page has failed to load'
        } //Here we are giving 5 seconds for the page to fully load, otherwise it will fail with an error
    )
});