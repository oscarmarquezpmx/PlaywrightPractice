import { test, expect } from '@playwright/test';
import { OpenCartPage } from '../pages/opencart.home.page';
import { RegisterPage } from '../pages/opencart.register.page';

test.describe(' Registration Test', () => {
  let openCartPage: OpenCartPage;
  let registrationPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    openCartPage = new OpenCartPage(page);


    await page.goto("https://demo.opencart.com");

    await openCartPage.getStarted();
    await openCartPage.getDesktopsLink.click();
    await expect(openCartPage.getHomePageHeaderImage).toBeVisible();

  });


  test('open registration form and enter the required details', async ({ page }) => {
    registrationPage = new RegisterPage(page);

    await openCartPage.openRegistration();
    await registrationPage.fillOutRegistration()
  });

});
