import test, { Page, Locator } from "@playwright/test";
import * as allure from 'allure-js-commons';
import { ContentType } from 'allure-js-commons';

export class CommonTools{

    page: Page;

    constructor(page:Page){
        this.page = page;

    }    

    async captureEvidence(testDir: string, testName: string){
        await this.page.screenshot({path:'src/results/snapshots/' + testDir + '/' + testName + '.png', fullPage: true});
        await allure.attachmentPath(testName,'src/results/snapshots/' + testDir + '/' + testName + '.png', {
            contentType: ContentType.PNG,
            fileExtension: "png",
          });
    }
}