import{test, expect}  from '@playwright/test'

test.describe('use of hooks', () => {
       
    test.beforeEach( async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.locator('#login-button').click();
    })
    test.afterEach(async({page}) =>{

        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();   

    })


    test('addToCart1', async ({ page }) => {

        await page.locator('#add-to-cart-sauce-labs-backpack').click();
        await page.locator('#add-to-cart-sauce-labs-bike-light').click();
        await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    })
    test('aboutPage', async ({ page }) => {

        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#about_sidebar_link').click();
        await page.goBack();
        
    })
    
    
})

