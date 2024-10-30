const {test,expect} = require('@playwright/test');

test('Browser Context First Playwright test', async ({page}) =>
{
    const email = "elpitu102@gmail.com";
    const productName = "ADIDAS ORIGINAL";
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client');
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Pitu22pitu");
    await page.getByRole('button', {name:"Login"}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click();
    await page.getByRole("listitem").getByRole('button', {name: "Cart"}).click();
    await page.locator("div li").first().waitFor();
    await expect(await page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", {name: "Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});

    await page.getByRole("button", {name: "Ind"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    
});

    