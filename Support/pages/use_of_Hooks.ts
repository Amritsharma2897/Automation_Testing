import { Locator , Page} from "@playwright/test";

export default class Hooks{

    page: Page;
    username: Locator;
    loginButton: Locator;
    password: Locator;
    menuButton: Locator;
    logoutButton: Locator;
    item_1: Locator;
    item_2: Locator;
    item_3: Locator;
    aboutButton: Locator;
    constructor(page:Page){

        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#login-button');

        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');

        this.item_1 = page.locator('#add-to-cart-sauce-labs-backpack');
        this.item_2 = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.item_3 = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        
        this.aboutButton = page.locator('#about_sidebar_link');
    }
    async loginPage(){
        await this.page.goto('https://www.saucedemo.com/');
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }
    async addToCardPage(){
        await this.item_1.click();
        await this.item_2.click();
        await this.item_3.click();  
    }

    async aboutPage(){
        await this.menuButton.click();
        await this.aboutButton.click();
        await this.page.goBack();
    }
    async logoutLinkText(){
        await this.menuButton.click();
        await this.logoutButton.click();
    }

}