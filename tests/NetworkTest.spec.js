const {test,expect} = require('@playwright/test');
const { url } = require('inspector');

test('Security test request intercept', async ({page}) =>
{

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("#userEmail").fill("elpitu102@gmail.com");
    await page.locator("#userPassword").fill("Pitu22pitu");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    await page.locator("button[routerlink*='myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6711682dae2afd4c0b9f376X"})
    );
    await page.locator("button:has-text('View')").first().click();
    await expect(await page.locator("p").last()).toHaveText("You are not authorize to view this order");
}
);