import { expect, Locator, Page } from '@playwright/test';


export class OpenCartPage {

  readonly getHomePageHeaderImage: Locator;
  readonly getDesktopsLink: Locator;
  readonly getLaptopsAndNotebooksLink: Locator;
  readonly getComponentsLink: Locator;
  readonly getTabletsLink: Locator;
  readonly getSoftwareLink: Locator;
  readonly getPhonesAndPDAsLink: Locator;
  readonly getCamerasLink: Locator;
  readonly getMP3PlayersLink: Locator;
  readonly getMyAccount: Locator;
  readonly getRegistrationMenu: Locator;

  constructor(page: Page) {

    this.getHomePageHeaderImage = page.getByAltText("Your Store");
    this.getDesktopsLink = page.getByRole('link', { name: 'Desktops' });
    this.getLaptopsAndNotebooksLink = page.getByRole('link', { name: 'Laptops & Notebooks' });
    this.getComponentsLink = page.getByRole('link', { name: 'Components' });
    this.getTabletsLink = page.getByRole('link', { name: 'Tablets' });
    this.getSoftwareLink = page.getByRole('link', { name: 'Software' });
    this.getPhonesAndPDAsLink = page.getByRole('link', { name: 'Phones & PDAs' })
    this.getCamerasLink = page.getByRole('link', { name: 'Cameras' });
    this.getMP3PlayersLink = page.getByRole('link', { name: 'MP3 Players' });
    this.getMyAccount = page.locator("xpath =//span[contains(.,'My Account')]");
    this.getRegistrationMenu = page.locator("xpath=//a[contains(.,'Register')]");
  }

 

  async getStarted() {
    await expect(this.getHomePageHeaderImage).toBeVisible();
  }

  async selectAllNavigationBarOptions() {
    await this.getDesktopsLink.click(); 
    await this.getLaptopsAndNotebooksLink.click();
    await this.getComponentsLink.click();
    await this.getTabletsLink.click();
    await this.getSoftwareLink.click();
    await this.getPhonesAndPDAsLink.click();
    await this.getCamerasLink.click();
    await this.getMP3PlayersLink.click();
  }

  async openRegistration() {
    await this.getMyAccount.click();
    await this.getRegistrationMenu.click();
  }
}


