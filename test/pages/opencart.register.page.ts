import { expect, Locator, Page } from '@playwright/test';


export class RegisterPage {
  
    readonly getRegisterAccountText: Locator;
    readonly getYourPersonalDetailsText: Locator;
    readonly getFirstNameTextBox: Locator;
    readonly getLastNameTextBox: Locator;
    readonly getEmailTextBox: Locator;
    readonly getPasswordTextBox: Locator;
    readonly getSubscribeRadio: Locator;
    readonly getPrivacyCheckbox: Locator;
    readonly getContinueButton: Locator;
  
    constructor(page: Page) {
  
      this.getRegisterAccountText = page.getByText("Register Account");
      this.getYourPersonalDetailsText = page.getByText("Your Personal Details");
      this.getFirstNameTextBox = page.locator("id=input-firstname");
      this.getLastNameTextBox = page.locator("id=input-lastname");
      this.getEmailTextBox = page.locator("id=input-email");
      this.getPasswordTextBox = page.locator("id=input-password");
      this.getSubscribeRadio = page.locator("id=input-newsletter-yes");
      this.getPrivacyCheckbox = page.locator('input[name="agree"]');
      this.getContinueButton = page.getByRole('button', { name: 'Continue' });


    }
}