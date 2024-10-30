const {test,expect} = require('@playwright/test');

//test.describe.configure({mode:'parallel'}); //De esta forma puedo ejecutar en paralelo los casos que esten en un mismo archivo.
test.describe.configure({mode:'serial'}); //Interdependencia entre casos, digamos que si uno falla los otros como consecuentes no seguiran su ejecucion.

test('@Web Popup Validations', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //await page.goto("http://google.com");
    //await page.goBack();
    //await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#confirmbtn").click();
    page.on('dialog', dialog => dialog.accept);
    await page.locator("#mousehover").hover();
    const framePage = await page.frameLocator("#courses-iframe")
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
});

test('Screenshot & Visual Compasion', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path: 'partialScreenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'})
    await expect(page.locator("#displayed-text")).toBeHidden();
});

test('Visual Testing', async ({page}) =>
{
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing.png');
}
);