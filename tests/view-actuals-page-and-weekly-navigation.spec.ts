import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User opens calendar date picker and navigates to a specific week', { tag: ["@e2e","@regression","@P1","@calendar-date-picker-navigation"] }, async ({ page, loginPage, dashboardPage, actualsPage }) => {
  await test.step('Open — Open login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth?.username ?? 'auto.tester@yopmail.com');
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth?.password ?? 'Test@1234');
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await dashboardPage.clickActuals();
  });
  await test.step('Click — Open calendar date picker', async () => {
    await actualsPage.clickButton();
  });
  await test.step('Click — Select week start date', async () => {
    await actualsPage.clickButton2();
  });
  await test.step('Assert visible — Verify actuals for selected week are displayed', async () => {
    await actualsPage.expectActualsVisible();
  });
  await test.step('Assert text — Verify URL contains selected week\'s start date', async () => {
    await expect(page).toHaveURL(/2026-04-06/);
  });
});

test('User returns to current week using Return to Current Week button', { tag: ["@e2e","@regression","@P1","@return-to-current-week"] }, async ({ page, loginPage, dashboardPage, actualsPage }) => {
  await test.step('Open — Open login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth?.username ?? 'auto.tester@yopmail.com');
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth?.password ?? 'Test@1234');
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await dashboardPage.clickActuals();
  });
  await test.step('Click — Click Previous Week button', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Click — Click Return to Current Week button', async () => {
    await actualsPage.clickCurrent();
  });
  await test.step('Assert visible — Verify current week\'s actuals are displayed', async () => {
    await actualsPage.expectActualsVisible();
  });
  await test.step('Assert text — Verify URL contains current week\'s start date', async () => {
    await expect(page).toHaveURL(/current/);
  });
});
