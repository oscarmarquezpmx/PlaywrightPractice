import { test, expect } from '@playwright/test';
import { OpenCartPage } from '../pages/opencart.home.page';
import { RegisterPage } from '../pages/opencart.register.page';
import {RandomValues} from '../utilities/generate.random.values';

test.describe( ' Registration Test',() => {
let openCartPage : OpenCartPage;
let registrationPage : RegisterPage;

test.beforeEach(async ({ page }) => { 
      openCartPage = new OpenCartPage(page);
      registrationPage = new RegisterPage(page);

      await page.goto("https://demo.opencart.com");
      //await openCartPage.goto();

      await openCartPage.getStarted();
      await openCartPage.getDesktopsLink.click();
      await expect(openCartPage.getHomePageHeaderImage).toBeVisible();

    });
 

    test('open registration form and enter the required details', async ({ page }) => {
      let name :string;  
      let password = (Math.random() + 1).toString(36).substring(7);

      await openCartPage.getStarted();
      await expect(openCartPage.getDesktopsLink).toBeVisible();
      await openCartPage.openRegistration();  
         
      let randomValues:RandomValues;
      randomValues = new RandomValues();
      name = await randomValues.generateName("male") ?? "";
      

      await registrationPage.getFirstNameTextBox.type(name.split(" ")[0]);
      await registrationPage.getLastNameTextBox.type(name.split(" ")[1]);
      await registrationPage.getEmailTextBox.type(name.replace(" ","") + "\@gmail.com");
      await registrationPage.getPasswordTextBox.type(password);
      await registrationPage.getSubscribeRadio.click();
      await registrationPage.getPrivacyCheckbox.check();
      await registrationPage.getContinueButton.click();
    });

  });
