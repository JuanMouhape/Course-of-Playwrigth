import {expect, type Locator, type Page } from '@playwright/test';

let message1 : string = "Hello";
message1= "bye";
console.log(message1);

let age1:number = 20;
console.log(message1);
let isActive:boolean = false;

let numberArry: number[] = [1,2,3];

let data : any = "This could be anithying. ";

data = 42;

function add (a: number, b: number) : number
{
    return a+b;
}

add(3,4);

let user: {name:string,age:number,location:string} = {name:"Bob",age:34,location:"blabla"}; 

class CartPage {

    page:Page;
    readonly cartsProducts: Locator;
    readonly productsText: Locator;
    readonly cart: Locator;
    readonly orders: Locator;
    readonly checkout: Locator;
 
    constructor (page:any){
        this.page = page;
        this.cartsProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");
    }
}
