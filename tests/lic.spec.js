import { test, expect } from '@playwright/test'

test('Playwright Special Locators', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("abc1234");

    await page.getByRole("button",{name:'Submit'}).click();

    const boolean = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    console.log(boolean);
    await page.getByRole("link", {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
    await page.pause();

})