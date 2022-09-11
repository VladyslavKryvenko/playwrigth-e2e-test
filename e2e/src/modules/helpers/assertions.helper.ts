import {expect, Page} from "@playwright/test";
import {HomePage} from "../pages/home.page";

let homePage: HomePage

export class AssertionsHelper {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        homePage = new HomePage(page);
    }

    async checkAlert(message: string) {
        await expect(this.page.locator(homePage.ALERT)).toContainText(message);
    }

    async checkScreenshot() {
        await expect(this.page).toHaveScreenshot('Login-Login-with-valid-data-1-Google-Chrome-linux.png')
    }
}