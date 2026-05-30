import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User logs in, navigates to Actuals, saves and confirms a past week', { tag: ["@e2e","@regression","@P0","@login-navigate-save-confirm"] }, async ({ page, loginPage, actualsPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await actualsPage.clickActuals();
  });
  await test.step('Click — Select a past week', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Click — Click Save and Confirm', async () => {
    await actualsPage.clickSaveAndConfirm();
  });
  await test.step('Assert text — Assert week status is Confirmed', async () => {
    await actualsPage.expectStatusText('Confirmed');
  });
  await test.step('Assert visible — Assert success notification is visible', async () => {
    await actualsPage.expectNoteConfirmedActualsFromVisible();
  });
});

test('Confirmed status persists after page refresh', { tag: ["@e2e","@regression","@P0","@status-persists-after-refresh"] }, async ({ page, loginPage, actualsPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await actualsPage.clickActuals();
  });
  await test.step('Click — Select a past week', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Click — Click Save and Confirm', async () => {
    await actualsPage.clickSaveAndConfirm();
  });
  await test.step('Wait — Wait for confirmation', async () => {
    await actualsPage.expectNoteConfirmedActualsFromVisible();
  });
  await test.step('Open — Refresh the page', async () => {
    await page.goto('/actuals');
  });
  await test.step('Click — Select the same past week', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Assert text — Assert week status is still Confirmed', async () => {
    await actualsPage.expectStatusText('Confirmed');
  });
});

test('User cannot confirm a future week', { tag: ["@e2e","@regression","@P1","@cannot-confirm-future-week"] }, async ({ page, loginPage, actualsPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await actualsPage.clickActuals();
  });
  await test.step('Click — Select a future week', async () => {
    await actualsPage.clickFuture();
  });
  await test.step('Assert disabled — Assert Save and Confirm button is disabled', async () => {
    await actualsPage.expectSaveAndConfirmDisabled();
  });
});

test('User sees success notification after confirming actuals', { tag: ["@e2e","@regression","@P1","@notification-on-confirm"] }, async ({ page, loginPage, actualsPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await actualsPage.clickActuals();
  });
  await test.step('Click — Select a past week', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Click — Click Save and Confirm', async () => {
    await actualsPage.clickSaveAndConfirm();
  });
  await test.step('Assert visible — Assert success notification is visible', async () => {
    await actualsPage.expectNoteConfirmedActualsFromVisible();
  });
});

test('Week status changes from In-Progress to Confirmed after confirmation', { tag: ["@e2e","@regression","@P0","@status-changes-inprogress-to-confirmed"] }, async ({ page, loginPage, actualsPage }) => {
  await test.step('Open — Open application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillOutlinedBasic(testData.auth.username);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillR1(testData.auth.password);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickSignIn();
  });
  await test.step('Click — Navigate to Actuals page', async () => {
    await actualsPage.clickActuals();
  });
  await test.step('Click — Select a past week', async () => {
    await actualsPage.clickPrevWeek();
  });
  await test.step('Assert text — Assert week status is In-Progress', async () => {
    await actualsPage.expectStatusText('In-Progress');
  });
  await test.step('Click — Click Save and Confirm', async () => {
    await actualsPage.clickSaveAndConfirm();
  });
  await test.step('Assert text — Assert week status is Confirmed', async () => {
    await actualsPage.expectStatusText('Confirmed');
  });
});
