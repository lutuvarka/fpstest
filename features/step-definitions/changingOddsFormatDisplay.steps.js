const { Given, When, Then } = require('@wdio/cucumber-framework');
const sportsPage = require('../pageobjects/sportsPage.js');

Given(/^User has selected their odds (.*)$/, async (type) => {
    await browser.url('/sports');
    await browser.maximizeWindow();
    await sportsPage.cookiesAccept.click();
    await sportsPage.settingsTab.click(); //Accessing the settings tab within Sports
    const oddType = await $(type);
    let isItSelectable = await oddType.isClickable();
    console.log(isItSelectable);
    await browser.waitUntil(() => oddType.isClickable())
    oddType.click();
});

When(/^User visits the bets section$/, async () => {
    await sportsPage.homeTab.click();
});

Then(/^(.*) are displayed with correct conversion$/, async (odds) => {
    const displayedOdds = await sportsPage.firstLiveGameOdds.getHTML(false);
    await expect(displayedOdds).toContain(odds);
    await browser.reloadSession()
});