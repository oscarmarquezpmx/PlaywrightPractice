import { expect, Locator, Page } from '@playwright/test';

export class OpenCartPage {
  readonly page: Page;
  readonly getHomePageHeaderImage: Locator;
  readonly getDesktopsLink: Locator;
  readonly getLaptopsAndNotebooksLink: Locator;
  readonly getComponentsLink: Locator;
  readonly getTabletsLink: Locator;
  readonly getSoftwareLink: Locator;
  readonly getPhonesAndPDAsLink: Locator;
  readonly getCamerasLink: Locator;
  readonly getMP3PlayersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this,this.getHomePageHeaderImage = page.getByAltText("Your Store");
    this.getDesktopsLink = page.getByRole('link', { name: 'Desktops' });
    this.getLaptopsAndNotebooksLink = page.getByRole('link', { name: 'Laptops & Notebooks' });
    this.getComponentsLink = page.getByRole('link', { name: 'Components' });
    this.getTabletsLink = page.getByRole('link', { name: 'Tablets' });
    this.getSoftwareLink = page.getByRole('link', { name: 'Software' });
    this.getPhonesAndPDAsLink = page.getByRole('link', { name: 'Phones & PDAs' })
    this.getCamerasLink = page.getByRole('link', { name: 'Cameras' });
    this.getMP3PlayersLink = page.getByRole('link', { name: 'MP3 Players' })
  }

  async goto() {
    await this.page.goto('https://demo.opencart.com/');
  }

  async getStarted() {
    //await this.getStartedLink.first().click();
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
 /* async pageObjectModel() {
    await this.getStarted();
   // await this.pomLink.click();
  }  */   
}


