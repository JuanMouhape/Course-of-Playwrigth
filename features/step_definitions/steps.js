const { expect } = require('@playwright/test');
const { When, Then, Given } = require('@cucumber/cucumber');
const {POManager} = require('../../pageObjects/POManager');
const playwright = require('@playwright/test');

    Given('a login to Ecommerce aplication with {string} and {string}', {timeout : 100*1000}, async function (username, password) {
        //js file- Login js, DashboardPage
         const products = this.page.locator(".card-body");
         const loginPage = this.poManager.getLoginPage();
         await loginPage.goto();
         await loginPage.validLogin(username,password);
    } );

    When('Add {string} to Cart', async function (productName) {
      this.dashboardPage = this.poManager.getDashboardPage();
      await this.dashboardPage.searchProduct(productName);
      await this.dashboardPage.navigateToCart();
    });

    Then('Verify {string} is displayed in the Cart', async function (productName) {
      const cartPage = this.poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();
    });

    When('Enter valid details and Place the Order', async function () {
      const ordersReviewPage = this.poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind","India");
      this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
      console.log(this.orderId);
    });

    Then('Verify order in present in the OrderHistory', async function () {
      await this.dashboardPage.navigateToOrders();
      const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(this.orderId);
      expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
    });

      Given('a login to Ecommerce2 aplication with {string} and {string}', async function (username, password) {
        const userName = this.page.locator('input#username');
        const singIn = this.page.locator("#signInBtn");
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await this.page.title());
        //css
        await userName.fill(username);
        await this.page.locator("[type='password']").fill(password);
        await singIn.click();

      });

      Then('Verify Error message is displayed', async function () {
        //wait until this locator shown up page
        console.log(await this.page.locator("[style*='block']").textContent());
        await expect(await this.page.locator("[style*='block']")).toContainText("Incorrect ");
      });