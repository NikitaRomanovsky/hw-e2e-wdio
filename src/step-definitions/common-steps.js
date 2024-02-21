const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const { Before, After } = require('@wdio/cucumber-framework');


/* 
Implemented afterScenario hook to clear cookies and restart the browser's session.
I am not including this in feature files as this is purely technical information.
Feature files should contain user friendly stories to describe a part of app's behaviour.
**/

After(async () => {
    // Clear cookies
    await browser.deleteCookies();
  
    // Reloads session = re-opens home page
    await browser.reloadSession();
  });

Given('I am on the Luma homepage', async () => {
    await browser.url('https://magento.softwaretestingboard.com/')
})