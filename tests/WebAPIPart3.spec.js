const {test, expect, request} = require('@playwright/test');
const {APIUtils} = require('../utils/APIUtils');
const exp = require('constants');
const loginPayload = {userEmail: "elpitu102@gmail.com", userPassword: "Pitu22pitu"};
const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf"}]};
const fakePayLoadOrders = {data: [],message:"No Orders"};
let response;

test.beforeAll(async () => 
{
    const apiContext = await request.newContext();
    const apiUtils = await new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayLoad);
})


test('Network Test', async ({page}) =>
{
    console.log(response.token);
    console.log(response.orderId);
    await page.addInitScript(value => {
        window.localStorage.setItem("token", value);
    }, response.token );

    await page.goto("https://rahulshettyacademy.com/client/");
    
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/66e49a81ae2afd4c0b73f09e",
    async route =>
    {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayLoadOrders);
        route.fulfill(
            {
                response,
                body,
            }
        );

    }
    )

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/66e49a81ae2afd4c0b73f09e");
    const emptyOrders = await page.locator(".mt-4").textContent();
    console.log(emptyOrders);

});

    

    