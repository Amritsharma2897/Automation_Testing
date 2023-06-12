import { Locator, Page } from "@playwright/test";

export default class AdminPage{

    page: Page;
    admin_linkText: Locator;
    job_linkText: Locator;
    menuItem: Locator;

    constructor(page:Page){
        this.page=page;
        this.admin_linkText =page.locator('[href="/web/index.php/admin/viewAdminModule"]');
        this.job_linkText = page.locator('.oxd-topbar-body-nav-tab-item i ').nth(1);
        this.menuItem = page.getByRole('menuitem', {name : "Job Categories"});
    }

    async adminPage(){

        await this.admin_linkText.click();
        await this.job_linkText.click();
        await this.menuItem.click();
        await this.page.goBack();
    }
   
}