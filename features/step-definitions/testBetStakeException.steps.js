const { Given, When, Then } = require('@wdio/cucumber-framework');
const sportsPage = require('../pageobjects/sportsPage.js');

Given('User has placed a new bet', async () => {
    await browser.url('/sports');
    await browser.maximizeWindow();
    await sportsPage.cookiesAccept.click();
    await sportsPage.firstLiveGameOdds.click();
    const betSlip = await sportsPage.betSlip;
    await expect(betSlip).not.toHaveText('Your bet slip is empty');
    const newBetSlot = await sportsPage.betCard;
    await expect(newBetSlot).toBeDisplayed();
});

When('User stakes one million pounds', async () => {
    await sportsPage.enterStake.setValue('1000000');
});

Then('Error message is displayed', async () => {
    const invalidStake = await sportsPage.stakeExceptionError;
    await expect(invalidStake).toBeDisplayed();
    await expect(invalidStake).toHaveTextContaining('Maximum stake is');
});

