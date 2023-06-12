import{test,expect} from '@playwright/test'
import orangeHRM from '../Support/pages/hooks_1'
import fixture from '../Support/Fixtures/hooks_1_Fixture';

fixture.describe('orangehrm Page', () => 
{
    fixture.beforeEach(async({orangePage}) => {

        await orangePage.loginPage();  
    })
    fixture('nevigate to admin page', async({orangePage})=>{

        await orangePage.adminPage();
    })
    fixture('nevigate to logout page', async({orangePage})=>{

        await orangePage.logoutPage();
    })
    
    
})

