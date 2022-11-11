import { test, expect } from '@playwright/test';
import { OpenCartPage } from './opencart.home.page';


test('initial test load page and validate the logo in the header', async ({ page }) => {
  const openCartPage = new OpenCartPage(page);
  await openCartPage.goto();
  await openCartPage.getStarted();
  await openCartPage.getDesktopsLink.click();
  await expect(openCartPage.getHomePageHeaderImage).toBeVisible();

})

test('should display the navigation bar with all the links', async ({ page }) => {
  const openCartPage = new OpenCartPage(page);
  await openCartPage.goto();
  await openCartPage.getStarted();
  await expect(openCartPage.getDesktopsLink).toBeVisible();
  await expect(openCartPage.getLaptopsAndNotebooksLink).toBeVisible();
  await expect(openCartPage.getComponentsLink).toBeVisible();
  await expect(openCartPage.getTabletsLink).toBeVisible();
  await expect(openCartPage.getSoftwareLink).toBeVisible();
  await expect(openCartPage.getPhonesAndPDAsLink).toBeVisible();
  await expect(openCartPage.getCamerasLink).toBeVisible();
  await expect(openCartPage.getMP3PlayersLink).toBeVisible();
});

test('should be able to click on each navigation bar menu option', async ({ page }) => {
  const openCartPage = new OpenCartPage(page);
  await openCartPage.goto();
  await openCartPage.getStarted();
  await openCartPage.selectAllNavigationBarOptions();
});