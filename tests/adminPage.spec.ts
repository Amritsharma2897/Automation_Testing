import{test, expect} from '@playwright/test'
import adminPage from '../Support/pages/adminPage';
import LoginPage from '../Support/pages/loginPage';

test.describe('adminPage', () => {
    test('verify all element', async ({ page }) => {

        const login = new LoginPage(page);
        await login.loginPage();
        await login.enterUsername();
        await login.enterPassword(); 
        await login.click_Button();

        const admin = new adminPage(page);
        await admin.adminPage();
            
    })
    
    
})
