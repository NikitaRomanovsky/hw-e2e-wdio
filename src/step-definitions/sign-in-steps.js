const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

When('I click on Sign In button to navigate to sign in page', async () => {
    const signInButton = await $('/html/body/div[2]/header/div[1]/div/ul/li[2]/a')
    await signInButton.waitForDisplayed()
    await signInButton.click()
})

When('I type in valid credentials', async () => {
    const emailField = await $('//*[@id="email"]')
    await emailField.waitForDisplayed()
    emailField.setValue('nikita/test2@test.com')

    const passwordField = await $('//*[@id="pass"]')
    await passwordField.waitForDisplayed()
    await passwordField.setValue('Test123@')
})

When('I click on Sign In button to log into my account', async () => {
    const signInButton = await $('//*[@id="send2"]')
    signInButton.click()
})

Then('I should see message with my name', async () => {
    const welcomingElement = await $('/html/body/div[2]/header/div[1]/div/ul/li[1]/span')
    await browser.waitUntil(async () => {
        const text = await welcomingElement.getText()
        return text.includes('Welcome, test test!') // Check if the text contains the expected string
    })
    const welcomingText = await welcomingElement.getText()
    console.log('Welcoming text: ', welcomingText)
    await expect(welcomingText).toEqual('Welcome, test test!')

})
