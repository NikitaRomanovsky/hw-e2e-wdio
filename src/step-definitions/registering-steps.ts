import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


When('I click on Create an Account button to navigate to registration page', async () => {
    const createAccountButton = await $('/html/body/div[2]/header/div[1]/div/ul/li[3]/a')
    await createAccountButton.waitForDisplayed()
    await createAccountButton.click()
})

When('I type in valid data to registrate', async () => {
    const firstNameField = await $('//*[@id="firstname"]')
    firstNameField.waitForDisplayed()
    firstNameField.setValue('test')

    const lastNameField = await $('//*[@id="lastname"]')
    lastNameField.waitForDisplayed()
    lastNameField.setValue('test')
    
    const emailField = await $('//*[@id="email_address"]')
    emailField.waitForDisplayed()
    emailField.setValue('nikita/test41@test.com')
    
    const passwordField = await $('//*[@id="password"]')
    passwordField.waitForDisplayed()
    passwordField.setValue('Test123@')

    const confirmPasswordField = await $('//*[@id="password-confirmation"]')
    confirmPasswordField.waitForDisplayed()
    confirmPasswordField.setValue('Test123@')
})

When('I click on Create an Account button to submit registration', async () => {
    const createAccountButton = await $('//*[@id="form-validate"]/div/div[1]/button')
    createAccountButton.click()
})

Then('I should see message regarding succesfull registration', async () => {
    const registrationMessageElement = await $('//*[@id="maincontent"]/div[1]/div[2]/div/div/div')
    await registrationMessageElement.waitForDisplayed()
    const registrationMessageText = await registrationMessageElement.getText()
    expect(registrationMessageText).toEqual('Thank you for registering with Main Website Store.')

})
