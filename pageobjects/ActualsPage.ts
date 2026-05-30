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

export class ActualsPage {
  private static readonly L = {
    dashboard: { strategy: 'label' as const, value: 'Dashboard', actionKind: 'link' as const },
    allocation: { strategy: 'label' as const, value: 'Allocation', actionKind: 'link' as const },
    epics: { strategy: 'label' as const, value: 'Epics', actionKind: 'link' as const },
    people: { strategy: 'label' as const, value: 'People', actionKind: 'link' as const },
    actuals: { strategy: 'label' as const, value: 'Actuals', actionKind: 'link' as const },
    reports: { strategy: 'label' as const, value: 'Reports', actionKind: 'link' as const },
    r2o: { strategy: 'css' as const, value: '#_r_2o_', actionKind: 'textbox' as const },
    open: { strategy: 'label' as const, value: 'Open', actionKind: 'button' as const },
    title: { strategy: 'text' as const, value: 'Title:', actionKind: 'text' as const },
    team: { strategy: 'text' as const, value: 'Team:', actionKind: 'text' as const },
    week21: { strategy: 'text' as const, value: 'Week 21', actionKind: 'text' as const },
    allocation2: { strategy: 'text' as const, value: 'Allocation:', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '-- / --', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '-- /', actionKind: 'text' as const },
    plannedActual: { strategy: 'text' as const, value: 'Planned / Actual', actionKind: 'text' as const },
    current: { strategy: 'text' as const, value: 'Current', actionKind: 'text' as const },
    week22: { strategy: 'text' as const, value: 'Week 22', actionKind: 'text' as const },
    allocation3: { strategy: 'text' as const, value: 'Allocation:', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '-- / --', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '-- /', actionKind: 'text' as const },
    plannedActual2: { strategy: 'text' as const, value: 'Planned / Actual', actionKind: 'text' as const },
    future: { strategy: 'text' as const, value: 'Future', actionKind: 'text' as const },
    week23: { strategy: 'text' as const, value: 'Week 23', actionKind: 'text' as const },
    allocation4: { strategy: 'text' as const, value: 'Allocation:', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '-- / --', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '-- /', actionKind: 'text' as const },
    plannedActual3: { strategy: 'text' as const, value: 'Planned / Actual', actionKind: 'text' as const },
    statusNotStarted: { strategy: 'text' as const, value: 'Status: Not Started', actionKind: 'text' as const },
    notStarted: { strategy: 'text' as const, value: 'Not Started', actionKind: 'text' as const },
    r2f: { strategy: 'css' as const, value: '#_r_2f_', actionKind: 'textbox' as const },
    copyPlanToActuals: { strategy: 'role' as const, value: 'Copy Plan to Actuals', role: 'link', actionKind: 'link' as const },
    status: { strategy: 'text' as const, value: 'Status', actionKind: 'text' as const },
    addUnplannedActuals: { strategy: 'role' as const, value: '+ Add Unplanned Actuals', role: 'button', actionKind: 'button' as const },
    allocation10: { strategy: 'text' as const, value: 'Allocation • 1.0 = full-time (40 hrs) • min 0.05', actionKind: 'text' as const },
    hours: { strategy: 'text' as const, value: 'Hours', actionKind: 'text' as const },
    fractions: { strategy: 'text' as const, value: 'Fractions', actionKind: 'text' as const },
    prevWeek: { strategy: 'role' as const, value: 'Prev Week', role: 'button', actionKind: 'button' as const },
    save: { strategy: 'role' as const, value: 'Save', role: 'button', actionKind: 'button' as const },
    saveAndConfirm: { strategy: 'role' as const, value: 'Save and Confirm', role: 'button', actionKind: 'button' as const },
    nextWeek: { strategy: 'role' as const, value: 'Next Week', role: 'button', actionKind: 'button' as const },
    noteConfirmedActualsFrom: { strategy: 'text' as const, value: 'Note: Confirmed Actuals from previous period', actionKind: 'text' as const },
    note: { strategy: 'text' as const, value: 'Note', actionKind: 'text' as const },
    previousMonth: { strategy: 'label' as const, value: 'Previous month', actionKind: 'button' as const },
    nextMonth: { strategy: 'label' as const, value: 'Next month', actionKind: 'button' as const },
    button: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    button2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    button3: { strategy: 'role' as const, value: '3', role: 'button', actionKind: 'button' as const },
    button4: { strategy: 'role' as const, value: '4', role: 'button', actionKind: 'button' as const },
    button5: { strategy: 'role' as const, value: '5', role: 'button', actionKind: 'button' as const },
    button6: { strategy: 'role' as const, value: '6', role: 'button', actionKind: 'button' as const },
    button7: { strategy: 'role' as const, value: '7', role: 'button', actionKind: 'button' as const },
    button8: { strategy: 'role' as const, value: '8', role: 'button', actionKind: 'button' as const },
    button9: { strategy: 'role' as const, value: '9', role: 'button', actionKind: 'button' as const },
    button10: { strategy: 'role' as const, value: '10', role: 'button', actionKind: 'button' as const },
    button11: { strategy: 'role' as const, value: '11', role: 'button', actionKind: 'button' as const },
    button12: { strategy: 'role' as const, value: '12', role: 'button', actionKind: 'button' as const },
    button13: { strategy: 'role' as const, value: '13', role: 'button', actionKind: 'button' as const },
    button14: { strategy: 'role' as const, value: '14', role: 'button', actionKind: 'button' as const },
    button15: { strategy: 'role' as const, value: '15', role: 'button', actionKind: 'button' as const },
    button16: { strategy: 'role' as const, value: '16', role: 'button', actionKind: 'button' as const },
    button17: { strategy: 'role' as const, value: '17', role: 'button', actionKind: 'button' as const },
    button18: { strategy: 'role' as const, value: '18', role: 'button', actionKind: 'button' as const },
    button19: { strategy: 'role' as const, value: '19', role: 'button', actionKind: 'button' as const },
    button20: { strategy: 'role' as const, value: '20', role: 'button', actionKind: 'button' as const },
    button21: { strategy: 'role' as const, value: '21', role: 'button', actionKind: 'button' as const },
    button22: { strategy: 'role' as const, value: '22', role: 'button', actionKind: 'button' as const },
    button23: { strategy: 'role' as const, value: '23', role: 'button', actionKind: 'button' as const },
    button24: { strategy: 'role' as const, value: '24', role: 'button', actionKind: 'button' as const },
    button25: { strategy: 'role' as const, value: '25', role: 'button', actionKind: 'button' as const },
    button26: { strategy: 'role' as const, value: '26', role: 'button', actionKind: 'button' as const },
    button27: { strategy: 'role' as const, value: '27', role: 'button', actionKind: 'button' as const },
    button28: { strategy: 'role' as const, value: '28', role: 'button', actionKind: 'button' as const },
    button29: { strategy: 'role' as const, value: '29', role: 'button', actionKind: 'button' as const },
    button30: { strategy: 'role' as const, value: '30', role: 'button', actionKind: 'button' as const },
    button31: { strategy: 'role' as const, value: '31', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.dashboard));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.dashboard), substring, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.dashboard));
  }

  async clickAllocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.allocation));
  }

  async doubleClickAllocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.allocation));
  }

  async expectAllocationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.allocation), expected, timeoutMs);
  }

  async expectAllocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.allocation), substring, timeoutMs);
  }

  async scrollAllocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.allocation));
  }

  async clickEpics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.epics));
  }

  async doubleClickEpics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.epics));
  }

  async expectEpicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.epics), expected, timeoutMs);
  }

  async expectEpicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.epics), substring, timeoutMs);
  }

  async scrollEpicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.epics));
  }

  async clickPeople(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.people));
  }

  async doubleClickPeople(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.people));
  }

  async expectPeopleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.people), expected, timeoutMs);
  }

  async expectPeopleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.people), substring, timeoutMs);
  }

  async scrollPeopleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.people));
  }

  async clickActuals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.actuals));
  }

  async doubleClickActuals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.actuals));
  }

  async expectActualsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.actuals), expected, timeoutMs);
  }

  async expectActualsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.actuals), substring, timeoutMs);
  }

  async scrollActualsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.actuals));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.reports));
  }

  async fillR2o(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ActualsPage.L.r2o), value);
  }

  async clearR2o(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ActualsPage.L.r2o));
  }

  async typeTextR2o(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ActualsPage.L.r2o), value);
  }

  async expectR2oVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.r2o), expected, timeoutMs);
  }

  async expectR2oFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async scrollR2oIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.r2o));
  }

  async clickOpen(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.open));
  }

  async doubleClickOpen(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.open));
  }

  async expectOpenVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.open), expected, timeoutMs);
  }

  async expectOpenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.open), substring, timeoutMs);
  }

  async scrollOpenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.open));
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.title), substring, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.title));
  }

  async getInnerTextTeam(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.team));
  }

  async expectTeamVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.team), expected, timeoutMs);
  }

  async expectTeamContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.team), substring, timeoutMs);
  }

  async scrollTeamIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.team));
  }

  async getInnerTextWeek21(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.week21));
  }

  async expectWeek21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.week21), expected, timeoutMs);
  }

  async expectWeek21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.week21), substring, timeoutMs);
  }

  async scrollWeek21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.week21));
  }

  async getInnerTextAllocation2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.allocation2));
  }

  async expectAllocation2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.allocation2), expected, timeoutMs);
  }

  async expectAllocation2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.allocation2), substring, timeoutMs);
  }

  async scrollAllocation2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.allocation2));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element2));
  }

  async getInnerTextPlannedActual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual));
  }

  async expectPlannedActualVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.plannedActual), expected, timeoutMs);
  }

  async expectPlannedActualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.plannedActual), substring, timeoutMs);
  }

  async scrollPlannedActualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual));
  }

  async getInnerTextCurrent(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.current));
  }

  async expectCurrentVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.current), expected, timeoutMs);
  }

  async expectCurrentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.current), substring, timeoutMs);
  }

  async scrollCurrentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.current));
  }

  async getInnerTextWeek22(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.week22));
  }

  async expectWeek22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.week22), expected, timeoutMs);
  }

  async expectWeek22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.week22), substring, timeoutMs);
  }

  async scrollWeek22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.week22));
  }

  async getInnerTextAllocation3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.allocation3));
  }

  async expectAllocation3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.allocation3), expected, timeoutMs);
  }

  async expectAllocation3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.allocation3), substring, timeoutMs);
  }

  async scrollAllocation3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.allocation3));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element3));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element4));
  }

  async getInnerTextPlannedActual2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual2));
  }

  async expectPlannedActual2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.plannedActual2), expected, timeoutMs);
  }

  async expectPlannedActual2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.plannedActual2), substring, timeoutMs);
  }

  async scrollPlannedActual2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual2));
  }

  async getInnerTextFuture(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.future));
  }

  async expectFutureVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.future), expected, timeoutMs);
  }

  async expectFutureContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.future), substring, timeoutMs);
  }

  async scrollFutureIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.future));
  }

  async getInnerTextWeek23(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.week23));
  }

  async expectWeek23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.week23), expected, timeoutMs);
  }

  async expectWeek23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.week23), substring, timeoutMs);
  }

  async scrollWeek23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.week23));
  }

  async getInnerTextAllocation4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.allocation4));
  }

  async expectAllocation4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.allocation4), expected, timeoutMs);
  }

  async expectAllocation4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.allocation4), substring, timeoutMs);
  }

  async scrollAllocation4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.allocation4));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element5));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.element6));
  }

  async getInnerTextPlannedActual3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual3));
  }

  async expectPlannedActual3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.plannedActual3), expected, timeoutMs);
  }

  async expectPlannedActual3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.plannedActual3), substring, timeoutMs);
  }

  async scrollPlannedActual3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual3));
  }

  async getInnerTextStatusNotStarted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.statusNotStarted));
  }

  async expectStatusNotStartedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.statusNotStarted), expected, timeoutMs);
  }

  async expectStatusNotStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.statusNotStarted), substring, timeoutMs);
  }

  async scrollStatusNotStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.statusNotStarted));
  }

  async getInnerTextNotStarted(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.notStarted));
  }

  async expectNotStartedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.notStarted), expected, timeoutMs);
  }

  async expectNotStartedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.notStarted), substring, timeoutMs);
  }

  async scrollNotStartedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.notStarted));
  }

  async fillR2f(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, ActualsPage.L.r2f), value);
  }

  async clearR2f(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, ActualsPage.L.r2f));
  }

  async typeTextR2f(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, ActualsPage.L.r2f), value);
  }

  async expectR2fVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.r2f), expected, timeoutMs);
  }

  async expectR2fFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async scrollR2fIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.r2f));
  }

  async clickCopyPlanToActuals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.copyPlanToActuals));
  }

  async doubleClickCopyPlanToActuals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.copyPlanToActuals));
  }

  async expectCopyPlanToActualsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.copyPlanToActuals), expected, timeoutMs);
  }

  async expectCopyPlanToActualsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.copyPlanToActuals), substring, timeoutMs);
  }

  async scrollCopyPlanToActualsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.copyPlanToActuals));
  }

  async getInnerTextStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.status));
  }

  async expectStatusVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.status), expected, timeoutMs);
  }

  async expectStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.status), substring, timeoutMs);
  }

  async scrollStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.status));
  }

  async clickAddUnplannedActuals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.addUnplannedActuals));
  }

  async doubleClickAddUnplannedActuals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.addUnplannedActuals));
  }

  async expectAddUnplannedActualsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.addUnplannedActuals), expected, timeoutMs);
  }

  async expectAddUnplannedActualsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.addUnplannedActuals), substring, timeoutMs);
  }

  async scrollAddUnplannedActualsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.addUnplannedActuals));
  }

  async getInnerTextAllocation10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.allocation10));
  }

  async expectAllocation10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.allocation10), expected, timeoutMs);
  }

  async expectAllocation10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.allocation10), substring, timeoutMs);
  }

  async scrollAllocation10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.allocation10));
  }

  async getInnerTextHours(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.hours));
  }

  async expectHoursVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.hours), expected, timeoutMs);
  }

  async expectHoursContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.hours), substring, timeoutMs);
  }

  async scrollHoursIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.hours));
  }

  async getInnerTextFractions(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.fractions));
  }

  async expectFractionsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.fractions), expected, timeoutMs);
  }

  async expectFractionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.fractions), substring, timeoutMs);
  }

  async scrollFractionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.fractions));
  }

  async clickPrevWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.prevWeek));
  }

  async doubleClickPrevWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.prevWeek));
  }

  async expectPrevWeekVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.prevWeek), expected, timeoutMs);
  }

  async expectPrevWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.prevWeek), substring, timeoutMs);
  }

  async scrollPrevWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.prevWeek));
  }

  async clickSave(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.save));
  }

  async doubleClickSave(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.save));
  }

  async expectSaveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.save), expected, timeoutMs);
  }

  async expectSaveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.save), substring, timeoutMs);
  }

  async scrollSaveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.save));
  }

  async clickSaveAndConfirm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.saveAndConfirm));
  }

  async doubleClickSaveAndConfirm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.saveAndConfirm));
  }

  async expectSaveAndConfirmVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.saveAndConfirm), expected, timeoutMs);
  }

  async expectSaveAndConfirmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.saveAndConfirm), substring, timeoutMs);
  }

  async scrollSaveAndConfirmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.saveAndConfirm));
  }

  async clickNextWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.nextWeek));
  }

  async doubleClickNextWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.nextWeek));
  }

  async expectNextWeekVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.nextWeek), expected, timeoutMs);
  }

  async expectNextWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.nextWeek), substring, timeoutMs);
  }

  async scrollNextWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.nextWeek));
  }

  async getInnerTextNoteConfirmedActualsFrom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom));
  }

  async expectNoteConfirmedActualsFromVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), expected, timeoutMs);
  }

  async expectNoteConfirmedActualsFromContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), substring, timeoutMs);
  }

  async scrollNoteConfirmedActualsFromIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom));
  }

  async getInnerTextNote(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ActualsPage.L.note));
  }

  async expectNoteVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.note), expected, timeoutMs);
  }

  async expectNoteContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.note), substring, timeoutMs);
  }

  async scrollNoteIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.note));
  }

  async clickPreviousMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.previousMonth));
  }

  async doubleClickPreviousMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.previousMonth));
  }

  async expectPreviousMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.previousMonth), expected, timeoutMs);
  }

  async expectPreviousMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.previousMonth), substring, timeoutMs);
  }

  async scrollPreviousMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.previousMonth));
  }

  async clickNextMonth(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.nextMonth));
  }

  async doubleClickNextMonth(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.nextMonth));
  }

  async expectNextMonthVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.nextMonth), expected, timeoutMs);
  }

  async expectNextMonthContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.nextMonth), substring, timeoutMs);
  }

  async scrollNextMonthIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.nextMonth));
  }

  async clickButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button));
  }

  async doubleClickButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button));
  }

  async expectButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button), expected, timeoutMs);
  }

  async expectButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button), substring, timeoutMs);
  }

  async scrollButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button));
  }

  async clickButton2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button2));
  }

  async doubleClickButton2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button2));
  }

  async expectButton2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button2), expected, timeoutMs);
  }

  async expectButton2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button2), substring, timeoutMs);
  }

  async scrollButton2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button2));
  }

  async clickButton3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button3));
  }

  async doubleClickButton3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button3));
  }

  async expectButton3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button3), expected, timeoutMs);
  }

  async expectButton3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button3), substring, timeoutMs);
  }

  async scrollButton3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button3));
  }

  async clickButton4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button4));
  }

  async doubleClickButton4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button4));
  }

  async expectButton4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button4), expected, timeoutMs);
  }

  async expectButton4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button4), substring, timeoutMs);
  }

  async scrollButton4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button4));
  }

  async clickButton5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button5));
  }

  async doubleClickButton5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button5));
  }

  async expectButton5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button5), expected, timeoutMs);
  }

  async expectButton5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button5), substring, timeoutMs);
  }

  async scrollButton5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button5));
  }

  async clickButton6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button6));
  }

  async doubleClickButton6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button6));
  }

  async expectButton6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button6), expected, timeoutMs);
  }

  async expectButton6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button6), substring, timeoutMs);
  }

  async scrollButton6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button6));
  }

  async clickButton7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button7));
  }

  async doubleClickButton7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button7));
  }

  async expectButton7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button7), expected, timeoutMs);
  }

  async expectButton7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button7), substring, timeoutMs);
  }

  async scrollButton7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button7));
  }

  async clickButton8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button8));
  }

  async doubleClickButton8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button8));
  }

  async expectButton8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button8), expected, timeoutMs);
  }

  async expectButton8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button8), substring, timeoutMs);
  }

  async scrollButton8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button8));
  }

  async clickButton9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button9));
  }

  async doubleClickButton9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button9));
  }

  async expectButton9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button9), expected, timeoutMs);
  }

  async expectButton9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button9), substring, timeoutMs);
  }

  async scrollButton9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button9));
  }

  async clickButton10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button10));
  }

  async doubleClickButton10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button10));
  }

  async expectButton10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button10), expected, timeoutMs);
  }

  async expectButton10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button10), substring, timeoutMs);
  }

  async scrollButton10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button10));
  }

  async clickButton11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button11));
  }

  async doubleClickButton11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button11));
  }

  async expectButton11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button11), expected, timeoutMs);
  }

  async expectButton11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button11), substring, timeoutMs);
  }

  async scrollButton11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button11));
  }

  async clickButton12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button12));
  }

  async doubleClickButton12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button12));
  }

  async expectButton12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button12), expected, timeoutMs);
  }

  async expectButton12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button12), substring, timeoutMs);
  }

  async scrollButton12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button12));
  }

  async clickButton13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button13));
  }

  async doubleClickButton13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button13));
  }

  async expectButton13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button13), expected, timeoutMs);
  }

  async expectButton13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button13), substring, timeoutMs);
  }

  async scrollButton13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button13));
  }

  async clickButton14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button14));
  }

  async doubleClickButton14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button14));
  }

  async expectButton14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button14), expected, timeoutMs);
  }

  async expectButton14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button14), substring, timeoutMs);
  }

  async scrollButton14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button14));
  }

  async clickButton15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button15));
  }

  async doubleClickButton15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button15));
  }

  async expectButton15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button15), expected, timeoutMs);
  }

  async expectButton15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button15), substring, timeoutMs);
  }

  async scrollButton15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button15));
  }

  async clickButton16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button16));
  }

  async doubleClickButton16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button16));
  }

  async expectButton16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button16), expected, timeoutMs);
  }

  async expectButton16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button16), substring, timeoutMs);
  }

  async scrollButton16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button16));
  }

  async clickButton17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button17));
  }

  async doubleClickButton17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button17));
  }

  async expectButton17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button17), expected, timeoutMs);
  }

  async expectButton17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button17), substring, timeoutMs);
  }

  async scrollButton17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button17));
  }

  async clickButton18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button18));
  }

  async doubleClickButton18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button18));
  }

  async expectButton18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button18), expected, timeoutMs);
  }

  async expectButton18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button18), substring, timeoutMs);
  }

  async scrollButton18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button18));
  }

  async clickButton19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button19));
  }

  async doubleClickButton19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button19));
  }

  async expectButton19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button19), expected, timeoutMs);
  }

  async expectButton19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button19), substring, timeoutMs);
  }

  async scrollButton19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button19));
  }

  async clickButton20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button20));
  }

  async doubleClickButton20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button20));
  }

  async expectButton20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button20), expected, timeoutMs);
  }

  async expectButton20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button20), substring, timeoutMs);
  }

  async scrollButton20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button20));
  }

  async clickButton21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button21));
  }

  async doubleClickButton21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button21));
  }

  async expectButton21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button21), expected, timeoutMs);
  }

  async expectButton21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button21), substring, timeoutMs);
  }

  async scrollButton21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button21));
  }

  async clickButton22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button22));
  }

  async doubleClickButton22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button22));
  }

  async expectButton22Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button22), expected, timeoutMs);
  }

  async expectButton22ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button22), substring, timeoutMs);
  }

  async scrollButton22IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button22));
  }

  async clickButton23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button23));
  }

  async doubleClickButton23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button23));
  }

  async expectButton23Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button23), expected, timeoutMs);
  }

  async expectButton23ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button23), substring, timeoutMs);
  }

  async scrollButton23IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button23));
  }

  async clickButton24(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button24));
  }

  async doubleClickButton24(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button24));
  }

  async expectButton24Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button24), expected, timeoutMs);
  }

  async expectButton24ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button24), substring, timeoutMs);
  }

  async scrollButton24IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button24));
  }

  async clickButton25(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button25));
  }

  async doubleClickButton25(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button25));
  }

  async expectButton25Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button25), expected, timeoutMs);
  }

  async expectButton25ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button25), substring, timeoutMs);
  }

  async scrollButton25IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button25));
  }

  async clickButton26(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button26));
  }

  async doubleClickButton26(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button26));
  }

  async expectButton26Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button26), expected, timeoutMs);
  }

  async expectButton26ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button26), substring, timeoutMs);
  }

  async scrollButton26IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button26));
  }

  async clickButton27(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button27));
  }

  async doubleClickButton27(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button27));
  }

  async expectButton27Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button27), expected, timeoutMs);
  }

  async expectButton27ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button27), substring, timeoutMs);
  }

  async scrollButton27IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button27));
  }

  async clickButton28(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button28));
  }

  async doubleClickButton28(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button28));
  }

  async expectButton28Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button28), expected, timeoutMs);
  }

  async expectButton28ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button28), substring, timeoutMs);
  }

  async scrollButton28IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button28));
  }

  async clickButton29(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button29));
  }

  async doubleClickButton29(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button29));
  }

  async expectButton29Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button29), expected, timeoutMs);
  }

  async expectButton29ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button29), substring, timeoutMs);
  }

  async scrollButton29IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button29));
  }

  async clickButton30(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button30));
  }

  async doubleClickButton30(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button30));
  }

  async expectButton30Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button30), expected, timeoutMs);
  }

  async expectButton30ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button30), substring, timeoutMs);
  }

  async scrollButton30IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button30));
  }

  async clickButton31(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.button31));
  }

  async doubleClickButton31(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.button31));
  }

  async expectButton31Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.button31), expected, timeoutMs);
  }

  async expectButton31ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.button31), substring, timeoutMs);
  }

  async scrollButton31IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ActualsPage.L.button31));
  }


  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.dashboard));
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.dashboard), count, timeoutMs);
  }

  async longPressAllocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.allocation));
  }

  async expectAllocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.allocation), value, timeoutMs);
  }

  async expectAllocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.allocation), timeoutMs);
  }

  async expectAllocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.allocation), count, timeoutMs);
  }

  async longPressEpics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.epics));
  }

  async expectEpicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.epics), value, timeoutMs);
  }

  async expectEpicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.epics), timeoutMs);
  }

  async expectEpicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.epics), count, timeoutMs);
  }

  async longPressPeople(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.people));
  }

  async expectPeopleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.people), value, timeoutMs);
  }

  async expectPeopleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.people), timeoutMs);
  }

  async expectPeopleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.people), count, timeoutMs);
  }

  async longPressActuals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.actuals));
  }

  async expectActualsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.actuals), value, timeoutMs);
  }

  async expectActualsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.actuals), timeoutMs);
  }

  async expectActualsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.actuals), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.reports), count, timeoutMs);
  }

  async expectR2oText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.r2o), expected, timeoutMs);
  }

  async expectR2oContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.r2o), substring, timeoutMs);
  }

  async expectR2oChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.r2o), timeoutMs);
  }

  async expectR2oCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.r2o), count, timeoutMs);
  }

  async longPressOpen(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.open));
  }

  async expectOpenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.open), value, timeoutMs);
  }

  async expectOpenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.open), timeoutMs);
  }

  async expectOpenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.open), count, timeoutMs);
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.title));
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.title), count, timeoutMs);
  }

  async clickTeam(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.team));
  }

  async doubleClickTeam(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.team));
  }

  async longPressTeam(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.team));
  }

  async expectTeamValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.team), value, timeoutMs);
  }

  async expectTeamEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.team), timeoutMs);
  }

  async expectTeamCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.team), count, timeoutMs);
  }

  async clickWeek21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.week21));
  }

  async doubleClickWeek21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.week21));
  }

  async longPressWeek21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.week21));
  }

  async expectWeek21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.week21), value, timeoutMs);
  }

  async expectWeek21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.week21), timeoutMs);
  }

  async expectWeek21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.week21), count, timeoutMs);
  }

  async clickAllocation2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.allocation2));
  }

  async doubleClickAllocation2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.allocation2));
  }

  async longPressAllocation2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.allocation2));
  }

  async expectAllocation2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.allocation2), value, timeoutMs);
  }

  async expectAllocation2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.allocation2), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element2), count, timeoutMs);
  }

  async clickPlannedActual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual));
  }

  async doubleClickPlannedActual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual));
  }

  async longPressPlannedActual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual));
  }

  async expectPlannedActualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.plannedActual), value, timeoutMs);
  }

  async expectPlannedActualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.plannedActual), timeoutMs);
  }

  async expectPlannedActualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.plannedActual), count, timeoutMs);
  }

  async clickCurrent(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.current));
  }

  async doubleClickCurrent(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.current));
  }

  async longPressCurrent(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.current));
  }

  async expectCurrentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.current), value, timeoutMs);
  }

  async expectCurrentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.current), timeoutMs);
  }

  async expectCurrentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.current), count, timeoutMs);
  }

  async clickWeek22(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.week22));
  }

  async doubleClickWeek22(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.week22));
  }

  async longPressWeek22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.week22));
  }

  async expectWeek22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.week22), value, timeoutMs);
  }

  async expectWeek22Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.week22), timeoutMs);
  }

  async expectWeek22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.week22), count, timeoutMs);
  }

  async clickAllocation3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.allocation3));
  }

  async doubleClickAllocation3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.allocation3));
  }

  async longPressAllocation3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.allocation3));
  }

  async expectAllocation3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.allocation3), value, timeoutMs);
  }

  async expectAllocation3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.allocation3), timeoutMs);
  }

  async expectAllocation3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.allocation3), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element3), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element4), count, timeoutMs);
  }

  async clickPlannedActual2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual2));
  }

  async doubleClickPlannedActual2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual2));
  }

  async longPressPlannedActual2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual2));
  }

  async expectPlannedActual2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.plannedActual2), value, timeoutMs);
  }

  async expectPlannedActual2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.plannedActual2), timeoutMs);
  }

  async expectPlannedActual2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.plannedActual2), count, timeoutMs);
  }

  async clickFuture(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.future));
  }

  async doubleClickFuture(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.future));
  }

  async longPressFuture(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.future));
  }

  async expectFutureValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.future), value, timeoutMs);
  }

  async expectFutureEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.future), timeoutMs);
  }

  async expectFutureCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.future), count, timeoutMs);
  }

  async clickWeek23(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.week23));
  }

  async doubleClickWeek23(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.week23));
  }

  async longPressWeek23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.week23));
  }

  async expectWeek23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.week23), value, timeoutMs);
  }

  async expectWeek23Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.week23), timeoutMs);
  }

  async expectWeek23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.week23), count, timeoutMs);
  }

  async clickAllocation4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.allocation4));
  }

  async doubleClickAllocation4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.allocation4));
  }

  async longPressAllocation4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.allocation4));
  }

  async expectAllocation4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.allocation4), value, timeoutMs);
  }

  async expectAllocation4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.allocation4), timeoutMs);
  }

  async expectAllocation4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.allocation4), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element5), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.element6), count, timeoutMs);
  }

  async clickPlannedActual3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual3));
  }

  async doubleClickPlannedActual3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual3));
  }

  async longPressPlannedActual3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.plannedActual3));
  }

  async expectPlannedActual3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.plannedActual3), value, timeoutMs);
  }

  async expectPlannedActual3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.plannedActual3), timeoutMs);
  }

  async expectPlannedActual3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.plannedActual3), count, timeoutMs);
  }

  async clickStatusNotStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.statusNotStarted));
  }

  async doubleClickStatusNotStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.statusNotStarted));
  }

  async longPressStatusNotStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.statusNotStarted));
  }

  async expectStatusNotStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.statusNotStarted), value, timeoutMs);
  }

  async expectStatusNotStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.statusNotStarted), timeoutMs);
  }

  async expectStatusNotStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.statusNotStarted), count, timeoutMs);
  }

  async clickNotStarted(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.notStarted));
  }

  async doubleClickNotStarted(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.notStarted));
  }

  async longPressNotStarted(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.notStarted));
  }

  async expectNotStartedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.notStarted), value, timeoutMs);
  }

  async expectNotStartedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.notStarted), timeoutMs);
  }

  async expectNotStartedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.notStarted), count, timeoutMs);
  }

  async expectR2fText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ActualsPage.L.r2f), expected, timeoutMs);
  }

  async expectR2fContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ActualsPage.L.r2f), substring, timeoutMs);
  }

  async expectR2fChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.r2f), timeoutMs);
  }

  async expectR2fCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.r2f), count, timeoutMs);
  }

  async longPressCopyPlanToActuals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.copyPlanToActuals));
  }

  async expectCopyPlanToActualsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.copyPlanToActuals), value, timeoutMs);
  }

  async expectCopyPlanToActualsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.copyPlanToActuals), timeoutMs);
  }

  async expectCopyPlanToActualsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.copyPlanToActuals), count, timeoutMs);
  }

  async clickStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.status));
  }

  async doubleClickStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.status));
  }

  async longPressStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.status));
  }

  async expectStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.status), value, timeoutMs);
  }

  async expectStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.status), timeoutMs);
  }

  async expectStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.status), count, timeoutMs);
  }

  async longPressAddUnplannedActuals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.addUnplannedActuals));
  }

  async expectAddUnplannedActualsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.addUnplannedActuals), value, timeoutMs);
  }

  async expectAddUnplannedActualsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.addUnplannedActuals), timeoutMs);
  }

  async expectAddUnplannedActualsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.addUnplannedActuals), count, timeoutMs);
  }

  async clickAllocation10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.allocation10));
  }

  async doubleClickAllocation10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.allocation10));
  }

  async longPressAllocation10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.allocation10));
  }

  async expectAllocation10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.allocation10), value, timeoutMs);
  }

  async expectAllocation10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.allocation10), timeoutMs);
  }

  async expectAllocation10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.allocation10), count, timeoutMs);
  }

  async clickHours(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.hours));
  }

  async doubleClickHours(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.hours));
  }

  async longPressHours(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.hours));
  }

  async expectHoursValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.hours), value, timeoutMs);
  }

  async expectHoursEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.hours), timeoutMs);
  }

  async expectHoursCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.hours), count, timeoutMs);
  }

  async clickFractions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.fractions));
  }

  async doubleClickFractions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.fractions));
  }

  async longPressFractions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.fractions));
  }

  async expectFractionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.fractions), value, timeoutMs);
  }

  async expectFractionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.fractions), timeoutMs);
  }

  async expectFractionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.fractions), count, timeoutMs);
  }

  async longPressPrevWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.prevWeek));
  }

  async expectPrevWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.prevWeek), value, timeoutMs);
  }

  async expectPrevWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.prevWeek), timeoutMs);
  }

  async expectPrevWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.prevWeek), count, timeoutMs);
  }

  async longPressSave(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.save));
  }

  async expectSaveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.save), value, timeoutMs);
  }

  async expectSaveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.save), timeoutMs);
  }

  async expectSaveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.save), count, timeoutMs);
  }

  async longPressSaveAndConfirm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.saveAndConfirm));
  }

  async expectSaveAndConfirmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.saveAndConfirm), value, timeoutMs);
  }

  async expectSaveAndConfirmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.saveAndConfirm), timeoutMs);
  }

  async expectSaveAndConfirmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.saveAndConfirm), count, timeoutMs);
  }

  async longPressNextWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.nextWeek));
  }

  async expectNextWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.nextWeek), value, timeoutMs);
  }

  async expectNextWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.nextWeek), timeoutMs);
  }

  async expectNextWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.nextWeek), count, timeoutMs);
  }

  async clickNoteConfirmedActualsFrom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom));
  }

  async doubleClickNoteConfirmedActualsFrom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom));
  }

  async longPressNoteConfirmedActualsFrom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom));
  }

  async expectNoteConfirmedActualsFromValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), value, timeoutMs);
  }

  async expectNoteConfirmedActualsFromEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), timeoutMs);
  }

  async expectNoteConfirmedActualsFromCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.noteConfirmedActualsFrom), count, timeoutMs);
  }

  async clickNote(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ActualsPage.L.note));
  }

  async doubleClickNote(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ActualsPage.L.note));
  }

  async longPressNote(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.note));
  }

  async expectNoteValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.note), value, timeoutMs);
  }

  async expectNoteEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.note), timeoutMs);
  }

  async expectNoteCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.note), count, timeoutMs);
  }

  async longPressPreviousMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.previousMonth));
  }

  async expectPreviousMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.previousMonth), value, timeoutMs);
  }

  async expectPreviousMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.previousMonth), timeoutMs);
  }

  async expectPreviousMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.previousMonth), count, timeoutMs);
  }

  async longPressNextMonth(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.nextMonth));
  }

  async expectNextMonthValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.nextMonth), value, timeoutMs);
  }

  async expectNextMonthChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.nextMonth), timeoutMs);
  }

  async expectNextMonthCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.nextMonth), count, timeoutMs);
  }

  async longPressButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button));
  }

  async expectButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button), value, timeoutMs);
  }

  async expectButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button), timeoutMs);
  }

  async expectButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button), count, timeoutMs);
  }

  async longPressButton2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button2));
  }

  async expectButton2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button2), value, timeoutMs);
  }

  async expectButton2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button2), timeoutMs);
  }

  async expectButton2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button2), count, timeoutMs);
  }

  async longPressButton3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button3));
  }

  async expectButton3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button3), value, timeoutMs);
  }

  async expectButton3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button3), timeoutMs);
  }

  async expectButton3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button3), count, timeoutMs);
  }

  async longPressButton4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button4));
  }

  async expectButton4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button4), value, timeoutMs);
  }

  async expectButton4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button4), timeoutMs);
  }

  async expectButton4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button4), count, timeoutMs);
  }

  async longPressButton5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button5));
  }

  async expectButton5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button5), value, timeoutMs);
  }

  async expectButton5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button5), timeoutMs);
  }

  async expectButton5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button5), count, timeoutMs);
  }

  async longPressButton6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button6));
  }

  async expectButton6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button6), value, timeoutMs);
  }

  async expectButton6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button6), timeoutMs);
  }

  async expectButton6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button6), count, timeoutMs);
  }

  async longPressButton7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button7));
  }

  async expectButton7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button7), value, timeoutMs);
  }

  async expectButton7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button7), timeoutMs);
  }

  async expectButton7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button7), count, timeoutMs);
  }

  async longPressButton8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button8));
  }

  async expectButton8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button8), value, timeoutMs);
  }

  async expectButton8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button8), timeoutMs);
  }

  async expectButton8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button8), count, timeoutMs);
  }

  async longPressButton9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button9));
  }

  async expectButton9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button9), value, timeoutMs);
  }

  async expectButton9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button9), timeoutMs);
  }

  async expectButton9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button9), count, timeoutMs);
  }

  async longPressButton10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button10));
  }

  async expectButton10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button10), value, timeoutMs);
  }

  async expectButton10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button10), timeoutMs);
  }

  async expectButton10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button10), count, timeoutMs);
  }

  async longPressButton11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button11));
  }

  async expectButton11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button11), value, timeoutMs);
  }

  async expectButton11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button11), timeoutMs);
  }

  async expectButton11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button11), count, timeoutMs);
  }

  async longPressButton12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button12));
  }

  async expectButton12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button12), value, timeoutMs);
  }

  async expectButton12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button12), timeoutMs);
  }

  async expectButton12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button12), count, timeoutMs);
  }

  async longPressButton13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button13));
  }

  async expectButton13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button13), value, timeoutMs);
  }

  async expectButton13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button13), timeoutMs);
  }

  async expectButton13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button13), count, timeoutMs);
  }

  async longPressButton14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button14));
  }

  async expectButton14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button14), value, timeoutMs);
  }

  async expectButton14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button14), timeoutMs);
  }

  async expectButton14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button14), count, timeoutMs);
  }

  async longPressButton15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button15));
  }

  async expectButton15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button15), value, timeoutMs);
  }

  async expectButton15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button15), timeoutMs);
  }

  async expectButton15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button15), count, timeoutMs);
  }

  async longPressButton16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button16));
  }

  async expectButton16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button16), value, timeoutMs);
  }

  async expectButton16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button16), timeoutMs);
  }

  async expectButton16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button16), count, timeoutMs);
  }

  async longPressButton17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button17));
  }

  async expectButton17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button17), value, timeoutMs);
  }

  async expectButton17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button17), timeoutMs);
  }

  async expectButton17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button17), count, timeoutMs);
  }

  async longPressButton18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button18));
  }

  async expectButton18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button18), value, timeoutMs);
  }

  async expectButton18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button18), timeoutMs);
  }

  async expectButton18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button18), count, timeoutMs);
  }

  async longPressButton19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button19));
  }

  async expectButton19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button19), value, timeoutMs);
  }

  async expectButton19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button19), timeoutMs);
  }

  async expectButton19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button19), count, timeoutMs);
  }

  async longPressButton20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button20));
  }

  async expectButton20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button20), value, timeoutMs);
  }

  async expectButton20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button20), timeoutMs);
  }

  async expectButton20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button20), count, timeoutMs);
  }

  async longPressButton21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button21));
  }

  async expectButton21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button21), value, timeoutMs);
  }

  async expectButton21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button21), timeoutMs);
  }

  async expectButton21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button21), count, timeoutMs);
  }

  async longPressButton22(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button22));
  }

  async expectButton22Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button22), value, timeoutMs);
  }

  async expectButton22Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button22), timeoutMs);
  }

  async expectButton22Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button22), count, timeoutMs);
  }

  async longPressButton23(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button23));
  }

  async expectButton23Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button23), value, timeoutMs);
  }

  async expectButton23Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button23), timeoutMs);
  }

  async expectButton23Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button23), count, timeoutMs);
  }

  async longPressButton24(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button24));
  }

  async expectButton24Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button24), value, timeoutMs);
  }

  async expectButton24Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button24), timeoutMs);
  }

  async expectButton24Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button24), count, timeoutMs);
  }

  async longPressButton25(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button25));
  }

  async expectButton25Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button25), value, timeoutMs);
  }

  async expectButton25Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button25), timeoutMs);
  }

  async expectButton25Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button25), count, timeoutMs);
  }

  async longPressButton26(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button26));
  }

  async expectButton26Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button26), value, timeoutMs);
  }

  async expectButton26Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button26), timeoutMs);
  }

  async expectButton26Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button26), count, timeoutMs);
  }

  async longPressButton27(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button27));
  }

  async expectButton27Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button27), value, timeoutMs);
  }

  async expectButton27Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button27), timeoutMs);
  }

  async expectButton27Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button27), count, timeoutMs);
  }

  async longPressButton28(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button28));
  }

  async expectButton28Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button28), value, timeoutMs);
  }

  async expectButton28Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button28), timeoutMs);
  }

  async expectButton28Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button28), count, timeoutMs);
  }

  async longPressButton29(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button29));
  }

  async expectButton29Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button29), value, timeoutMs);
  }

  async expectButton29Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button29), timeoutMs);
  }

  async expectButton29Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button29), count, timeoutMs);
  }

  async longPressButton30(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button30));
  }

  async expectButton30Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button30), value, timeoutMs);
  }

  async expectButton30Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button30), timeoutMs);
  }

  async expectButton30Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button30), count, timeoutMs);
  }

  async longPressButton31(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ActualsPage.L.button31));
  }

  async expectButton31Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ActualsPage.L.button31), value, timeoutMs);
  }

  async expectButton31Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ActualsPage.L.button31), timeoutMs);
  }

  async expectButton31Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ActualsPage.L.button31), count, timeoutMs);
  }

}
