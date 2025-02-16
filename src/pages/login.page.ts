import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{

    page: Page;
    baseUrl: string;
    readonly gettingStartedHeader: Locator;
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly forgotPassword: Locator;
    readonly rememberMe: Locator;
    readonly btnSignIn: Locator;
    readonly alertLoginFailed: Locator;

    constructor(page:Page){
        this.page = page;
        this.baseUrl = 'https://int.appgile.com/middle/account/login';
        this.gettingStartedHeader = page.locator('h2', {hasText: 'Sign In'});
        this.txtUsername = page.getByRole('textbox', {name: 'username'});
        this.txtPassword = page.getByRole('textbox', {name: 'password'});
        this.forgotPassword = page.locator('a', {hasText: 'Forgot password?'});
        this.rememberMe = page.getByRole('checkbox', {name: 'rememberMe'});
        this.btnSignIn = page.locator('button', {hasText: ' Sign in '});
        this.alertLoginFailed = page.locator('text="Failed to sign in!"');
    }

    async sleep(ms: number){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async openPage(){
        await this.page.goto(this.baseUrl);
    }

    async validateLogin(){
        await this.gettingStartedHeader.isVisible();
        await expect(this.page).toHaveTitle(/Sign in/);
    }

    async inputLoginData(username: string, password: string){
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
    }

    async validateForgotPassword(){

    }

    async loginAction(){
        await expect(this.btnSignIn).toBeEnabled();
        await this.sleep(2000);
        await this.btnSignIn.click();
    }

    async alertDanger(){
        await expect(this.alertLoginFailed).toBeVisible();
    }

    
    
}