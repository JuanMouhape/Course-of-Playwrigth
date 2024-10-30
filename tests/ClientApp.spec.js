const {test,expect} = require('@playwright/test');

test('Browser Context First Playwright test', async ({page}) =>
{
    const email = "elpitu102@gmail.com";
    const productName = "ADIDAS ORIGINAL";
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Pitu22pitu");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    const count = await products.count();
    console.log(count);
    for (let i=0; i < count; ++i){
        if (await products.nth(i).locator("b").textContent() === productName){
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('"+productName+"')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
    const dropdown = await page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i=0; i< optionsCount; ++i){
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    const rows = await page.locator("tbody tr");
    for (let i=0; i< await rows.count(); ++i){
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)){
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails=await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();

});

    