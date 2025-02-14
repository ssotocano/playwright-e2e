import { Page, test, expect } from "@playwright/test";
import * as allure from "allure-js-commons";

export class TestInfo{
    
    info = {
        name: allure.displayName("Test Authentication"),
        owner:  allure.owner("John Doe"),
        tags: allure.tags("Web interface", "Authentication"),
        severity: allure.severity("critical"),
        epic: allure.epic("Web interface"),
        feature: allure.feature("Essential features"),
        story: allure.story("Authentication"),
        issue: allure.issue("JIRA-2", "https://example.org"),
    }
};