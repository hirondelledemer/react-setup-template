import { test, expect } from '@playwright/test';
import { AppDriver } from './utils/driver';
import AxeBuilder from '@axe-core/playwright';
import { urls } from './utils/data';

test.describe('Home', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    const homePage = new AppDriver(page);

    await homePage.goto(urls.BASE);

    await expect(homePage.homeTitle).toBeVisible();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
