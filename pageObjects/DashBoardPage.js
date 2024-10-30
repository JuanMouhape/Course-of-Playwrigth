class DashBoardPage{

    constructor(page)
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("[routerlink*='myorders']").first();
    }

    async searchProduct(productName)
    {
        const titles = await this.productsText.allTextContents();
        const count = await this.products.count();
        console.log(count);
        for (let i=0; i < count; ++i){
            if (await this.products.nth(i).locator("b").textContent() === productName){
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToOrders()
    {
        await this.orders.click();
    }
    
    
    async navigateToCart()
    {
        await this.cart.click();
    }
}

module.exports = {DashBoardPage}