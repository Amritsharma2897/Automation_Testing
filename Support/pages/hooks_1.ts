import { Locator, Page } from "@playwright/test";

export default class orangeHRM
{

    page: Page;
    username: Locator;
    password: Locator;
    loginbutton: Locator;
    adminLinkText: Locator;
    jobPopup: Locator;
    menuItemList: Locator;
    dropDownIcon: Locator;
    logoutButton: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('password');
        this.loginbutton = page.locator('button[type="submit"]');
        this.adminLinkText = page.locator('a[href="/web/index.php/admin/viewAdminModule"]');
        this.jobPopup = page.locator('.oxd-topbar-body-nav-tab-item i').nth(1);
        this.menuItemList = page.getByRole('menuitem', {name: "Job Categories"});
        this.dropDownIcon = page.locator('.oxd-userdropdown-icon');
        this.logoutButton = page.getByRole('menuitem', {name: "Logout"});
    }
    async loginPage()
    {

        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.username.fill('Admin');
        await this.password.fill('admin123');
        await this.loginbutton.click();
    }
    async adminPage()
    {
        await this.adminLinkText.click();
        await this.jobPopup.click();
        await this.menuItemList.click();
        await this.page.goBack(); 
        await this.page.goBack(); 
    }
    async logoutPage()
    {
        await this.dropDownIcon.click();
        await this.logoutButton.click();

    }
}