const { Given, When, Then } = require('@wdio/cucumber-framework');
const sportsPage = require('../pageobjects/sportsPage.js');

Given('Bet slip is empty', async () => {
    await browser.url('/sports');
    await browser.maximizeWindow();
    await sportsPage.cookiesAccept.click();
    const betSlip = await sportsPage.betSlip;
    await expect(betSlip).toHaveText('Your bet slip is empty');
});

When('User add a bet', async () => {
    await sportsPage.firstLiveGameOdds.click();
});

Then('Bet slip is populated', async () => {
    const betSlip = await sportsPage.betSlip;
    await expect(betSlip).not.toHaveText('Your bet slip is empty');
    const newBetSlot = await sportsPage.betCard;
    await expect(newBetSlot).toBeDisplayed();
});

When('User removes the bet', async () => {
    await sportsPage.removeBet.click();
});

Then('Bet slip is empty again', async () => {
    const betSlip = await sportsPage.betSlip;
    await expect(betSlip).toHaveText('Your bet slip is empty');
});