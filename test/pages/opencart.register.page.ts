import { expect, Locator, Page } from '@playwright/test';
import { OpenCartPage } from '../pages/opencart.home.page';
import { RandomValues } from '../utilities/generate.random.values';


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

  async fillOutRegistration() {
    //this.openCartPage = new OpenCartPage(page);
    let name: string;
    let password = (Math.random() + 1).toString(36).substring(7);

    //await this.openCartPage.getStarted();
    //await expect(this.openCartPage.getDesktopsLink).toBeVisible();
    //await this.openCartPage.openRegistration();

    let randomValues: RandomValues;
    randomValues = new RandomValues();
    name = await randomValues.generateName("male") ?? "";


    await this.getFirstNameTextBox.type(name.split(" ")[0]);
    await this.getLastNameTextBox.type(name.split(" ")[1]);
    await this.getEmailTextBox.type(name.replace(" ", "") + "\@gmail.com");
    await this.getPasswordTextBox.type(password);
    await this.getSubscribeRadio.click();
    await this.getPrivacyCheckbox.check();
    await this.getContinueButton.click();
  }
}