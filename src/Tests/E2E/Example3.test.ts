// E2E testing using Selenium and WebDriver

import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

(async function example() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    try {
        await driver.get('http://localhost:3000/users'); // Your app URL

        await driver.findElement(By.css('[data-cy=create-user]')).click();
        await driver.findElement(By.css('[data-cy=user-name]')).sendKeys('John Doe');
        await driver.findElement(By.css('[data-cy=user-email]')).sendKeys('john@example.com');
        await driver.findElement(By.css('[data-cy=submit]')).click();

        let userList = await driver.findElement(By.css('[data-cy=user-list]')).getText();
        if (userList.includes('John Doe')) {
        console.log('Test passed!');
        } else {
        console.log('Test failed!');
        }
    } finally {
        await driver.quit();
    }
})();
