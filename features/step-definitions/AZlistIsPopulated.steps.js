const { Given, When, Then } = require('@wdio/cucumber-framework');
const sportsPage = require('../pageobjects/sportsPage.js');

Given('User has opened the Sports section', async () => {
    await browser.url('/sports');
    await browser.maximizeWindow();
    await sportsPage.cookiesAccept.click();
});

When('User checks the AZ List', async () => {
    await sportsPage.AzSportsSection;
    for await (const allSports of sportsPage.AzSportsList) {
        await allSports.isExisting()
    }
});

Then('User can select from the list of sports', async () => {
    await sportsPage.AzSportsListAmericanFootball.isClickable();
});