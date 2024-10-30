const {test, expect} = require('@playwright/test');
const {customtest} = require('../utils/test-base');

const {POManager} = require('../pageObjects/POManager');
//Json->string->js object
const dataset =  JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));


for(const data of dataset)
{
test(`@Webs Client App login for ${data.productName}`, async ({page})=>
{
  const poManager = new POManager(page);
   //js file- Login js, DashboardPage
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(data.productName);
   await cartPage.Checkout();

   const ordersReviewPage = poManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind","India");
   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardPage.navigateToOrders();
  const ordersHistoryPage = poManager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();






   
});
}

customtest(`Client App login`, async ({page,testDataForOrder})=>
{
  const poManager = new POManager(page);
   //js file- Login js, DashboardPage
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();

   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
   await cartPage.Checkout();


})
//test files will trigger parallel
//individual tests in the file will run in sequence










/*const { test, expect } = require('@playwright/test');
const {customtest} = require('../utils/test-base');


const { POManager } = require('../pageObjects/POManager');

//const dataSet = JSON.parse(JSON.stringify(require ("../utils/placeorderTestData.json")));

//for (const data of dataset) 
//{

    test('@Web Prueba POM for', async ({ page }) => {

        const userName = "elpitu102@gmail.com";
        const password = "Pitu22pitu"
        const productName = "ADIDAS ORIGINAL";

        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();
        await loginPage.goto();
        await loginPage.validLogin(userName, password);
        //await loginPage.validLogin(dataSet.userName, dataSet.password);
        const dashBoardPage = poManager.getDashboardPage();
        await dashBoardPage.searchProduct(productName);
        //await dashBoardPage.searchProduct(dataSet.productName);
        await dashBoardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.VerifyProductIsDisplayed(productName);
        //await cartPage.VerifyProductIsDisplayed(dataSet.productName);
        await cartPage.Checkout();

        const ordersReviewPage = poManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");
        const orderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log(orderId);
        await dashBoardPage.navigateToOrders();
        const ordersHistoryPage = poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    });
//}
/*
customtest.only('Prueba POM for ${data.productName}', async ({ page,testDataForOrder }) => {

    const userName = "elpitu102@gmail.com";
    const password = "Pitu22pitu"
    const productName = "ADIDAS ORIGINAL";

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goto();
    await loginPage.validLogin(testDataForOrder.userName, testDataForOrder.password);
    //await loginPage.validLogin(dataSet.userName, dataSet.password);
    const dashBoardPage = poManager.getDashboardPage();
    await dashBoardPage.searchProduct(testDataForOrder.productName);
    //await dashBoardPage.searchProduct(dataSet.productName);
    await dashBoardPage.navigateToCart();
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    //await cartPage.VerifyProductIsDisplayed(dataSet.productName);
    await cartPage.Checkout();
});¨
*/
