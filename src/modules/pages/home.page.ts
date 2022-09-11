// playwright-dev-page.ts
import {Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    // readonly loginBtn: Locator;
    // readonly userName: Locator;
    // readonly loginModule: Locator;
    // readonly password: Locator;
    // readonly alert: Locator;
    // readonly sd : Locator;
    // readonly tocList: Locator;
    //
    constructor(page: Page) {
        this.page = page;
        //     this.loginModule = page.locator('[id*=login-modal]');
        //     this.loginBtn = page.locator('[id=login]',{ hasText: 'Login' });
        //     this.userName = this.loginModule.locator('[id*=username-modal]');
        //     this.password = this.loginModule.locator('[name=password]');
        //     this.password = this.loginModule.locator('contains(Log in)');
        //     this.alert = this.loginModule.locator('[class*= alert]',{hasText:"Login successful"});
    }

    private LOGIN_BUTTON = '[id=login]'
    private USER_NAME = '[id*=username-modal]'
    private PASSWORD = '[name=password]'
    readonly ALERT = '[class*= alert]'
    readonly REGISTER_BUTTON = '[data-target*="register-modal"]'
    readonly REGISTER_USER_NAME = '[id*=register-username]'
    readonly FIRST_NAME = '[name*=first-name]'
    readonly LAST_NAME = '[name*=last-name]'
    readonly EMAIL = '[name*=email]'
    readonly REGISTER_PASSWORD = '[id*=register-password]'
    readonly REGISTER_BUTTON_MODULE = '[onclick*=register]'

    async goto() {
        await this.page.goto('/');
    }

    async login(userName: string, password: string) {
        await this.page.click(this.LOGIN_BUTTON);
        await this.page.fill(this.USER_NAME, userName);
        await this.page.fill(this.PASSWORD, password);
        await this.page.click('"Log in"');
    }

    async getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    async register(userName: string, firstName: string, lastName: string, email: string, password: string) {
        await this.page.click(this.REGISTER_BUTTON);
        await this.page.fill(this.REGISTER_USER_NAME, await this.getRandomInt(100000) + userName);
        await this.page.fill(this.FIRST_NAME, firstName);
        await this.page.fill(this.LAST_NAME, lastName);
        await this.page.fill(this.EMAIL, await this.getRandomInt(3) + email);
        await this.page.fill(this.REGISTER_PASSWORD, password);
        await this.page.click(this.REGISTER_BUTTON_MODULE);
    }
}