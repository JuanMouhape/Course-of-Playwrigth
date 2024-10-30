const {test, expect, request} = require('@playwright/test');
const {APIUtils} = require('../utils/APIUtils')
const exp = require('constants');
const loginPayload = {userEmail: "elpitu102@gmail.com", userPassword: "Pitu22pitu"};
const orderPayLoad = {orders: [{country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf"}]};
let response;

test.beforeAll(async () => 
{
    const apiContext = await request.newContext();
    const apiUtils = await new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayLoad);
})


test('Place the order', async ({page}) =>
{
    console.log(response.token);
    console.log(response.orderId);
    await page.addInitScript(value => {
        window.localStorage.setItem("token", value);
    }, response.token );

    await page.goto("https://rahulshettyacademy.com/client/");
        
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    const rows = await page.locator("tbody tr");

    for (let i=0; i< await rows.count(); ++i){
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails=await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

});

    

    