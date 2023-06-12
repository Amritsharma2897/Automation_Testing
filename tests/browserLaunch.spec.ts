import{test, expect} from '@playwright/test'

 test.describe('launch the browser', () => {

    test('brwoser', async ({ browser }) => {
        
        const context = await browser.newContext()
        const page = await context.newPage()
        page.goto("https:/www.google.com")
    }) 
    
 })
 