import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class LoginPage {
  private static readonly L = {
    welcome: { strategy: 'text' as const, value: 'Welcome', actionKind: 'text' as const },
    pleaseEnterYourDetails: { strategy: 'text' as const, value: 'Please enter your details', actionKind: 'text' as const },
    outlinedBasic: { strategy: 'css' as const, value: '#outlined-basic', actionKind: 'textbox' as const },
    r1: { strategy: 'css' as const, value: '#_r_1_', actionKind: 'textbox' as const },
    forgotPassword: { strategy: 'role' as const, value: 'Forgot Password?', role: 'link', actionKind: 'link' as const },
    signIn: { strategy: 'role' as const, value: 'Sign in', role: 'button', actionKind: 'button' as const },
    oR: { strategy: 'text' as const, value: 'OR', actionKind: 'text' as const },
    oR2: { strategy: 'text' as const, value: 'OR', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextWelcome(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.welcome));
  }

  async expectWelcomeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.welcome), expected, timeoutMs);
  }

  async expectWelcomeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.welcome), substring, timeoutMs);
  }

  async scrollWelcomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.welcome));
  }

  async getInnerTextPleaseEnterYourDetails(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails));
  }

  async expectPleaseEnterYourDetailsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), expected, timeoutMs);
  }

  async expectPleaseEnterYourDetailsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), substring, timeoutMs);
  }

  async scrollPleaseEnterYourDetailsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails));
  }

  async fillOutlinedBasic(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.outlinedBasic), value);
  }

  async clearOutlinedBasic(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.outlinedBasic));
  }

  async typeTextOutlinedBasic(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.outlinedBasic), value);
  }

  async expectOutlinedBasicVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.outlinedBasic), expected, timeoutMs);
  }

  async expectOutlinedBasicFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async scrollOutlinedBasicIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.outlinedBasic));
  }

  async fillR1(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.r1), value);
  }

  async clearR1(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.r1));
  }

  async typeTextR1(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.r1), value);
  }

  async expectR1Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Value(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.r1), expected, timeoutMs);
  }

  async expectR1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async scrollR1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.r1));
  }

  async clickForgotPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async doubleClickForgotPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async expectForgotPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.forgotPassword), expected, timeoutMs);
  }

  async expectForgotPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.forgotPassword), substring, timeoutMs);
  }

  async scrollForgotPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async clickSignIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async doubleClickSignIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.signIn), expected, timeoutMs);
  }

  async expectSignInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.signIn), substring, timeoutMs);
  }

  async scrollSignInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async getInnerTextOR(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.oR));
  }

  async expectORVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.oR), expected, timeoutMs);
  }

  async expectORContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.oR), substring, timeoutMs);
  }

  async scrollORIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.oR));
  }

  async getInnerTextOR2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.oR2));
  }

  async expectOR2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.oR2), expected, timeoutMs);
  }

  async expectOR2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.oR2), substring, timeoutMs);
  }

  async scrollOR2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.oR2));
  }


  async clickWelcome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.welcome));
  }

  async doubleClickWelcome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.welcome));
  }

  async longPressWelcome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.welcome));
  }

  async expectWelcomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.welcome), value, timeoutMs);
  }

  async expectWelcomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.welcome), timeoutMs);
  }

  async expectWelcomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.welcome), count, timeoutMs);
  }

  async clickPleaseEnterYourDetails(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails));
  }

  async doubleClickPleaseEnterYourDetails(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails));
  }

  async longPressPleaseEnterYourDetails(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails));
  }

  async expectPleaseEnterYourDetailsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), value, timeoutMs);
  }

  async expectPleaseEnterYourDetailsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), timeoutMs);
  }

  async expectPleaseEnterYourDetailsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.pleaseEnterYourDetails), count, timeoutMs);
  }

  async expectOutlinedBasicText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.outlinedBasic), expected, timeoutMs);
  }

  async expectOutlinedBasicContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.outlinedBasic), substring, timeoutMs);
  }

  async expectOutlinedBasicChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.outlinedBasic), timeoutMs);
  }

  async expectOutlinedBasicCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.outlinedBasic), count, timeoutMs);
  }

  async expectR1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.r1), expected, timeoutMs);
  }

  async expectR1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.r1), substring, timeoutMs);
  }

  async expectR1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.r1), timeoutMs);
  }

  async expectR1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.r1), count, timeoutMs);
  }

  async longPressForgotPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.forgotPassword));
  }

  async expectForgotPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.forgotPassword), value, timeoutMs);
  }

  async expectForgotPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.forgotPassword), timeoutMs);
  }

  async expectForgotPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.forgotPassword), count, timeoutMs);
  }

  async longPressSignIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.signIn));
  }

  async expectSignInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.signIn), value, timeoutMs);
  }

  async expectSignInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.signIn), timeoutMs);
  }

  async expectSignInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.signIn), count, timeoutMs);
  }

  async clickOR(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.oR));
  }

  async doubleClickOR(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.oR));
  }

  async longPressOR(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.oR));
  }

  async expectORValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.oR), value, timeoutMs);
  }

  async expectOREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.oR), timeoutMs);
  }

  async expectORCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.oR), count, timeoutMs);
  }

  async clickOR2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.oR2));
  }

  async doubleClickOR2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.oR2));
  }

  async longPressOR2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.oR2));
  }

  async expectOR2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.oR2), value, timeoutMs);
  }

  async expectOR2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.oR2), timeoutMs);
  }

  async expectOR2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.oR2), count, timeoutMs);
  }

}
