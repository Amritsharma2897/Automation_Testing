import{test, expect} from "@playwright/test"

test.describe('project', () => {

    test('verify all the elements', async ({ page }) => {

        //open the url
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByPlaceholder('Username').fill('Admin');

        await page.getByPlaceholder('Password').fill('admin123');

        await page.locator('button[type="submit"]').click();

        const allLinkText = page.locator('.oxd-main-menu li');
       const textContain= ["Admin", "PIM", "Leave", "Time", "Recruitment", "My Info", "Performance", "Dashboard", "Directory", "Maintenance", "Buzz"]
        
        for (let i=0; i<textContain.length; i++) {

            console.log(textContain[i]);

          // await expect(allLinkText.nth(i)).toHaveText(textContain[i]);
        }
        await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
        
        await page.locator('input[class="oxd-input oxd-input--active"]').nth(1).fill('Amrit');
        await page.locator('div[class="oxd-select-text-input"]').nth(0).click();
        await page.getByRole('option',{name:"Admin"}).click()

        await page.getByPlaceholder("Type for hints...").click();
        await page.getByPlaceholder("Type for hints...").fill('Avinsh T');
        await page.getByText('Avinash T').first().click();

        await page.locator('div[class="oxd-select-text-input"]').nth(1).click();
        await page.getByRole('option', {name:"Enabled"}).click();

        await page.locator('input[type="checkbox"]').nth(1).click();

        // const textContain1 =await dropDownText.allTextContents();
        //  textContain1.forEach(Element =>{

        //     console.log(Element)
        //  })

        // const textContain1 = [
        //     "About",
        //   "Support",
        //    "Change Password",
        //    "Logout",
        //   ]

        // for(let i=0; i<textContain1.length; i++){

        //     console.log(textContain1[i]);
        //    await expect(dropDownText.nth(i)).toHaveText(textContain1[i]);
        // }

        

        
    })
    
    
})
