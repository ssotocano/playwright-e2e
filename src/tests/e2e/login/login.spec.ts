import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { LoginPage } from '../../../pages/login.page';
import { CommonTools } from '../../../pages/commons.page';
import TestInformation from '../../../utils/testsInformation';

const testInfo = new TestInformation();

test.describe('Feature: Login Page', () => {    
    test('Validate Login Successfull', async ({ page }) =>{

        await allure.displayName(testInfo.testName);
        await allure.owner("John Doe");
        await allure.tags("Web interface", "Authentication");
        await allure.severity("critical");

        const loginPage = new LoginPage(page);
        const commonTools = new CommonTools(page);

        await allure.step('Open the Middle', async () => {
            await loginPage.openPage();
        });

        await allure.step('The login data can be filled and click in Sign In button', async() => {
            await  loginPage.inputLoginData('test.automation', 'Automation123456789*');
            await loginPage.loginAction();
        })

        await allure.step('Validation Login Successfully', async() => {
            await loginPage.sleep(5000);
            await expect(page).toHaveTitle('Plugins')            
        })

        await commonTools.captureEvidence('login','login-Successfull');
        await page.close();        
    });

    test('Validate Login Failed', async ({ page }) =>{

        await allure.displayName("Test Authentication");
        await allure.owner("John Doe");
        await allure.tags("Web interface", "Authentication");
        await allure.severity("critical");

        const loginPage = new LoginPage(page);
        const commonTools = new CommonTools(page);

        await allure.step('Open the Middle', async () => {
            await loginPage.openPage();
        });

        await allure.step('The login data can be filled and click in Sign In button', async() => {
            await  loginPage.inputLoginData('test.automation', 'Automation*');
            await loginPage.loginAction();
        })

        await allure.step('Validation Login Failed', async() => {
            await loginPage.sleep(10000);
            await loginPage.alertDanger();         
        })

        await commonTools.captureEvidence('login','login-Failed');
        await page.close();        
    });
});