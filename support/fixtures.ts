import { test as base, expect } from "@playwright/test";
import { ActualsPage } from "../pageobjects/ActualsPage";
import { DashboardPage } from "../pageobjects/DashboardPage";
import { LoginPage } from "../pageobjects/LoginPage";

type AppFixtures = {
  actualsPage: ActualsPage;
  dashboardPage: DashboardPage;
  loginPage: LoginPage;
};

export const test = base.extend<AppFixtures>({
  actualsPage: async ({ page }, use) => {
    await use(new ActualsPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };
