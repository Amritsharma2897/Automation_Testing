import{test, expect} from '@playwright/test'
import Hooks from '../Support/pages/use_of_Hooks';

test.describe('use of hooks',async() => {


    test.beforeEach(async({page })=>
    {
        const hooks = new Hooks(page);
        await hooks.loginPage();   
    })
    test.afterEach( async ({ page }) => {

       const hooks = new Hooks(page);
        await hooks.logoutLinkText();  
    })
   test('add to card page', async ({ page }) => {

    const hooks = new Hooks(page);
    await hooks.addToCardPage();

   })

   test('about page', async ({ page }) => {

    const hooks = new Hooks(page);
    await hooks.aboutPage();

   })
   
   
    
    
})
