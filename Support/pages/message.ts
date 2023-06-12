import { Locator,Page, expect } from "@playwright/test";
import * as messageSectionPage from "../testData/messagePage.json"
const path = require ('path');

class messagePage
{
    page: Page;
    username: Locator;
    loginButton: Locator;
    password: Locator;
    messageButton: Locator;
    chatList: Locator;
    chat: Locator;
    sendButton: Locator;
    sendMessage: Locator;
    crossButton: Locator;
    acceptAllButton: Locator;
    errorMsg: Locator;
    time: string;
    toggleButton: Locator;
    priceBox: Locator;
    voultButton: Locator;
    selectImage: Locator;
    selectImageButton: Locator;
    selectImageBox: Locator;
    errorMsg1: Locator;
    media: Locator;
    medialocator: string;
    textOnImage: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.username = page.locator('input[name="email"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.crossButton = page.locator('[data-headlessui-state="open"] .stroke-md');
        this.messageButton = page.getByTestId('sidebar-messages');
        this.chatList = page.locator('.swiper-slide-active').nth(0);
        this.chat = page.getByTestId('input-message-text')
        this.sendButton = page.getByTestId('send-message-button');
        this.sendMessage = page.locator('div[aria-label="Delete"]').first();
        this.acceptAllButton = page.locator('button[type="button"] ').last();
        this.errorMsg = page.getByText("Message can't be empty");
        const currenttime = new Date();
        const hours  = currenttime.getHours();
        const minute = currenttime.getMinutes();
       //const second = currenttime.getSeconds();
        this.time = `${hours}:${minute}`
        this.toggleButton = page.locator('.slider').last();
        this.priceBox = page.locator('input[name="price"]');
        this.voultButton = page.getByTestId('vault-selector-button');
        this.selectImage = page.locator('div[class="selectable-item group"] .border-white').first();
        this.selectImageButton = page.getByText('Use selected media');
        this.selectImageBox = page.locator('.border-passes-primary');
        this.errorMsg1 = page.getByText('You cannot create a paid message without media');
        this.media = page.locator('.flex-none input');
        this.medialocator = 'button.h-full span'
        this.textOnImage = page.locator('.flex-col .justify-end ').first(); 

    }

   async loginPage()
    {
        await this.page.goto(messageSectionPage.baseurl);
        await this.username.clear();
        await this.username.fill(messageSectionPage.email);
        await this.password.clear();
        await this.password.fill(messageSectionPage.password);
        await this.loginButton.click();
        await this.messageButton.click();
        await this.crossButton.click();
        await this.chatList.click();
        await this.acceptAllButton.click();
 
        
        
    }
    async messagePage()
    {

        const chat1 = this.chat
        await chat1.click();
        await chat1.fill(' ');
        await this.sendButton.click();
        await chat1.clear();

        await expect(chat1).toBeEnabled();
        expect(await chat1.textContent()).toHaveLength(0)
        await expect(this.errorMsg).toBeVisible();
        await expect(this.errorMsg).toContainText(messageSectionPage.emptymsg);
        await expect(this.sendButton).toBeDisabled();
        await expect(this.sendButton).toHaveCSS("background-color",messageSectionPage.disableSendButtonBackgroundColor);
        
        //add the current time with text
        const textMsg = messageSectionPage.text + this.time.toString();
        await chat1.type(textMsg)
        await this.sendButton.click();
        await expect(this.sendMessage).toHaveText(textMsg);
       
    }
    async mediaPost()
    {
       
       
        await this.voultButton.click();
        await this.selectImage.click();
        //verify the image box is selected
        await expect(this.selectImageBox).toHaveCSS("background-color",messageSectionPage.selectImageBoxBackgroundColor);
        await this.selectImageButton.click();
        await this.sendButton.click();

    }
    async functionalityOfToggleButton()
    {
        await this.toggleButton.click();
        //check the toggle button is active or not
        expect(this.toggleButton.isChecked).toBeTruthy()
        //verify the price box is visible
        const priceBoxArea=  this.priceBox;
        await expect(priceBoxArea).toBeVisible();
        //pass the value in price box
        await priceBoxArea.type(messageSectionPage.dataFillIntoPriceBox);
    }
    async sendMsgWithoutSelectImage()
    {
        
         const textMsg = messageSectionPage.text + this.time.toString();
         const chat1 = this.chat
        await chat1.click();
        await chat1.type(textMsg)
        await this.sendButton.click();
        await expect(this.sendMessage).toHaveText(textMsg);
        await expect(this.errorMsg1).toContainText(messageSectionPage.getTextwithoutSendTheMedia);
        
    }
    async mediaSelectFromLocalFile()
    {
        //provide the path
        const pathFile = path.join(__dirname, '../uploadFile/image1.jpg');
        //remove the hidden class from the Dom
        await this.page.evaluate(()=> {

            const selector = document.querySelector(this.medialocator);
            if(selector)
            {
                selector.className=''
    
            }
       })
        //upload file
        await this.media.setInputFiles(pathFile);
        //add the current time with text
        const textMsg = messageSectionPage.text + this.time.toString();
        const chat1 = this.chat
        //await chat1.click();
        await chat1.type(textMsg)
        //send the msg
        await this.sendButton.click();
        await this.page.waitForLoadState("networkidle")

        await expect(this.textOnImage).toHaveText("$4, not paid yet")

       
    }

}
export default messagePage;