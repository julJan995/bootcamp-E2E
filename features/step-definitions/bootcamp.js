import { Given, When, Then } from '@wdio/cucumber-framework';
import { homePage, requiredUrlPart } from "../../variables/variables";
import { bannerSelector, bannerBtnCloseSelector, searchBarSelector, searchBtnSelector, itemsList, tabSelector } from "../../selectors/selectors";

Given("I am on the home page", async() => {
    await browser.url(homePage);
});

Given("I can close the promo banner if it appears", async() => {
   try {
        await bannerSelector.waitForExist();
        await bannerBtnCloseSelector.click();
    } catch (error) {
        console.log('Promo banner was not displayed');
    }
});

When("I type in a {string} in the search bar", async(productName) => {
    await searchBarSelector.setValue(productName);
});

When("I click the search button", async() => {
    await searchBtnSelector.click();
});

Then("I am redirected to the appropriate page with the {string} results", async(productName) => {
    await expect(browser).toHaveUrlContaining(productName);
});

Then("I can see at least one item was found", async() => {
    expect (itemsList.length);
});

When("I click on the Today's Best Deals tab", async() => {
    await tabSelector.click();
});

When("I am redirected to the Today's Best Deals page", async() => {
    await expect(browser).toHaveUrlContaining(requiredUrlPart);
});

Then("I click on the Internet page logo", async() => {
    const logoSelector = await $(`a[href="${homePage}/"]`);
    await logoSelector.click();
});