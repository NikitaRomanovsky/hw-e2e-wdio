import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

let firstItemPrice: number;
let secondItemPrice: number;
let productNameText: string;

When("I click on What's New button", async () => {
  const whatNewButton = await $('//*[@id="ui-id-3"]');
  await whatNewButton.waitForDisplayed();
  await whatNewButton.click();
});

When("I open first item in Luma's Latest section", async () => {
  const firstProductImage = await $(
    '//*[@id="maincontent"]/div[4]/div[1]/div[2]/div[3]/div/div/ol/li[1]/div/a/span/span/img'
  );
  await firstProductImage.waitForDisplayed();
  await firstProductImage.moveTo();
  await firstProductImage.click();
});

When('I select required fields', async () => {
  const sizeButton = await $('//*[@id="option-label-size-143-item-166"]');
  const colorButton = await $('//*[@id="option-label-color-93-item-52"]');
  await sizeButton.waitForDisplayed();
  await colorButton.waitForDisplayed();
  await sizeButton.click();
  await colorButton.click();
});

When('I click on Add to Cart button', async () => {
  const addToCartButton = $('//*[@id="product-addtocart-button"]');
  await addToCartButton.click();
});

When('I collect name of the product', async () => {
    const productNameElement = await $('//*[@id="maincontent"]/div[2]/div/div[2]/div[1]/h1/span')
    productNameText = await productNameElement.getText()
  })

When('I collect the price of first item', async () => {
  const firstItemPriceElement = await $(
    '//*[@id="product-price-1130"]/span'
  );
  await firstItemPriceElement.waitForDisplayed();
  const firstItemPriceText = await firstItemPriceElement.getText();
  firstItemPrice = parseFloat(firstItemPriceText.replace('$', '').trim());
});

When("I click on What's New button again", async () => {
  const whatNewButton = await $('//*[@id="ui-id-3"]');
  await whatNewButton.waitForDisplayed();
  await whatNewButton.click();
});

When("I open second item in Luma's Latest section", async () => {
  const secondProductImage = await $(
    '//*[@id="maincontent"]/div[4]/div[1]/div[2]/div[3]/div/div/ol/li[2]/div/a/span/span/img'
  );
  await secondProductImage.waitForDisplayed();
  await secondProductImage.moveTo();
  await secondProductImage.click();
});

When('I select required fields again', async () => {
  const sizeButton = await $('//*[@id="option-label-size-143-item-166"]');
  const colorButton = await $('//*[@id="option-label-color-93-item-49"]');
  await sizeButton.waitForDisplayed();
  await colorButton.waitForDisplayed();
  await sizeButton.click();
  await colorButton.click();
});

When('I click on Add to Cart button again', async () => {
  const addToCartButton = $('//*[@id="product-addtocart-button"]');
  await addToCartButton.click();
});

When('I collect the price of second item', async () => {
  const secondItemPriceElement = await $(
    '//*[@id="product-price-446"]/span'
  );
  await secondItemPriceElement.waitForDisplayed();
  const secondItemPriceText = await secondItemPriceElement.getText();
  secondItemPrice = parseFloat(secondItemPriceText.replace('$', '').trim());
});

When('I click on shopping cart button', async () => {
  const shoppingCartButton = await $(
    '//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a'
  );
  shoppingCartButton.waitForDisplayed();
  shoppingCartButton.click();
});

When('I see added item in the shopping cart', async () => {
    const addedProductElement = await $('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[1]/div/strong/a')
    const addedProductText = await addedProductElement.getText()
    if (productNameText !== addedProductText) {
      throw Error ('Error: The gathered product name does not match product name in the cart!')
    }
  });

When('I click on Proceed to Checkout button', async () => {
    const checkoutButton = await $('//*[@id="maincontent"]/div[3]/div/div[3]/div[1]/ul/li[1]/button')
    checkoutButton.waitForDisplayed();
    checkoutButton.click();
  });

Then('I should see calculated price of both items', async () => {
  const totalPriceElement = await $(
    '//*[@id="cart-totals"]/div/table/tbody/tr[3]/td/strong/span'
  );
  await totalPriceElement.waitForDisplayed();
  const totalPriceText = await totalPriceElement.getText();
  const totalPriceValue = parseFloat(totalPriceText.replace('$', '').trim()); // Removing $ from a text value and trimming it to parse it.
  const expectedTotalPrice = firstItemPrice + secondItemPrice;
  await expect(totalPriceValue).toEqual(expectedTotalPrice);
});

Then('I should see Checkout page', async () => {
    const orderSummary = await $('//*[@id="opc-sidebar"]/div[1]/span');
    await expect(orderSummary).toBeDisplayed();
  });