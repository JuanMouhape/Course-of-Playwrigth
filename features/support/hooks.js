const playwright = require('@playwright/test');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const {POManager} = require('../../pageObjects/POManager');

//Before({tags: "@Validations"}, async function (){ //Si quiero correr una prueba con un tag en especifico, y que este tenga algun paso especifico antes

Before( async function (){
    const browser = await playwright.chromium.launch({
        headless: false
      });
      const context = await browser.newContext();
      this.page = await context.newPage();
      this.poManager = new POManager(this.page);
});

BeforeStep ( function(){

});

AfterStep ( async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path : 'screenshot1.png'});
    }
});

After (function () {
    console.log("I'm last to execute")
});