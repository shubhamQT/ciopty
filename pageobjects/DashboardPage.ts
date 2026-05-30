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

export class DashboardPage {
  private static readonly L = {
    eXECUTIVEDASHBOARD: { strategy: 'text' as const, value: 'EXECUTIVE DASHBOARD', actionKind: 'text' as const },
    dashboard: { strategy: 'label' as const, value: 'Dashboard', actionKind: 'link' as const },
    allocation: { strategy: 'label' as const, value: 'Allocation', actionKind: 'link' as const },
    epics: { strategy: 'label' as const, value: 'Epics', actionKind: 'link' as const },
    people: { strategy: 'label' as const, value: 'People', actionKind: 'link' as const },
    actuals: { strategy: 'label' as const, value: 'Actuals', actionKind: 'link' as const },
    reports: { strategy: 'label' as const, value: 'Reports', actionKind: 'link' as const },
    overview: { strategy: 'role' as const, value: 'Overview', role: 'button', actionKind: 'button' as const },
    teams: { strategy: 'role' as const, value: 'Teams', role: 'button', actionKind: 'button' as const },
    costs: { strategy: 'role' as const, value: 'Costs', role: 'button', actionKind: 'button' as const },
    weekly: { strategy: 'text' as const, value: 'Weekly', actionKind: 'generic' as const },
    may25May: { strategy: 'role' as const, value: 'May 25 - May 31', role: 'button', actionKind: 'button' as const },
    filters: { strategy: 'text' as const, value: 'Filters', actionKind: 'text' as const },
    activeApprovedEpics: { strategy: 'text' as const, value: 'Active/Approved Epics', actionKind: 'text' as const },
    element: { strategy: 'text' as const, value: '96', actionKind: 'text' as const },
    allocatedEpics: { strategy: 'text' as const, value: 'Allocated Epics', actionKind: 'text' as const },
    element2: { strategy: 'text' as const, value: '19', actionKind: 'text' as const },
    activeResources: { strategy: 'text' as const, value: 'Active Resources', actionKind: 'text' as const },
    element3: { strategy: 'text' as const, value: '137', actionKind: 'text' as const },
    totalResourceCost: { strategy: 'text' as const, value: 'Total Resource Cost', actionKind: 'text' as const },
    element4: { strategy: 'text' as const, value: '$1,800', actionKind: 'text' as const },
    allocation2: { strategy: 'text' as const, value: 'Allocation %', actionKind: 'text' as const },
    element5: { strategy: 'text' as const, value: '13%', actionKind: 'text' as const },
    actualsConfirmedPreviousWeek: { strategy: 'text' as const, value: 'Actuals Confirmed (Previous week)', actionKind: 'text' as const },
    previousWeek: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    element6: { strategy: 'text' as const, value: '1%', actionKind: 'text' as const },
    previousWeek2: { strategy: 'text' as const, value: 'Previous Week', actionKind: 'text' as const },
    engagementScore: { strategy: 'text' as const, value: 'Engagement Score', actionKind: 'text' as const },
    planScore: { strategy: 'text' as const, value: 'Plan Score', actionKind: 'text' as const },
    actualsScore: { strategy: 'text' as const, value: 'Actuals Score', actionKind: 'text' as const },
    previousWeek3: { strategy: 'text' as const, value: 'Previous Week', actionKind: 'text' as const },
    epicScore: { strategy: 'text' as const, value: 'Epic Score', actionKind: 'text' as const },
    alignmentScore: { strategy: 'text' as const, value: 'Alignment Score', actionKind: 'text' as const },
    healthScore: { strategy: 'text' as const, value: 'Health Score', actionKind: 'text' as const },
    planVsActualsVariance: { strategy: 'text' as const, value: 'Plan vs Actuals Variance (Previous week)', actionKind: 'text' as const },
    previousWeek4: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    plan: { strategy: 'text' as const, value: 'Plan', actionKind: 'text' as const },
    absoluteVariance: { strategy: 'text' as const, value: 'Absolute Variance', actionKind: 'text' as const },
    top5EpicsWith: { strategy: 'text' as const, value: 'Top 5 Epics with Variance (Previous week)', actionKind: 'text' as const },
    previousWeek5: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    techDebtReduction: { strategy: 'text' as const, value: 'Tech Debt Reduction', actionKind: 'text' as const },
    run: { strategy: 'text' as const, value: 'Run', actionKind: 'text' as const },
    element7: { strategy: 'text' as const, value: '4.0', actionKind: 'text' as const },
    element8: { strategy: 'text' as const, value: '0.0', actionKind: 'text' as const },
    element9: { strategy: 'text' as const, value: '-4.0', actionKind: 'text' as const },
    alphaDelta: { strategy: 'text' as const, value: 'alpha delta', actionKind: 'text' as const },
    transform: { strategy: 'text' as const, value: 'Transform', actionKind: 'text' as const },
    element10: { strategy: 'text' as const, value: '3.3', actionKind: 'text' as const },
    element11: { strategy: 'text' as const, value: '0.0', actionKind: 'text' as const },
    element12: { strategy: 'text' as const, value: '-3.3', actionKind: 'text' as const },
    cIOPTIMIZESTProject: { strategy: 'text' as const, value: 'CIOPTIMIZE ST Project', actionKind: 'text' as const },
    grow: { strategy: 'text' as const, value: 'Grow', actionKind: 'text' as const },
    element13: { strategy: 'text' as const, value: '2.5', actionKind: 'text' as const },
    element14: { strategy: 'text' as const, value: '0.0', actionKind: 'text' as const },
    element15: { strategy: 'text' as const, value: '-2.5', actionKind: 'text' as const },
    edited1778133984231: { strategy: 'text' as const, value: 'Edited-1778133984231', actionKind: 'text' as const },
    run2: { strategy: 'text' as const, value: 'Run', actionKind: 'text' as const },
    element16: { strategy: 'text' as const, value: '2.1', actionKind: 'text' as const },
    element17: { strategy: 'text' as const, value: '0.0', actionKind: 'text' as const },
    element18: { strategy: 'text' as const, value: '-2.1', actionKind: 'text' as const },
    edited1778060111408: { strategy: 'text' as const, value: 'Edited-1778060111408', actionKind: 'text' as const },
    transform2: { strategy: 'text' as const, value: 'Transform', actionKind: 'text' as const },
    element19: { strategy: 'text' as const, value: '1.9', actionKind: 'text' as const },
    element20: { strategy: 'text' as const, value: '0.0', actionKind: 'text' as const },
    element21: { strategy: 'text' as const, value: '-1.9', actionKind: 'text' as const },
    allocationTrendsPlanned: { strategy: 'text' as const, value: 'Allocation Trends - Planned vs Actual (%)', actionKind: 'text' as const },
    transformPlanned: { strategy: 'text' as const, value: 'Transform - Planned', actionKind: 'text' as const },
    transformPlanned2: { strategy: 'text' as const, value: 'Transform - Planned', actionKind: 'text' as const },
    transformActual: { strategy: 'text' as const, value: 'Transform - Actual', actionKind: 'text' as const },
    transformActual2: { strategy: 'text' as const, value: 'Transform - Actual', actionKind: 'text' as const },
    growPlanned: { strategy: 'text' as const, value: 'Grow - Planned', actionKind: 'text' as const },
    growPlanned2: { strategy: 'text' as const, value: 'Grow - Planned', actionKind: 'text' as const },
    growActual: { strategy: 'text' as const, value: 'Grow - Actual', actionKind: 'text' as const },
    growActual2: { strategy: 'text' as const, value: 'Grow - Actual', actionKind: 'text' as const },
    runPlanned: { strategy: 'text' as const, value: 'Run - Planned', actionKind: 'text' as const },
    runPlanned2: { strategy: 'text' as const, value: 'Run - Planned', actionKind: 'text' as const },
    runActual: { strategy: 'text' as const, value: 'Run - Actual', actionKind: 'text' as const },
    runActual2: { strategy: 'text' as const, value: 'Run - Actual', actionKind: 'text' as const },
    weeklyAllocationVsCapacity: { strategy: 'text' as const, value: 'Weekly Allocation vs. Capacity', actionKind: 'text' as const },
    abc: { strategy: 'text' as const, value: 'abc', actionKind: 'text' as const },
    keyInitiative: { strategy: 'text' as const, value: 'Key initiative', actionKind: 'text' as const },
    maintenance: { strategy: 'text' as const, value: 'Maintenance', actionKind: 'text' as const },
    ongoings: { strategy: 'text' as const, value: 'Ongoings', actionKind: 'text' as const },
    operationalTasks: { strategy: 'text' as const, value: 'Operational Tasks', actionKind: 'text' as const },
    test: { strategy: 'text' as const, value: 'test', actionKind: 'text' as const },
    capacity: { strategy: 'text' as const, value: 'Capacity', actionKind: 'text' as const },
    activeApprovedEpics2: { strategy: 'text' as const, value: 'Active & Approved Epics by Project Category', actionKind: 'text' as const },
    active: { strategy: 'text' as const, value: 'Active', actionKind: 'text' as const },
    active2: { strategy: 'text' as const, value: 'Active', actionKind: 'text' as const },
    approved: { strategy: 'text' as const, value: 'Approved', actionKind: 'text' as const },
    approved2: { strategy: 'text' as const, value: 'Approved', actionKind: 'text' as const },
    totalHeadcountBreakdown: { strategy: 'text' as const, value: 'Total Headcount Breakdown', actionKind: 'text' as const },
    newTestResource: { strategy: 'text' as const, value: 'new test resource', actionKind: 'text' as const },
    newTestResource2: { strategy: 'text' as const, value: 'new test resource', actionKind: 'text' as const },
    finalIntegration: { strategy: 'text' as const, value: 'Final Integration', actionKind: 'text' as const },
    finalIntegration2: { strategy: 'text' as const, value: 'Final Integration', actionKind: 'text' as const },
    resourceTestType: { strategy: 'text' as const, value: 'Resource Test Type', actionKind: 'text' as const },
    resourceTestType2: { strategy: 'text' as const, value: 'Resource Test Type', actionKind: 'text' as const },
    resourceTestType2Updated: { strategy: 'text' as const, value: 'Resource Test Type2 updated to 4', actionKind: 'text' as const },
    resourceTestType2Updated2: { strategy: 'text' as const, value: 'Resource Test Type2 updated to 4', actionKind: 'text' as const },
    resourceTestType3: { strategy: 'text' as const, value: 'Resource Test Type3', actionKind: 'text' as const },
    resourceTestType32: { strategy: 'text' as const, value: 'Resource Test Type3', actionKind: 'text' as const },
    fTE: { strategy: 'text' as const, value: 'FTE', actionKind: 'text' as const },
    fTE2: { strategy: 'text' as const, value: 'FTE', actionKind: 'text' as const },
    integratedType: { strategy: 'text' as const, value: 'integrated type', actionKind: 'text' as const },
    integratedType2: { strategy: 'text' as const, value: 'integrated type', actionKind: 'text' as const },
    allocationByProjectCategory: { strategy: 'text' as const, value: 'Allocation by Project Category', actionKind: 'text' as const },
    ongoings2: { strategy: 'text' as const, value: 'Ongoings', actionKind: 'text' as const },
    ongoings3: { strategy: 'text' as const, value: 'Ongoings', actionKind: 'text' as const },
    abc2: { strategy: 'text' as const, value: 'abc', actionKind: 'text' as const },
    abc3: { strategy: 'text' as const, value: 'abc', actionKind: 'text' as const },
    operationalTasks2: { strategy: 'text' as const, value: 'Operational Tasks', actionKind: 'text' as const },
    operationalTasks3: { strategy: 'text' as const, value: 'Operational Tasks', actionKind: 'text' as const },
    keyInitiative2: { strategy: 'text' as const, value: 'Key initiative', actionKind: 'text' as const },
    keyInitiative3: { strategy: 'text' as const, value: 'Key initiative', actionKind: 'text' as const },
    maintenance2: { strategy: 'text' as const, value: 'Maintenance', actionKind: 'text' as const },
    maintenance3: { strategy: 'text' as const, value: 'Maintenance', actionKind: 'text' as const },
    project: { strategy: 'text' as const, value: 'Project', actionKind: 'text' as const },
    project2: { strategy: 'text' as const, value: 'Project', actionKind: 'text' as const },
    test2: { strategy: 'text' as const, value: 'test', actionKind: 'text' as const },
    test3: { strategy: 'text' as const, value: 'test', actionKind: 'text' as const },
    percentageAllocationByEpic: { strategy: 'text' as const, value: 'Percentage Allocation by Epic Reporting Type', actionKind: 'text' as const },
    actualsByCategoryPrevious: { strategy: 'text' as const, value: 'Actuals by Category (Previous week)', actionKind: 'text' as const },
    previousWeek6: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    approvedWork: { strategy: 'text' as const, value: 'Approved Work', actionKind: 'text' as const },
    approvedWork2: { strategy: 'text' as const, value: 'Approved Work', actionKind: 'text' as const },
    unplannedProjects: { strategy: 'text' as const, value: 'Unplanned Projects', actionKind: 'text' as const },
    unplannedProjects2: { strategy: 'text' as const, value: 'Unplanned Projects', actionKind: 'text' as const },
    otherWork: { strategy: 'text' as const, value: 'Other Work', actionKind: 'text' as const },
    otherWork2: { strategy: 'text' as const, value: 'Other Work', actionKind: 'text' as const },
    personalTime: { strategy: 'text' as const, value: 'Personal Time', actionKind: 'text' as const },
    personalTime2: { strategy: 'text' as const, value: 'Personal Time', actionKind: 'text' as const },
    epicScoreByProject: { strategy: 'text' as const, value: 'Epic Score by Project Manager (Previous week)', actionKind: 'text' as const },
    previousWeek7: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    epicAlignmentScore: { strategy: 'text' as const, value: 'Epic Alignment Score', actionKind: 'text' as const },
    epicAlignmentScore2: { strategy: 'text' as const, value: 'Epic Alignment Score', actionKind: 'text' as const },
    epicHealthScore: { strategy: 'text' as const, value: 'Epic Health Score', actionKind: 'text' as const },
    epicHealthScore2: { strategy: 'text' as const, value: 'Epic Health Score', actionKind: 'text' as const },
    actualsConfirmationStatusPrevious: { strategy: 'text' as const, value: 'Actuals Confirmation Status (Previous week)', actionKind: 'text' as const },
    previousWeek8: { strategy: 'text' as const, value: '(Previous week)', actionKind: 'text' as const },
    planned: { strategy: 'text' as const, value: 'Planned', actionKind: 'text' as const },
    planned2: { strategy: 'text' as const, value: 'Planned', actionKind: 'text' as const },
    actualsTrend: { strategy: 'text' as const, value: 'Actuals Trend', actionKind: 'text' as const },
    personalTime3: { strategy: 'text' as const, value: 'Personal Time', actionKind: 'text' as const },
    personalTime4: { strategy: 'text' as const, value: 'Personal Time', actionKind: 'text' as const },
    otherWork3: { strategy: 'text' as const, value: 'Other Work', actionKind: 'text' as const },
    otherWork4: { strategy: 'text' as const, value: 'Other Work', actionKind: 'text' as const },
    unplannedEpics: { strategy: 'text' as const, value: 'Unplanned Epics', actionKind: 'text' as const },
    unplannedEpics2: { strategy: 'text' as const, value: 'Unplanned Epics', actionKind: 'text' as const },
    approvedWork3: { strategy: 'text' as const, value: 'Approved Work', actionKind: 'text' as const },
    approvedWork4: { strategy: 'text' as const, value: 'Approved Work', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextEXECUTIVEDASHBOARD(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD));
  }

  async expectEXECUTIVEDASHBOARDVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), expected, timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), substring, timeoutMs);
  }

  async scrollEXECUTIVEDASHBOARDIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD));
  }

  async clickDashboard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async doubleClickDashboard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.dashboard), expected, timeoutMs);
  }

  async expectDashboardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.dashboard), substring, timeoutMs);
  }

  async scrollDashboardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async clickAllocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.allocation));
  }

  async doubleClickAllocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.allocation));
  }

  async expectAllocationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.allocation), expected, timeoutMs);
  }

  async expectAllocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.allocation), substring, timeoutMs);
  }

  async scrollAllocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.allocation));
  }

  async clickEpics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epics));
  }

  async doubleClickEpics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epics));
  }

  async expectEpicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epics), expected, timeoutMs);
  }

  async expectEpicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epics), substring, timeoutMs);
  }

  async scrollEpicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epics));
  }

  async clickPeople(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.people));
  }

  async doubleClickPeople(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.people));
  }

  async expectPeopleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.people), expected, timeoutMs);
  }

  async expectPeopleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.people), substring, timeoutMs);
  }

  async scrollPeopleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.people));
  }

  async clickActuals(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actuals));
  }

  async doubleClickActuals(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actuals));
  }

  async expectActualsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actuals), expected, timeoutMs);
  }

  async expectActualsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actuals), substring, timeoutMs);
  }

  async scrollActualsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actuals));
  }

  async clickReports(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.reports));
  }

  async doubleClickReports(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.reports));
  }

  async expectReportsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.reports), expected, timeoutMs);
  }

  async expectReportsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.reports), substring, timeoutMs);
  }

  async scrollReportsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.reports));
  }

  async clickOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.overview));
  }

  async doubleClickOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.overview));
  }

  async expectOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.overview), expected, timeoutMs);
  }

  async expectOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.overview), substring, timeoutMs);
  }

  async scrollOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.overview));
  }

  async clickTeams(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.teams));
  }

  async doubleClickTeams(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.teams));
  }

  async expectTeamsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.teams), expected, timeoutMs);
  }

  async expectTeamsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.teams), substring, timeoutMs);
  }

  async scrollTeamsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.teams));
  }

  async clickCosts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.costs));
  }

  async doubleClickCosts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.costs));
  }

  async expectCostsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.costs), expected, timeoutMs);
  }

  async expectCostsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.costs), substring, timeoutMs);
  }

  async scrollCostsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.costs));
  }

  async clickWeekly(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.weekly));
  }

  async doubleClickWeekly(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.weekly));
  }

  async expectWeeklyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.weekly), expected, timeoutMs);
  }

  async expectWeeklyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.weekly), substring, timeoutMs);
  }

  async scrollWeeklyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.weekly));
  }

  async clickMay25May(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.may25May));
  }

  async doubleClickMay25May(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.may25May));
  }

  async expectMay25MayVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.may25May), expected, timeoutMs);
  }

  async expectMay25MayContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.may25May), substring, timeoutMs);
  }

  async scrollMay25MayIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.may25May));
  }

  async getInnerTextFilters(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.filters));
  }

  async expectFiltersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.filters), expected, timeoutMs);
  }

  async expectFiltersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.filters), substring, timeoutMs);
  }

  async scrollFiltersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.filters));
  }

  async getInnerTextActiveApprovedEpics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics));
  }

  async expectActiveApprovedEpicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.activeApprovedEpics), expected, timeoutMs);
  }

  async expectActiveApprovedEpicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.activeApprovedEpics), substring, timeoutMs);
  }

  async scrollActiveApprovedEpicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics));
  }

  async getInnerTextElement(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async expectElementVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element), expected, timeoutMs);
  }

  async expectElementContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element), substring, timeoutMs);
  }

  async scrollElementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async getInnerTextAllocatedEpics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.allocatedEpics));
  }

  async expectAllocatedEpicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.allocatedEpics), expected, timeoutMs);
  }

  async expectAllocatedEpicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.allocatedEpics), substring, timeoutMs);
  }

  async scrollAllocatedEpicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.allocatedEpics));
  }

  async getInnerTextElement2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async expectElement2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element2), expected, timeoutMs);
  }

  async expectElement2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element2), substring, timeoutMs);
  }

  async scrollElement2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async getInnerTextActiveResources(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.activeResources));
  }

  async expectActiveResourcesVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.activeResources), expected, timeoutMs);
  }

  async expectActiveResourcesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.activeResources), substring, timeoutMs);
  }

  async scrollActiveResourcesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.activeResources));
  }

  async getInnerTextElement3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element3));
  }

  async expectElement3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element3), expected, timeoutMs);
  }

  async expectElement3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element3), substring, timeoutMs);
  }

  async scrollElement3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element3));
  }

  async getInnerTextTotalResourceCost(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.totalResourceCost));
  }

  async expectTotalResourceCostVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.totalResourceCost), expected, timeoutMs);
  }

  async expectTotalResourceCostContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.totalResourceCost), substring, timeoutMs);
  }

  async scrollTotalResourceCostIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.totalResourceCost));
  }

  async getInnerTextElement4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element4));
  }

  async expectElement4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element4), expected, timeoutMs);
  }

  async expectElement4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element4), substring, timeoutMs);
  }

  async scrollElement4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element4));
  }

  async getInnerTextAllocation2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.allocation2));
  }

  async expectAllocation2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.allocation2), expected, timeoutMs);
  }

  async expectAllocation2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.allocation2), substring, timeoutMs);
  }

  async scrollAllocation2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.allocation2));
  }

  async getInnerTextElement5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element5));
  }

  async expectElement5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element5), expected, timeoutMs);
  }

  async expectElement5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element5), substring, timeoutMs);
  }

  async scrollElement5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element5));
  }

  async getInnerTextActualsConfirmedPreviousWeek(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek));
  }

  async expectActualsConfirmedPreviousWeekVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), expected, timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), substring, timeoutMs);
  }

  async scrollActualsConfirmedPreviousWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek));
  }

  async getInnerTextPreviousWeek(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek));
  }

  async expectPreviousWeekVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek), expected, timeoutMs);
  }

  async expectPreviousWeekContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek), substring, timeoutMs);
  }

  async scrollPreviousWeekIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek));
  }

  async getInnerTextElement6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element6));
  }

  async expectElement6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element6), expected, timeoutMs);
  }

  async expectElement6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element6), substring, timeoutMs);
  }

  async scrollElement6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element6));
  }

  async getInnerTextPreviousWeek2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek2));
  }

  async expectPreviousWeek2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek2), expected, timeoutMs);
  }

  async expectPreviousWeek2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek2), substring, timeoutMs);
  }

  async scrollPreviousWeek2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek2));
  }

  async getInnerTextEngagementScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.engagementScore));
  }

  async expectEngagementScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.engagementScore), expected, timeoutMs);
  }

  async expectEngagementScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.engagementScore), substring, timeoutMs);
  }

  async scrollEngagementScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.engagementScore));
  }

  async getInnerTextPlanScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.planScore));
  }

  async expectPlanScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.planScore), expected, timeoutMs);
  }

  async expectPlanScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.planScore), substring, timeoutMs);
  }

  async scrollPlanScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.planScore));
  }

  async getInnerTextActualsScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.actualsScore));
  }

  async expectActualsScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actualsScore), expected, timeoutMs);
  }

  async expectActualsScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actualsScore), substring, timeoutMs);
  }

  async scrollActualsScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actualsScore));
  }

  async getInnerTextPreviousWeek3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek3));
  }

  async expectPreviousWeek3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek3), expected, timeoutMs);
  }

  async expectPreviousWeek3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek3), substring, timeoutMs);
  }

  async scrollPreviousWeek3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek3));
  }

  async getInnerTextEpicScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicScore));
  }

  async expectEpicScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicScore), expected, timeoutMs);
  }

  async expectEpicScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicScore), substring, timeoutMs);
  }

  async scrollEpicScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicScore));
  }

  async getInnerTextAlignmentScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.alignmentScore));
  }

  async expectAlignmentScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.alignmentScore), expected, timeoutMs);
  }

  async expectAlignmentScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.alignmentScore), substring, timeoutMs);
  }

  async scrollAlignmentScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.alignmentScore));
  }

  async getInnerTextHealthScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.healthScore));
  }

  async expectHealthScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.healthScore), expected, timeoutMs);
  }

  async expectHealthScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.healthScore), substring, timeoutMs);
  }

  async scrollHealthScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.healthScore));
  }

  async getInnerTextPlanVsActualsVariance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance));
  }

  async expectPlanVsActualsVarianceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.planVsActualsVariance), expected, timeoutMs);
  }

  async expectPlanVsActualsVarianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.planVsActualsVariance), substring, timeoutMs);
  }

  async scrollPlanVsActualsVarianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance));
  }

  async getInnerTextPreviousWeek4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek4));
  }

  async expectPreviousWeek4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek4), expected, timeoutMs);
  }

  async expectPreviousWeek4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek4), substring, timeoutMs);
  }

  async scrollPreviousWeek4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek4));
  }

  async getInnerTextPlan(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.plan));
  }

  async expectPlanVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.plan), expected, timeoutMs);
  }

  async expectPlanContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.plan), substring, timeoutMs);
  }

  async scrollPlanIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.plan));
  }

  async getInnerTextAbsoluteVariance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.absoluteVariance));
  }

  async expectAbsoluteVarianceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.absoluteVariance), expected, timeoutMs);
  }

  async expectAbsoluteVarianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.absoluteVariance), substring, timeoutMs);
  }

  async scrollAbsoluteVarianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.absoluteVariance));
  }

  async getInnerTextTop5EpicsWith(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith));
  }

  async expectTop5EpicsWithVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.top5EpicsWith), expected, timeoutMs);
  }

  async expectTop5EpicsWithContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.top5EpicsWith), substring, timeoutMs);
  }

  async scrollTop5EpicsWithIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith));
  }

  async getInnerTextPreviousWeek5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek5));
  }

  async expectPreviousWeek5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek5), expected, timeoutMs);
  }

  async expectPreviousWeek5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek5), substring, timeoutMs);
  }

  async scrollPreviousWeek5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek5));
  }

  async getInnerTextTechDebtReduction(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.techDebtReduction));
  }

  async expectTechDebtReductionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.techDebtReduction), expected, timeoutMs);
  }

  async expectTechDebtReductionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.techDebtReduction), substring, timeoutMs);
  }

  async scrollTechDebtReductionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.techDebtReduction));
  }

  async getInnerTextRun(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.run));
  }

  async expectRunVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.run), expected, timeoutMs);
  }

  async expectRunContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.run), substring, timeoutMs);
  }

  async scrollRunIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.run));
  }

  async getInnerTextElement7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element7));
  }

  async expectElement7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element7), expected, timeoutMs);
  }

  async expectElement7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element7), substring, timeoutMs);
  }

  async scrollElement7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element7));
  }

  async getInnerTextElement8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element8));
  }

  async expectElement8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element8), expected, timeoutMs);
  }

  async expectElement8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element8), substring, timeoutMs);
  }

  async scrollElement8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element8));
  }

  async getInnerTextElement9(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element9));
  }

  async expectElement9Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element9), expected, timeoutMs);
  }

  async expectElement9ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element9), substring, timeoutMs);
  }

  async scrollElement9IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element9));
  }

  async getInnerTextAlphaDelta(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.alphaDelta));
  }

  async expectAlphaDeltaVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.alphaDelta), expected, timeoutMs);
  }

  async expectAlphaDeltaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.alphaDelta), substring, timeoutMs);
  }

  async scrollAlphaDeltaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.alphaDelta));
  }

  async getInnerTextTransform(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transform));
  }

  async expectTransformVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transform), expected, timeoutMs);
  }

  async expectTransformContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transform), substring, timeoutMs);
  }

  async scrollTransformIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transform));
  }

  async getInnerTextElement10(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element10));
  }

  async expectElement10Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element10), expected, timeoutMs);
  }

  async expectElement10ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element10), substring, timeoutMs);
  }

  async scrollElement10IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element10));
  }

  async getInnerTextElement11(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element11));
  }

  async expectElement11Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element11), expected, timeoutMs);
  }

  async expectElement11ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element11), substring, timeoutMs);
  }

  async scrollElement11IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element11));
  }

  async getInnerTextElement12(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element12));
  }

  async expectElement12Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element12), expected, timeoutMs);
  }

  async expectElement12ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element12), substring, timeoutMs);
  }

  async scrollElement12IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element12));
  }

  async getInnerTextCIOPTIMIZESTProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject));
  }

  async expectCIOPTIMIZESTProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), expected, timeoutMs);
  }

  async expectCIOPTIMIZESTProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), substring, timeoutMs);
  }

  async scrollCIOPTIMIZESTProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject));
  }

  async getInnerTextGrow(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.grow));
  }

  async expectGrowVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.grow), expected, timeoutMs);
  }

  async expectGrowContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.grow), substring, timeoutMs);
  }

  async scrollGrowIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.grow));
  }

  async getInnerTextElement13(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element13));
  }

  async expectElement13Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element13), expected, timeoutMs);
  }

  async expectElement13ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element13), substring, timeoutMs);
  }

  async scrollElement13IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element13));
  }

  async getInnerTextElement14(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element14));
  }

  async expectElement14Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element14), expected, timeoutMs);
  }

  async expectElement14ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element14), substring, timeoutMs);
  }

  async scrollElement14IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element14));
  }

  async getInnerTextElement15(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element15));
  }

  async expectElement15Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element15), expected, timeoutMs);
  }

  async expectElement15ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element15), substring, timeoutMs);
  }

  async scrollElement15IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element15));
  }

  async getInnerTextEdited1778133984231(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.edited1778133984231));
  }

  async expectEdited1778133984231Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.edited1778133984231), expected, timeoutMs);
  }

  async expectEdited1778133984231ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.edited1778133984231), substring, timeoutMs);
  }

  async scrollEdited1778133984231IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.edited1778133984231));
  }

  async getInnerTextRun2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.run2));
  }

  async expectRun2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.run2), expected, timeoutMs);
  }

  async expectRun2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.run2), substring, timeoutMs);
  }

  async scrollRun2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.run2));
  }

  async getInnerTextElement16(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element16));
  }

  async expectElement16Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element16), expected, timeoutMs);
  }

  async expectElement16ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element16), substring, timeoutMs);
  }

  async scrollElement16IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element16));
  }

  async getInnerTextElement17(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element17));
  }

  async expectElement17Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element17), expected, timeoutMs);
  }

  async expectElement17ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element17), substring, timeoutMs);
  }

  async scrollElement17IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element17));
  }

  async getInnerTextElement18(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element18));
  }

  async expectElement18Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element18), expected, timeoutMs);
  }

  async expectElement18ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element18), substring, timeoutMs);
  }

  async scrollElement18IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element18));
  }

  async getInnerTextEdited1778060111408(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.edited1778060111408));
  }

  async expectEdited1778060111408Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.edited1778060111408), expected, timeoutMs);
  }

  async expectEdited1778060111408ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.edited1778060111408), substring, timeoutMs);
  }

  async scrollEdited1778060111408IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.edited1778060111408));
  }

  async getInnerTextTransform2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transform2));
  }

  async expectTransform2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transform2), expected, timeoutMs);
  }

  async expectTransform2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transform2), substring, timeoutMs);
  }

  async scrollTransform2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transform2));
  }

  async getInnerTextElement19(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element19));
  }

  async expectElement19Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element19), expected, timeoutMs);
  }

  async expectElement19ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element19), substring, timeoutMs);
  }

  async scrollElement19IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element19));
  }

  async getInnerTextElement20(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element20));
  }

  async expectElement20Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element20), expected, timeoutMs);
  }

  async expectElement20ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element20), substring, timeoutMs);
  }

  async scrollElement20IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element20));
  }

  async getInnerTextElement21(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.element21));
  }

  async expectElement21Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.element21), expected, timeoutMs);
  }

  async expectElement21ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.element21), substring, timeoutMs);
  }

  async scrollElement21IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.element21));
  }

  async getInnerTextAllocationTrendsPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned));
  }

  async expectAllocationTrendsPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), expected, timeoutMs);
  }

  async expectAllocationTrendsPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), substring, timeoutMs);
  }

  async scrollAllocationTrendsPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned));
  }

  async getInnerTextTransformPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned));
  }

  async expectTransformPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transformPlanned), expected, timeoutMs);
  }

  async expectTransformPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transformPlanned), substring, timeoutMs);
  }

  async scrollTransformPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned));
  }

  async getInnerTextTransformPlanned2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned2));
  }

  async expectTransformPlanned2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transformPlanned2), expected, timeoutMs);
  }

  async expectTransformPlanned2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transformPlanned2), substring, timeoutMs);
  }

  async scrollTransformPlanned2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned2));
  }

  async getInnerTextTransformActual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transformActual));
  }

  async expectTransformActualVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transformActual), expected, timeoutMs);
  }

  async expectTransformActualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transformActual), substring, timeoutMs);
  }

  async scrollTransformActualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transformActual));
  }

  async getInnerTextTransformActual2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.transformActual2));
  }

  async expectTransformActual2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.transformActual2), expected, timeoutMs);
  }

  async expectTransformActual2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.transformActual2), substring, timeoutMs);
  }

  async scrollTransformActual2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.transformActual2));
  }

  async getInnerTextGrowPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned));
  }

  async expectGrowPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.growPlanned), expected, timeoutMs);
  }

  async expectGrowPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.growPlanned), substring, timeoutMs);
  }

  async scrollGrowPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned));
  }

  async getInnerTextGrowPlanned2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned2));
  }

  async expectGrowPlanned2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.growPlanned2), expected, timeoutMs);
  }

  async expectGrowPlanned2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.growPlanned2), substring, timeoutMs);
  }

  async scrollGrowPlanned2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned2));
  }

  async getInnerTextGrowActual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.growActual));
  }

  async expectGrowActualVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.growActual), expected, timeoutMs);
  }

  async expectGrowActualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.growActual), substring, timeoutMs);
  }

  async scrollGrowActualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.growActual));
  }

  async getInnerTextGrowActual2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.growActual2));
  }

  async expectGrowActual2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.growActual2), expected, timeoutMs);
  }

  async expectGrowActual2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.growActual2), substring, timeoutMs);
  }

  async scrollGrowActual2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.growActual2));
  }

  async getInnerTextRunPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned));
  }

  async expectRunPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.runPlanned), expected, timeoutMs);
  }

  async expectRunPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.runPlanned), substring, timeoutMs);
  }

  async scrollRunPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned));
  }

  async getInnerTextRunPlanned2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned2));
  }

  async expectRunPlanned2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.runPlanned2), expected, timeoutMs);
  }

  async expectRunPlanned2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.runPlanned2), substring, timeoutMs);
  }

  async scrollRunPlanned2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned2));
  }

  async getInnerTextRunActual(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.runActual));
  }

  async expectRunActualVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.runActual), expected, timeoutMs);
  }

  async expectRunActualContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.runActual), substring, timeoutMs);
  }

  async scrollRunActualIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.runActual));
  }

  async getInnerTextRunActual2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.runActual2));
  }

  async expectRunActual2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.runActual2), expected, timeoutMs);
  }

  async expectRunActual2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.runActual2), substring, timeoutMs);
  }

  async scrollRunActual2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.runActual2));
  }

  async getInnerTextWeeklyAllocationVsCapacity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity));
  }

  async expectWeeklyAllocationVsCapacityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), expected, timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), substring, timeoutMs);
  }

  async scrollWeeklyAllocationVsCapacityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity));
  }

  async getInnerTextAbc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.abc));
  }

  async expectAbcVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.abc), expected, timeoutMs);
  }

  async expectAbcContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.abc), substring, timeoutMs);
  }

  async scrollAbcIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.abc));
  }

  async getInnerTextKeyInitiative(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative));
  }

  async expectKeyInitiativeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.keyInitiative), expected, timeoutMs);
  }

  async expectKeyInitiativeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.keyInitiative), substring, timeoutMs);
  }

  async scrollKeyInitiativeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative));
  }

  async getInnerTextMaintenance(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.maintenance));
  }

  async expectMaintenanceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.maintenance), expected, timeoutMs);
  }

  async expectMaintenanceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.maintenance), substring, timeoutMs);
  }

  async scrollMaintenanceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.maintenance));
  }

  async getInnerTextOngoings(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.ongoings));
  }

  async expectOngoingsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.ongoings), expected, timeoutMs);
  }

  async expectOngoingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.ongoings), substring, timeoutMs);
  }

  async scrollOngoingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.ongoings));
  }

  async getInnerTextOperationalTasks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks));
  }

  async expectOperationalTasksVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.operationalTasks), expected, timeoutMs);
  }

  async expectOperationalTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.operationalTasks), substring, timeoutMs);
  }

  async scrollOperationalTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks));
  }

  async getInnerTextTest(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.test));
  }

  async expectTestVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.test), expected, timeoutMs);
  }

  async expectTestContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.test), substring, timeoutMs);
  }

  async scrollTestIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.test));
  }

  async getInnerTextCapacity(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.capacity));
  }

  async expectCapacityVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.capacity), expected, timeoutMs);
  }

  async expectCapacityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.capacity), substring, timeoutMs);
  }

  async scrollCapacityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.capacity));
  }

  async getInnerTextActiveApprovedEpics2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2));
  }

  async expectActiveApprovedEpics2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), expected, timeoutMs);
  }

  async expectActiveApprovedEpics2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), substring, timeoutMs);
  }

  async scrollActiveApprovedEpics2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2));
  }

  async getInnerTextActive(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.active));
  }

  async expectActiveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.active), expected, timeoutMs);
  }

  async expectActiveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.active), substring, timeoutMs);
  }

  async scrollActiveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.active));
  }

  async getInnerTextActive2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.active2));
  }

  async expectActive2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.active2), expected, timeoutMs);
  }

  async expectActive2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.active2), substring, timeoutMs);
  }

  async scrollActive2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.active2));
  }

  async getInnerTextApproved(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approved));
  }

  async expectApprovedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approved), expected, timeoutMs);
  }

  async expectApprovedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approved), substring, timeoutMs);
  }

  async scrollApprovedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approved));
  }

  async getInnerTextApproved2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approved2));
  }

  async expectApproved2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approved2), expected, timeoutMs);
  }

  async expectApproved2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approved2), substring, timeoutMs);
  }

  async scrollApproved2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approved2));
  }

  async getInnerTextTotalHeadcountBreakdown(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown));
  }

  async expectTotalHeadcountBreakdownVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), expected, timeoutMs);
  }

  async expectTotalHeadcountBreakdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), substring, timeoutMs);
  }

  async scrollTotalHeadcountBreakdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown));
  }

  async getInnerTextNewTestResource(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource));
  }

  async expectNewTestResourceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.newTestResource), expected, timeoutMs);
  }

  async expectNewTestResourceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.newTestResource), substring, timeoutMs);
  }

  async scrollNewTestResourceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource));
  }

  async getInnerTextNewTestResource2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource2));
  }

  async expectNewTestResource2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.newTestResource2), expected, timeoutMs);
  }

  async expectNewTestResource2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.newTestResource2), substring, timeoutMs);
  }

  async scrollNewTestResource2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource2));
  }

  async getInnerTextFinalIntegration(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration));
  }

  async expectFinalIntegrationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.finalIntegration), expected, timeoutMs);
  }

  async expectFinalIntegrationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.finalIntegration), substring, timeoutMs);
  }

  async scrollFinalIntegrationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration));
  }

  async getInnerTextFinalIntegration2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration2));
  }

  async expectFinalIntegration2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.finalIntegration2), expected, timeoutMs);
  }

  async expectFinalIntegration2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.finalIntegration2), substring, timeoutMs);
  }

  async scrollFinalIntegration2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration2));
  }

  async getInnerTextResourceTestType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType));
  }

  async expectResourceTestTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType), expected, timeoutMs);
  }

  async expectResourceTestTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType), substring, timeoutMs);
  }

  async scrollResourceTestTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType));
  }

  async getInnerTextResourceTestType2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2));
  }

  async expectResourceTestType2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType2), expected, timeoutMs);
  }

  async expectResourceTestType2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType2), substring, timeoutMs);
  }

  async scrollResourceTestType2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2));
  }

  async getInnerTextResourceTestType2Updated(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated));
  }

  async expectResourceTestType2UpdatedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), expected, timeoutMs);
  }

  async expectResourceTestType2UpdatedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), substring, timeoutMs);
  }

  async scrollResourceTestType2UpdatedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated));
  }

  async getInnerTextResourceTestType2Updated2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2));
  }

  async expectResourceTestType2Updated2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), expected, timeoutMs);
  }

  async expectResourceTestType2Updated2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), substring, timeoutMs);
  }

  async scrollResourceTestType2Updated2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2));
  }

  async getInnerTextResourceTestType3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType3));
  }

  async expectResourceTestType3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType3), expected, timeoutMs);
  }

  async expectResourceTestType3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType3), substring, timeoutMs);
  }

  async scrollResourceTestType3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType3));
  }

  async getInnerTextResourceTestType32(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType32));
  }

  async expectResourceTestType32Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.resourceTestType32), expected, timeoutMs);
  }

  async expectResourceTestType32ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.resourceTestType32), substring, timeoutMs);
  }

  async scrollResourceTestType32IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType32));
  }

  async getInnerTextFTE(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.fTE));
  }

  async expectFTEVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.fTE), expected, timeoutMs);
  }

  async expectFTEContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.fTE), substring, timeoutMs);
  }

  async scrollFTEIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.fTE));
  }

  async getInnerTextFTE2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.fTE2));
  }

  async expectFTE2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.fTE2), expected, timeoutMs);
  }

  async expectFTE2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.fTE2), substring, timeoutMs);
  }

  async scrollFTE2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.fTE2));
  }

  async getInnerTextIntegratedType(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.integratedType));
  }

  async expectIntegratedTypeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.integratedType), expected, timeoutMs);
  }

  async expectIntegratedTypeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.integratedType), substring, timeoutMs);
  }

  async scrollIntegratedTypeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.integratedType));
  }

  async getInnerTextIntegratedType2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.integratedType2));
  }

  async expectIntegratedType2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.integratedType2), expected, timeoutMs);
  }

  async expectIntegratedType2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.integratedType2), substring, timeoutMs);
  }

  async scrollIntegratedType2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.integratedType2));
  }

  async getInnerTextAllocationByProjectCategory(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory));
  }

  async expectAllocationByProjectCategoryVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), expected, timeoutMs);
  }

  async expectAllocationByProjectCategoryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), substring, timeoutMs);
  }

  async scrollAllocationByProjectCategoryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory));
  }

  async getInnerTextOngoings2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.ongoings2));
  }

  async expectOngoings2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.ongoings2), expected, timeoutMs);
  }

  async expectOngoings2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.ongoings2), substring, timeoutMs);
  }

  async scrollOngoings2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.ongoings2));
  }

  async getInnerTextOngoings3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.ongoings3));
  }

  async expectOngoings3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.ongoings3), expected, timeoutMs);
  }

  async expectOngoings3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.ongoings3), substring, timeoutMs);
  }

  async scrollOngoings3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.ongoings3));
  }

  async getInnerTextAbc2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.abc2));
  }

  async expectAbc2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.abc2), expected, timeoutMs);
  }

  async expectAbc2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.abc2), substring, timeoutMs);
  }

  async scrollAbc2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.abc2));
  }

  async getInnerTextAbc3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.abc3));
  }

  async expectAbc3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.abc3), expected, timeoutMs);
  }

  async expectAbc3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.abc3), substring, timeoutMs);
  }

  async scrollAbc3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.abc3));
  }

  async getInnerTextOperationalTasks2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks2));
  }

  async expectOperationalTasks2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.operationalTasks2), expected, timeoutMs);
  }

  async expectOperationalTasks2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.operationalTasks2), substring, timeoutMs);
  }

  async scrollOperationalTasks2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks2));
  }

  async getInnerTextOperationalTasks3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks3));
  }

  async expectOperationalTasks3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.operationalTasks3), expected, timeoutMs);
  }

  async expectOperationalTasks3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.operationalTasks3), substring, timeoutMs);
  }

  async scrollOperationalTasks3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks3));
  }

  async getInnerTextKeyInitiative2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative2));
  }

  async expectKeyInitiative2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.keyInitiative2), expected, timeoutMs);
  }

  async expectKeyInitiative2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.keyInitiative2), substring, timeoutMs);
  }

  async scrollKeyInitiative2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative2));
  }

  async getInnerTextKeyInitiative3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative3));
  }

  async expectKeyInitiative3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.keyInitiative3), expected, timeoutMs);
  }

  async expectKeyInitiative3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.keyInitiative3), substring, timeoutMs);
  }

  async scrollKeyInitiative3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative3));
  }

  async getInnerTextMaintenance2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.maintenance2));
  }

  async expectMaintenance2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.maintenance2), expected, timeoutMs);
  }

  async expectMaintenance2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.maintenance2), substring, timeoutMs);
  }

  async scrollMaintenance2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.maintenance2));
  }

  async getInnerTextMaintenance3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.maintenance3));
  }

  async expectMaintenance3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.maintenance3), expected, timeoutMs);
  }

  async expectMaintenance3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.maintenance3), substring, timeoutMs);
  }

  async scrollMaintenance3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.maintenance3));
  }

  async getInnerTextProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.project));
  }

  async expectProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.project), expected, timeoutMs);
  }

  async expectProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.project), substring, timeoutMs);
  }

  async scrollProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.project));
  }

  async getInnerTextProject2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.project2));
  }

  async expectProject2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.project2), expected, timeoutMs);
  }

  async expectProject2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.project2), substring, timeoutMs);
  }

  async scrollProject2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.project2));
  }

  async getInnerTextTest2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.test2));
  }

  async expectTest2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.test2), expected, timeoutMs);
  }

  async expectTest2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.test2), substring, timeoutMs);
  }

  async scrollTest2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.test2));
  }

  async getInnerTextTest3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.test3));
  }

  async expectTest3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.test3), expected, timeoutMs);
  }

  async expectTest3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.test3), substring, timeoutMs);
  }

  async scrollTest3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.test3));
  }

  async getInnerTextPercentageAllocationByEpic(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic));
  }

  async expectPercentageAllocationByEpicVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), expected, timeoutMs);
  }

  async expectPercentageAllocationByEpicContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), substring, timeoutMs);
  }

  async scrollPercentageAllocationByEpicIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic));
  }

  async getInnerTextActualsByCategoryPrevious(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious));
  }

  async expectActualsByCategoryPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), expected, timeoutMs);
  }

  async expectActualsByCategoryPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), substring, timeoutMs);
  }

  async scrollActualsByCategoryPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious));
  }

  async getInnerTextPreviousWeek6(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek6));
  }

  async expectPreviousWeek6Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek6), expected, timeoutMs);
  }

  async expectPreviousWeek6ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek6), substring, timeoutMs);
  }

  async scrollPreviousWeek6IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek6));
  }

  async getInnerTextApprovedWork(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork));
  }

  async expectApprovedWorkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approvedWork), expected, timeoutMs);
  }

  async expectApprovedWorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approvedWork), substring, timeoutMs);
  }

  async scrollApprovedWorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork));
  }

  async getInnerTextApprovedWork2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork2));
  }

  async expectApprovedWork2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approvedWork2), expected, timeoutMs);
  }

  async expectApprovedWork2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approvedWork2), substring, timeoutMs);
  }

  async scrollApprovedWork2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork2));
  }

  async getInnerTextUnplannedProjects(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects));
  }

  async expectUnplannedProjectsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.unplannedProjects), expected, timeoutMs);
  }

  async expectUnplannedProjectsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.unplannedProjects), substring, timeoutMs);
  }

  async scrollUnplannedProjectsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects));
  }

  async getInnerTextUnplannedProjects2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2));
  }

  async expectUnplannedProjects2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.unplannedProjects2), expected, timeoutMs);
  }

  async expectUnplannedProjects2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.unplannedProjects2), substring, timeoutMs);
  }

  async scrollUnplannedProjects2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2));
  }

  async getInnerTextOtherWork(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.otherWork));
  }

  async expectOtherWorkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.otherWork), expected, timeoutMs);
  }

  async expectOtherWorkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.otherWork), substring, timeoutMs);
  }

  async scrollOtherWorkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.otherWork));
  }

  async getInnerTextOtherWork2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.otherWork2));
  }

  async expectOtherWork2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.otherWork2), expected, timeoutMs);
  }

  async expectOtherWork2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.otherWork2), substring, timeoutMs);
  }

  async scrollOtherWork2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.otherWork2));
  }

  async getInnerTextPersonalTime(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.personalTime));
  }

  async expectPersonalTimeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.personalTime), expected, timeoutMs);
  }

  async expectPersonalTimeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.personalTime), substring, timeoutMs);
  }

  async scrollPersonalTimeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.personalTime));
  }

  async getInnerTextPersonalTime2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.personalTime2));
  }

  async expectPersonalTime2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.personalTime2), expected, timeoutMs);
  }

  async expectPersonalTime2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.personalTime2), substring, timeoutMs);
  }

  async scrollPersonalTime2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.personalTime2));
  }

  async getInnerTextEpicScoreByProject(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject));
  }

  async expectEpicScoreByProjectVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicScoreByProject), expected, timeoutMs);
  }

  async expectEpicScoreByProjectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicScoreByProject), substring, timeoutMs);
  }

  async scrollEpicScoreByProjectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject));
  }

  async getInnerTextPreviousWeek7(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek7));
  }

  async expectPreviousWeek7Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek7), expected, timeoutMs);
  }

  async expectPreviousWeek7ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek7), substring, timeoutMs);
  }

  async scrollPreviousWeek7IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek7));
  }

  async getInnerTextEpicAlignmentScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore));
  }

  async expectEpicAlignmentScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicAlignmentScore), expected, timeoutMs);
  }

  async expectEpicAlignmentScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicAlignmentScore), substring, timeoutMs);
  }

  async scrollEpicAlignmentScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore));
  }

  async getInnerTextEpicAlignmentScore2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2));
  }

  async expectEpicAlignmentScore2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), expected, timeoutMs);
  }

  async expectEpicAlignmentScore2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), substring, timeoutMs);
  }

  async scrollEpicAlignmentScore2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2));
  }

  async getInnerTextEpicHealthScore(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore));
  }

  async expectEpicHealthScoreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicHealthScore), expected, timeoutMs);
  }

  async expectEpicHealthScoreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicHealthScore), substring, timeoutMs);
  }

  async scrollEpicHealthScoreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore));
  }

  async getInnerTextEpicHealthScore2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2));
  }

  async expectEpicHealthScore2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.epicHealthScore2), expected, timeoutMs);
  }

  async expectEpicHealthScore2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.epicHealthScore2), substring, timeoutMs);
  }

  async scrollEpicHealthScore2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2));
  }

  async getInnerTextActualsConfirmationStatusPrevious(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious));
  }

  async expectActualsConfirmationStatusPreviousVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), expected, timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), substring, timeoutMs);
  }

  async scrollActualsConfirmationStatusPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious));
  }

  async getInnerTextPreviousWeek8(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek8));
  }

  async expectPreviousWeek8Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.previousWeek8), expected, timeoutMs);
  }

  async expectPreviousWeek8ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.previousWeek8), substring, timeoutMs);
  }

  async scrollPreviousWeek8IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek8));
  }

  async getInnerTextPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.planned));
  }

  async expectPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.planned), expected, timeoutMs);
  }

  async expectPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.planned), substring, timeoutMs);
  }

  async scrollPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.planned));
  }

  async getInnerTextPlanned2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.planned2));
  }

  async expectPlanned2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.planned2), expected, timeoutMs);
  }

  async expectPlanned2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.planned2), substring, timeoutMs);
  }

  async scrollPlanned2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.planned2));
  }

  async getInnerTextActualsTrend(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.actualsTrend));
  }

  async expectActualsTrendVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.actualsTrend), expected, timeoutMs);
  }

  async expectActualsTrendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.actualsTrend), substring, timeoutMs);
  }

  async scrollActualsTrendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.actualsTrend));
  }

  async getInnerTextPersonalTime3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.personalTime3));
  }

  async expectPersonalTime3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.personalTime3), expected, timeoutMs);
  }

  async expectPersonalTime3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.personalTime3), substring, timeoutMs);
  }

  async scrollPersonalTime3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.personalTime3));
  }

  async getInnerTextPersonalTime4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.personalTime4));
  }

  async expectPersonalTime4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.personalTime4), expected, timeoutMs);
  }

  async expectPersonalTime4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.personalTime4), substring, timeoutMs);
  }

  async scrollPersonalTime4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.personalTime4));
  }

  async getInnerTextOtherWork3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.otherWork3));
  }

  async expectOtherWork3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.otherWork3), expected, timeoutMs);
  }

  async expectOtherWork3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.otherWork3), substring, timeoutMs);
  }

  async scrollOtherWork3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.otherWork3));
  }

  async getInnerTextOtherWork4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.otherWork4));
  }

  async expectOtherWork4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.otherWork4), expected, timeoutMs);
  }

  async expectOtherWork4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.otherWork4), substring, timeoutMs);
  }

  async scrollOtherWork4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.otherWork4));
  }

  async getInnerTextUnplannedEpics(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics));
  }

  async expectUnplannedEpicsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.unplannedEpics), expected, timeoutMs);
  }

  async expectUnplannedEpicsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.unplannedEpics), substring, timeoutMs);
  }

  async scrollUnplannedEpicsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics));
  }

  async getInnerTextUnplannedEpics2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2));
  }

  async expectUnplannedEpics2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.unplannedEpics2), expected, timeoutMs);
  }

  async expectUnplannedEpics2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.unplannedEpics2), substring, timeoutMs);
  }

  async scrollUnplannedEpics2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2));
  }

  async getInnerTextApprovedWork3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork3));
  }

  async expectApprovedWork3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approvedWork3), expected, timeoutMs);
  }

  async expectApprovedWork3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approvedWork3), substring, timeoutMs);
  }

  async scrollApprovedWork3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork3));
  }

  async getInnerTextApprovedWork4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork4));
  }

  async expectApprovedWork4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, DashboardPage.L.approvedWork4), expected, timeoutMs);
  }

  async expectApprovedWork4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, DashboardPage.L.approvedWork4), substring, timeoutMs);
  }

  async scrollApprovedWork4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork4));
  }


  async clickEXECUTIVEDASHBOARD(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD));
  }

  async doubleClickEXECUTIVEDASHBOARD(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD));
  }

  async longPressEXECUTIVEDASHBOARD(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD));
  }

  async expectEXECUTIVEDASHBOARDValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), value, timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), timeoutMs);
  }

  async expectEXECUTIVEDASHBOARDCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.eXECUTIVEDASHBOARD), count, timeoutMs);
  }

  async longPressDashboard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.dashboard));
  }

  async expectDashboardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.dashboard), value, timeoutMs);
  }

  async expectDashboardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.dashboard), timeoutMs);
  }

  async expectDashboardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.dashboard), count, timeoutMs);
  }

  async longPressAllocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.allocation));
  }

  async expectAllocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.allocation), value, timeoutMs);
  }

  async expectAllocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.allocation), timeoutMs);
  }

  async expectAllocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.allocation), count, timeoutMs);
  }

  async longPressEpics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epics));
  }

  async expectEpicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epics), value, timeoutMs);
  }

  async expectEpicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epics), timeoutMs);
  }

  async expectEpicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epics), count, timeoutMs);
  }

  async longPressPeople(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.people));
  }

  async expectPeopleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.people), value, timeoutMs);
  }

  async expectPeopleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.people), timeoutMs);
  }

  async expectPeopleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.people), count, timeoutMs);
  }

  async longPressActuals(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actuals));
  }

  async expectActualsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actuals), value, timeoutMs);
  }

  async expectActualsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actuals), timeoutMs);
  }

  async expectActualsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actuals), count, timeoutMs);
  }

  async longPressReports(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.reports));
  }

  async expectReportsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.reports), value, timeoutMs);
  }

  async expectReportsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.reports), timeoutMs);
  }

  async expectReportsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.reports), count, timeoutMs);
  }

  async longPressOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.overview));
  }

  async expectOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.overview), value, timeoutMs);
  }

  async expectOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.overview), timeoutMs);
  }

  async expectOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.overview), count, timeoutMs);
  }

  async longPressTeams(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.teams));
  }

  async expectTeamsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.teams), value, timeoutMs);
  }

  async expectTeamsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.teams), timeoutMs);
  }

  async expectTeamsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.teams), count, timeoutMs);
  }

  async longPressCosts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.costs));
  }

  async expectCostsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.costs), value, timeoutMs);
  }

  async expectCostsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.costs), timeoutMs);
  }

  async expectCostsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.costs), count, timeoutMs);
  }

  async longPressWeekly(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.weekly));
  }

  async expectWeeklyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.weekly), value, timeoutMs);
  }

  async expectWeeklyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.weekly), timeoutMs);
  }

  async expectWeeklyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.weekly), count, timeoutMs);
  }

  async longPressMay25May(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.may25May));
  }

  async expectMay25MayValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.may25May), value, timeoutMs);
  }

  async expectMay25MayChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.may25May), timeoutMs);
  }

  async expectMay25MayCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.may25May), count, timeoutMs);
  }

  async clickFilters(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.filters));
  }

  async doubleClickFilters(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.filters));
  }

  async longPressFilters(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.filters));
  }

  async expectFiltersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.filters), value, timeoutMs);
  }

  async expectFiltersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.filters), timeoutMs);
  }

  async expectFiltersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.filters), count, timeoutMs);
  }

  async clickActiveApprovedEpics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics));
  }

  async doubleClickActiveApprovedEpics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics));
  }

  async longPressActiveApprovedEpics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics));
  }

  async expectActiveApprovedEpicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.activeApprovedEpics), value, timeoutMs);
  }

  async expectActiveApprovedEpicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.activeApprovedEpics), timeoutMs);
  }

  async expectActiveApprovedEpicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.activeApprovedEpics), count, timeoutMs);
  }

  async clickElement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async doubleClickElement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async longPressElement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element));
  }

  async expectElementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element), value, timeoutMs);
  }

  async expectElementEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element), timeoutMs);
  }

  async expectElementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element), count, timeoutMs);
  }

  async clickAllocatedEpics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.allocatedEpics));
  }

  async doubleClickAllocatedEpics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.allocatedEpics));
  }

  async longPressAllocatedEpics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.allocatedEpics));
  }

  async expectAllocatedEpicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.allocatedEpics), value, timeoutMs);
  }

  async expectAllocatedEpicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.allocatedEpics), timeoutMs);
  }

  async expectAllocatedEpicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.allocatedEpics), count, timeoutMs);
  }

  async clickElement2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async doubleClickElement2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async longPressElement2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element2));
  }

  async expectElement2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element2), value, timeoutMs);
  }

  async expectElement2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element2), timeoutMs);
  }

  async expectElement2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element2), count, timeoutMs);
  }

  async clickActiveResources(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.activeResources));
  }

  async doubleClickActiveResources(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.activeResources));
  }

  async longPressActiveResources(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.activeResources));
  }

  async expectActiveResourcesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.activeResources), value, timeoutMs);
  }

  async expectActiveResourcesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.activeResources), timeoutMs);
  }

  async expectActiveResourcesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.activeResources), count, timeoutMs);
  }

  async clickElement3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element3));
  }

  async doubleClickElement3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element3));
  }

  async longPressElement3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element3));
  }

  async expectElement3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element3), value, timeoutMs);
  }

  async expectElement3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element3), timeoutMs);
  }

  async expectElement3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element3), count, timeoutMs);
  }

  async clickTotalResourceCost(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.totalResourceCost));
  }

  async doubleClickTotalResourceCost(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.totalResourceCost));
  }

  async longPressTotalResourceCost(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.totalResourceCost));
  }

  async expectTotalResourceCostValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.totalResourceCost), value, timeoutMs);
  }

  async expectTotalResourceCostEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.totalResourceCost), timeoutMs);
  }

  async expectTotalResourceCostCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.totalResourceCost), count, timeoutMs);
  }

  async clickElement4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element4));
  }

  async doubleClickElement4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element4));
  }

  async longPressElement4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element4));
  }

  async expectElement4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element4), value, timeoutMs);
  }

  async expectElement4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element4), timeoutMs);
  }

  async expectElement4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element4), count, timeoutMs);
  }

  async clickAllocation2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.allocation2));
  }

  async doubleClickAllocation2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.allocation2));
  }

  async longPressAllocation2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.allocation2));
  }

  async expectAllocation2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.allocation2), value, timeoutMs);
  }

  async expectAllocation2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.allocation2), timeoutMs);
  }

  async expectAllocation2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.allocation2), count, timeoutMs);
  }

  async clickElement5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element5));
  }

  async doubleClickElement5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element5));
  }

  async longPressElement5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element5));
  }

  async expectElement5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element5), value, timeoutMs);
  }

  async expectElement5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element5), timeoutMs);
  }

  async expectElement5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element5), count, timeoutMs);
  }

  async clickActualsConfirmedPreviousWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek));
  }

  async doubleClickActualsConfirmedPreviousWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek));
  }

  async longPressActualsConfirmedPreviousWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek));
  }

  async expectActualsConfirmedPreviousWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), value, timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), timeoutMs);
  }

  async expectActualsConfirmedPreviousWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actualsConfirmedPreviousWeek), count, timeoutMs);
  }

  async clickPreviousWeek(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek));
  }

  async doubleClickPreviousWeek(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek));
  }

  async longPressPreviousWeek(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek));
  }

  async expectPreviousWeekValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek), value, timeoutMs);
  }

  async expectPreviousWeekEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek), timeoutMs);
  }

  async expectPreviousWeekCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek), count, timeoutMs);
  }

  async clickElement6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element6));
  }

  async doubleClickElement6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element6));
  }

  async longPressElement6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element6));
  }

  async expectElement6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element6), value, timeoutMs);
  }

  async expectElement6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element6), timeoutMs);
  }

  async expectElement6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element6), count, timeoutMs);
  }

  async clickPreviousWeek2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek2));
  }

  async doubleClickPreviousWeek2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek2));
  }

  async longPressPreviousWeek2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek2));
  }

  async expectPreviousWeek2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek2), value, timeoutMs);
  }

  async expectPreviousWeek2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek2), timeoutMs);
  }

  async expectPreviousWeek2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek2), count, timeoutMs);
  }

  async clickEngagementScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.engagementScore));
  }

  async doubleClickEngagementScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.engagementScore));
  }

  async longPressEngagementScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.engagementScore));
  }

  async expectEngagementScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.engagementScore), value, timeoutMs);
  }

  async expectEngagementScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.engagementScore), timeoutMs);
  }

  async expectEngagementScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.engagementScore), count, timeoutMs);
  }

  async clickPlanScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.planScore));
  }

  async doubleClickPlanScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.planScore));
  }

  async longPressPlanScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.planScore));
  }

  async expectPlanScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.planScore), value, timeoutMs);
  }

  async expectPlanScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.planScore), timeoutMs);
  }

  async expectPlanScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.planScore), count, timeoutMs);
  }

  async clickActualsScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actualsScore));
  }

  async doubleClickActualsScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actualsScore));
  }

  async longPressActualsScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actualsScore));
  }

  async expectActualsScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actualsScore), value, timeoutMs);
  }

  async expectActualsScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actualsScore), timeoutMs);
  }

  async expectActualsScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actualsScore), count, timeoutMs);
  }

  async clickPreviousWeek3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek3));
  }

  async doubleClickPreviousWeek3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek3));
  }

  async longPressPreviousWeek3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek3));
  }

  async expectPreviousWeek3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek3), value, timeoutMs);
  }

  async expectPreviousWeek3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek3), timeoutMs);
  }

  async expectPreviousWeek3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek3), count, timeoutMs);
  }

  async clickEpicScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicScore));
  }

  async doubleClickEpicScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicScore));
  }

  async longPressEpicScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicScore));
  }

  async expectEpicScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicScore), value, timeoutMs);
  }

  async expectEpicScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicScore), timeoutMs);
  }

  async expectEpicScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicScore), count, timeoutMs);
  }

  async clickAlignmentScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.alignmentScore));
  }

  async doubleClickAlignmentScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.alignmentScore));
  }

  async longPressAlignmentScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.alignmentScore));
  }

  async expectAlignmentScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.alignmentScore), value, timeoutMs);
  }

  async expectAlignmentScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.alignmentScore), timeoutMs);
  }

  async expectAlignmentScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.alignmentScore), count, timeoutMs);
  }

  async clickHealthScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.healthScore));
  }

  async doubleClickHealthScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.healthScore));
  }

  async longPressHealthScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.healthScore));
  }

  async expectHealthScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.healthScore), value, timeoutMs);
  }

  async expectHealthScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.healthScore), timeoutMs);
  }

  async expectHealthScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.healthScore), count, timeoutMs);
  }

  async clickPlanVsActualsVariance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance));
  }

  async doubleClickPlanVsActualsVariance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance));
  }

  async longPressPlanVsActualsVariance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.planVsActualsVariance));
  }

  async expectPlanVsActualsVarianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.planVsActualsVariance), value, timeoutMs);
  }

  async expectPlanVsActualsVarianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.planVsActualsVariance), timeoutMs);
  }

  async expectPlanVsActualsVarianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.planVsActualsVariance), count, timeoutMs);
  }

  async clickPreviousWeek4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek4));
  }

  async doubleClickPreviousWeek4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek4));
  }

  async longPressPreviousWeek4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek4));
  }

  async expectPreviousWeek4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek4), value, timeoutMs);
  }

  async expectPreviousWeek4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek4), timeoutMs);
  }

  async expectPreviousWeek4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek4), count, timeoutMs);
  }

  async clickPlan(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.plan));
  }

  async doubleClickPlan(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.plan));
  }

  async longPressPlan(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.plan));
  }

  async expectPlanValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.plan), value, timeoutMs);
  }

  async expectPlanEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.plan), timeoutMs);
  }

  async expectPlanCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.plan), count, timeoutMs);
  }

  async clickAbsoluteVariance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.absoluteVariance));
  }

  async doubleClickAbsoluteVariance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.absoluteVariance));
  }

  async longPressAbsoluteVariance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.absoluteVariance));
  }

  async expectAbsoluteVarianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.absoluteVariance), value, timeoutMs);
  }

  async expectAbsoluteVarianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.absoluteVariance), timeoutMs);
  }

  async expectAbsoluteVarianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.absoluteVariance), count, timeoutMs);
  }

  async clickTop5EpicsWith(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith));
  }

  async doubleClickTop5EpicsWith(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith));
  }

  async longPressTop5EpicsWith(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.top5EpicsWith));
  }

  async expectTop5EpicsWithValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.top5EpicsWith), value, timeoutMs);
  }

  async expectTop5EpicsWithEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.top5EpicsWith), timeoutMs);
  }

  async expectTop5EpicsWithCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.top5EpicsWith), count, timeoutMs);
  }

  async clickPreviousWeek5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek5));
  }

  async doubleClickPreviousWeek5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek5));
  }

  async longPressPreviousWeek5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek5));
  }

  async expectPreviousWeek5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek5), value, timeoutMs);
  }

  async expectPreviousWeek5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek5), timeoutMs);
  }

  async expectPreviousWeek5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek5), count, timeoutMs);
  }

  async clickTechDebtReduction(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.techDebtReduction));
  }

  async doubleClickTechDebtReduction(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.techDebtReduction));
  }

  async longPressTechDebtReduction(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.techDebtReduction));
  }

  async expectTechDebtReductionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.techDebtReduction), value, timeoutMs);
  }

  async expectTechDebtReductionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.techDebtReduction), timeoutMs);
  }

  async expectTechDebtReductionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.techDebtReduction), count, timeoutMs);
  }

  async clickRun(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.run));
  }

  async doubleClickRun(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.run));
  }

  async longPressRun(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.run));
  }

  async expectRunValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.run), value, timeoutMs);
  }

  async expectRunEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.run), timeoutMs);
  }

  async expectRunCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.run), count, timeoutMs);
  }

  async clickElement7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element7));
  }

  async doubleClickElement7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element7));
  }

  async longPressElement7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element7));
  }

  async expectElement7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element7), value, timeoutMs);
  }

  async expectElement7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element7), timeoutMs);
  }

  async expectElement7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element7), count, timeoutMs);
  }

  async clickElement8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element8));
  }

  async doubleClickElement8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element8));
  }

  async longPressElement8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element8));
  }

  async expectElement8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element8), value, timeoutMs);
  }

  async expectElement8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element8), timeoutMs);
  }

  async expectElement8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element8), count, timeoutMs);
  }

  async clickElement9(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element9));
  }

  async doubleClickElement9(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element9));
  }

  async longPressElement9(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element9));
  }

  async expectElement9Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element9), value, timeoutMs);
  }

  async expectElement9Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element9), timeoutMs);
  }

  async expectElement9Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element9), count, timeoutMs);
  }

  async clickAlphaDelta(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.alphaDelta));
  }

  async doubleClickAlphaDelta(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.alphaDelta));
  }

  async longPressAlphaDelta(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.alphaDelta));
  }

  async expectAlphaDeltaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.alphaDelta), value, timeoutMs);
  }

  async expectAlphaDeltaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.alphaDelta), timeoutMs);
  }

  async expectAlphaDeltaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.alphaDelta), count, timeoutMs);
  }

  async clickTransform(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transform));
  }

  async doubleClickTransform(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transform));
  }

  async longPressTransform(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transform));
  }

  async expectTransformValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transform), value, timeoutMs);
  }

  async expectTransformEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transform), timeoutMs);
  }

  async expectTransformCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transform), count, timeoutMs);
  }

  async clickElement10(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element10));
  }

  async doubleClickElement10(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element10));
  }

  async longPressElement10(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element10));
  }

  async expectElement10Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element10), value, timeoutMs);
  }

  async expectElement10Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element10), timeoutMs);
  }

  async expectElement10Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element10), count, timeoutMs);
  }

  async clickElement11(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element11));
  }

  async doubleClickElement11(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element11));
  }

  async longPressElement11(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element11));
  }

  async expectElement11Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element11), value, timeoutMs);
  }

  async expectElement11Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element11), timeoutMs);
  }

  async expectElement11Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element11), count, timeoutMs);
  }

  async clickElement12(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element12));
  }

  async doubleClickElement12(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element12));
  }

  async longPressElement12(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element12));
  }

  async expectElement12Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element12), value, timeoutMs);
  }

  async expectElement12Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element12), timeoutMs);
  }

  async expectElement12Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element12), count, timeoutMs);
  }

  async clickCIOPTIMIZESTProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject));
  }

  async doubleClickCIOPTIMIZESTProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject));
  }

  async longPressCIOPTIMIZESTProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject));
  }

  async expectCIOPTIMIZESTProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), value, timeoutMs);
  }

  async expectCIOPTIMIZESTProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), timeoutMs);
  }

  async expectCIOPTIMIZESTProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.cIOPTIMIZESTProject), count, timeoutMs);
  }

  async clickGrow(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.grow));
  }

  async doubleClickGrow(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.grow));
  }

  async longPressGrow(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.grow));
  }

  async expectGrowValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.grow), value, timeoutMs);
  }

  async expectGrowEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.grow), timeoutMs);
  }

  async expectGrowCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.grow), count, timeoutMs);
  }

  async clickElement13(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element13));
  }

  async doubleClickElement13(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element13));
  }

  async longPressElement13(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element13));
  }

  async expectElement13Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element13), value, timeoutMs);
  }

  async expectElement13Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element13), timeoutMs);
  }

  async expectElement13Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element13), count, timeoutMs);
  }

  async clickElement14(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element14));
  }

  async doubleClickElement14(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element14));
  }

  async longPressElement14(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element14));
  }

  async expectElement14Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element14), value, timeoutMs);
  }

  async expectElement14Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element14), timeoutMs);
  }

  async expectElement14Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element14), count, timeoutMs);
  }

  async clickElement15(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element15));
  }

  async doubleClickElement15(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element15));
  }

  async longPressElement15(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element15));
  }

  async expectElement15Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element15), value, timeoutMs);
  }

  async expectElement15Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element15), timeoutMs);
  }

  async expectElement15Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element15), count, timeoutMs);
  }

  async clickEdited1778133984231(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.edited1778133984231));
  }

  async doubleClickEdited1778133984231(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.edited1778133984231));
  }

  async longPressEdited1778133984231(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.edited1778133984231));
  }

  async expectEdited1778133984231Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.edited1778133984231), value, timeoutMs);
  }

  async expectEdited1778133984231Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.edited1778133984231), timeoutMs);
  }

  async expectEdited1778133984231Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.edited1778133984231), count, timeoutMs);
  }

  async clickRun2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.run2));
  }

  async doubleClickRun2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.run2));
  }

  async longPressRun2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.run2));
  }

  async expectRun2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.run2), value, timeoutMs);
  }

  async expectRun2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.run2), timeoutMs);
  }

  async expectRun2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.run2), count, timeoutMs);
  }

  async clickElement16(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element16));
  }

  async doubleClickElement16(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element16));
  }

  async longPressElement16(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element16));
  }

  async expectElement16Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element16), value, timeoutMs);
  }

  async expectElement16Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element16), timeoutMs);
  }

  async expectElement16Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element16), count, timeoutMs);
  }

  async clickElement17(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element17));
  }

  async doubleClickElement17(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element17));
  }

  async longPressElement17(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element17));
  }

  async expectElement17Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element17), value, timeoutMs);
  }

  async expectElement17Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element17), timeoutMs);
  }

  async expectElement17Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element17), count, timeoutMs);
  }

  async clickElement18(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element18));
  }

  async doubleClickElement18(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element18));
  }

  async longPressElement18(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element18));
  }

  async expectElement18Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element18), value, timeoutMs);
  }

  async expectElement18Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element18), timeoutMs);
  }

  async expectElement18Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element18), count, timeoutMs);
  }

  async clickEdited1778060111408(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.edited1778060111408));
  }

  async doubleClickEdited1778060111408(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.edited1778060111408));
  }

  async longPressEdited1778060111408(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.edited1778060111408));
  }

  async expectEdited1778060111408Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.edited1778060111408), value, timeoutMs);
  }

  async expectEdited1778060111408Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.edited1778060111408), timeoutMs);
  }

  async expectEdited1778060111408Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.edited1778060111408), count, timeoutMs);
  }

  async clickTransform2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transform2));
  }

  async doubleClickTransform2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transform2));
  }

  async longPressTransform2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transform2));
  }

  async expectTransform2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transform2), value, timeoutMs);
  }

  async expectTransform2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transform2), timeoutMs);
  }

  async expectTransform2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transform2), count, timeoutMs);
  }

  async clickElement19(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element19));
  }

  async doubleClickElement19(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element19));
  }

  async longPressElement19(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element19));
  }

  async expectElement19Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element19), value, timeoutMs);
  }

  async expectElement19Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element19), timeoutMs);
  }

  async expectElement19Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element19), count, timeoutMs);
  }

  async clickElement20(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element20));
  }

  async doubleClickElement20(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element20));
  }

  async longPressElement20(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element20));
  }

  async expectElement20Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element20), value, timeoutMs);
  }

  async expectElement20Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element20), timeoutMs);
  }

  async expectElement20Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element20), count, timeoutMs);
  }

  async clickElement21(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.element21));
  }

  async doubleClickElement21(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.element21));
  }

  async longPressElement21(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.element21));
  }

  async expectElement21Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.element21), value, timeoutMs);
  }

  async expectElement21Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.element21), timeoutMs);
  }

  async expectElement21Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.element21), count, timeoutMs);
  }

  async clickAllocationTrendsPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned));
  }

  async doubleClickAllocationTrendsPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned));
  }

  async longPressAllocationTrendsPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned));
  }

  async expectAllocationTrendsPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), value, timeoutMs);
  }

  async expectAllocationTrendsPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), timeoutMs);
  }

  async expectAllocationTrendsPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.allocationTrendsPlanned), count, timeoutMs);
  }

  async clickTransformPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned));
  }

  async doubleClickTransformPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned));
  }

  async longPressTransformPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned));
  }

  async expectTransformPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transformPlanned), value, timeoutMs);
  }

  async expectTransformPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transformPlanned), timeoutMs);
  }

  async expectTransformPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transformPlanned), count, timeoutMs);
  }

  async clickTransformPlanned2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned2));
  }

  async doubleClickTransformPlanned2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned2));
  }

  async longPressTransformPlanned2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transformPlanned2));
  }

  async expectTransformPlanned2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transformPlanned2), value, timeoutMs);
  }

  async expectTransformPlanned2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transformPlanned2), timeoutMs);
  }

  async expectTransformPlanned2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transformPlanned2), count, timeoutMs);
  }

  async clickTransformActual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transformActual));
  }

  async doubleClickTransformActual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transformActual));
  }

  async longPressTransformActual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transformActual));
  }

  async expectTransformActualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transformActual), value, timeoutMs);
  }

  async expectTransformActualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transformActual), timeoutMs);
  }

  async expectTransformActualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transformActual), count, timeoutMs);
  }

  async clickTransformActual2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.transformActual2));
  }

  async doubleClickTransformActual2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.transformActual2));
  }

  async longPressTransformActual2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.transformActual2));
  }

  async expectTransformActual2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.transformActual2), value, timeoutMs);
  }

  async expectTransformActual2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.transformActual2), timeoutMs);
  }

  async expectTransformActual2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.transformActual2), count, timeoutMs);
  }

  async clickGrowPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned));
  }

  async doubleClickGrowPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned));
  }

  async longPressGrowPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned));
  }

  async expectGrowPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.growPlanned), value, timeoutMs);
  }

  async expectGrowPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.growPlanned), timeoutMs);
  }

  async expectGrowPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.growPlanned), count, timeoutMs);
  }

  async clickGrowPlanned2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned2));
  }

  async doubleClickGrowPlanned2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned2));
  }

  async longPressGrowPlanned2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.growPlanned2));
  }

  async expectGrowPlanned2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.growPlanned2), value, timeoutMs);
  }

  async expectGrowPlanned2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.growPlanned2), timeoutMs);
  }

  async expectGrowPlanned2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.growPlanned2), count, timeoutMs);
  }

  async clickGrowActual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.growActual));
  }

  async doubleClickGrowActual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.growActual));
  }

  async longPressGrowActual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.growActual));
  }

  async expectGrowActualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.growActual), value, timeoutMs);
  }

  async expectGrowActualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.growActual), timeoutMs);
  }

  async expectGrowActualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.growActual), count, timeoutMs);
  }

  async clickGrowActual2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.growActual2));
  }

  async doubleClickGrowActual2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.growActual2));
  }

  async longPressGrowActual2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.growActual2));
  }

  async expectGrowActual2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.growActual2), value, timeoutMs);
  }

  async expectGrowActual2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.growActual2), timeoutMs);
  }

  async expectGrowActual2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.growActual2), count, timeoutMs);
  }

  async clickRunPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned));
  }

  async doubleClickRunPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned));
  }

  async longPressRunPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned));
  }

  async expectRunPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.runPlanned), value, timeoutMs);
  }

  async expectRunPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.runPlanned), timeoutMs);
  }

  async expectRunPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.runPlanned), count, timeoutMs);
  }

  async clickRunPlanned2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned2));
  }

  async doubleClickRunPlanned2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned2));
  }

  async longPressRunPlanned2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.runPlanned2));
  }

  async expectRunPlanned2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.runPlanned2), value, timeoutMs);
  }

  async expectRunPlanned2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.runPlanned2), timeoutMs);
  }

  async expectRunPlanned2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.runPlanned2), count, timeoutMs);
  }

  async clickRunActual(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.runActual));
  }

  async doubleClickRunActual(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.runActual));
  }

  async longPressRunActual(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.runActual));
  }

  async expectRunActualValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.runActual), value, timeoutMs);
  }

  async expectRunActualEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.runActual), timeoutMs);
  }

  async expectRunActualCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.runActual), count, timeoutMs);
  }

  async clickRunActual2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.runActual2));
  }

  async doubleClickRunActual2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.runActual2));
  }

  async longPressRunActual2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.runActual2));
  }

  async expectRunActual2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.runActual2), value, timeoutMs);
  }

  async expectRunActual2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.runActual2), timeoutMs);
  }

  async expectRunActual2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.runActual2), count, timeoutMs);
  }

  async clickWeeklyAllocationVsCapacity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity));
  }

  async doubleClickWeeklyAllocationVsCapacity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity));
  }

  async longPressWeeklyAllocationVsCapacity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity));
  }

  async expectWeeklyAllocationVsCapacityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), value, timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), timeoutMs);
  }

  async expectWeeklyAllocationVsCapacityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.weeklyAllocationVsCapacity), count, timeoutMs);
  }

  async clickAbc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.abc));
  }

  async doubleClickAbc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.abc));
  }

  async longPressAbc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.abc));
  }

  async expectAbcValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.abc), value, timeoutMs);
  }

  async expectAbcEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.abc), timeoutMs);
  }

  async expectAbcCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.abc), count, timeoutMs);
  }

  async clickKeyInitiative(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative));
  }

  async doubleClickKeyInitiative(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative));
  }

  async longPressKeyInitiative(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative));
  }

  async expectKeyInitiativeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.keyInitiative), value, timeoutMs);
  }

  async expectKeyInitiativeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.keyInitiative), timeoutMs);
  }

  async expectKeyInitiativeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.keyInitiative), count, timeoutMs);
  }

  async clickMaintenance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance));
  }

  async doubleClickMaintenance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance));
  }

  async longPressMaintenance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.maintenance));
  }

  async expectMaintenanceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.maintenance), value, timeoutMs);
  }

  async expectMaintenanceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.maintenance), timeoutMs);
  }

  async expectMaintenanceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.maintenance), count, timeoutMs);
  }

  async clickOngoings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings));
  }

  async doubleClickOngoings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings));
  }

  async longPressOngoings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.ongoings));
  }

  async expectOngoingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.ongoings), value, timeoutMs);
  }

  async expectOngoingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.ongoings), timeoutMs);
  }

  async expectOngoingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.ongoings), count, timeoutMs);
  }

  async clickOperationalTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks));
  }

  async doubleClickOperationalTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks));
  }

  async longPressOperationalTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks));
  }

  async expectOperationalTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.operationalTasks), value, timeoutMs);
  }

  async expectOperationalTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.operationalTasks), timeoutMs);
  }

  async expectOperationalTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.operationalTasks), count, timeoutMs);
  }

  async clickTest(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.test));
  }

  async doubleClickTest(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.test));
  }

  async longPressTest(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.test));
  }

  async expectTestValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.test), value, timeoutMs);
  }

  async expectTestEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.test), timeoutMs);
  }

  async expectTestCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.test), count, timeoutMs);
  }

  async clickCapacity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.capacity));
  }

  async doubleClickCapacity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.capacity));
  }

  async longPressCapacity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.capacity));
  }

  async expectCapacityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.capacity), value, timeoutMs);
  }

  async expectCapacityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.capacity), timeoutMs);
  }

  async expectCapacityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.capacity), count, timeoutMs);
  }

  async clickActiveApprovedEpics2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2));
  }

  async doubleClickActiveApprovedEpics2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2));
  }

  async longPressActiveApprovedEpics2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.activeApprovedEpics2));
  }

  async expectActiveApprovedEpics2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), value, timeoutMs);
  }

  async expectActiveApprovedEpics2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), timeoutMs);
  }

  async expectActiveApprovedEpics2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.activeApprovedEpics2), count, timeoutMs);
  }

  async clickActive(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.active));
  }

  async doubleClickActive(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.active));
  }

  async longPressActive(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.active));
  }

  async expectActiveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.active), value, timeoutMs);
  }

  async expectActiveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.active), timeoutMs);
  }

  async expectActiveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.active), count, timeoutMs);
  }

  async clickActive2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.active2));
  }

  async doubleClickActive2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.active2));
  }

  async longPressActive2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.active2));
  }

  async expectActive2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.active2), value, timeoutMs);
  }

  async expectActive2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.active2), timeoutMs);
  }

  async expectActive2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.active2), count, timeoutMs);
  }

  async clickApproved(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approved));
  }

  async doubleClickApproved(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approved));
  }

  async longPressApproved(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approved));
  }

  async expectApprovedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approved), value, timeoutMs);
  }

  async expectApprovedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approved), timeoutMs);
  }

  async expectApprovedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approved), count, timeoutMs);
  }

  async clickApproved2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approved2));
  }

  async doubleClickApproved2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approved2));
  }

  async longPressApproved2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approved2));
  }

  async expectApproved2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approved2), value, timeoutMs);
  }

  async expectApproved2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approved2), timeoutMs);
  }

  async expectApproved2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approved2), count, timeoutMs);
  }

  async clickTotalHeadcountBreakdown(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown));
  }

  async doubleClickTotalHeadcountBreakdown(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown));
  }

  async longPressTotalHeadcountBreakdown(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown));
  }

  async expectTotalHeadcountBreakdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), value, timeoutMs);
  }

  async expectTotalHeadcountBreakdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), timeoutMs);
  }

  async expectTotalHeadcountBreakdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.totalHeadcountBreakdown), count, timeoutMs);
  }

  async clickNewTestResource(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource));
  }

  async doubleClickNewTestResource(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource));
  }

  async longPressNewTestResource(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource));
  }

  async expectNewTestResourceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.newTestResource), value, timeoutMs);
  }

  async expectNewTestResourceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.newTestResource), timeoutMs);
  }

  async expectNewTestResourceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.newTestResource), count, timeoutMs);
  }

  async clickNewTestResource2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource2));
  }

  async doubleClickNewTestResource2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource2));
  }

  async longPressNewTestResource2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.newTestResource2));
  }

  async expectNewTestResource2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.newTestResource2), value, timeoutMs);
  }

  async expectNewTestResource2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.newTestResource2), timeoutMs);
  }

  async expectNewTestResource2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.newTestResource2), count, timeoutMs);
  }

  async clickFinalIntegration(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration));
  }

  async doubleClickFinalIntegration(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration));
  }

  async longPressFinalIntegration(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration));
  }

  async expectFinalIntegrationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.finalIntegration), value, timeoutMs);
  }

  async expectFinalIntegrationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.finalIntegration), timeoutMs);
  }

  async expectFinalIntegrationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.finalIntegration), count, timeoutMs);
  }

  async clickFinalIntegration2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration2));
  }

  async doubleClickFinalIntegration2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration2));
  }

  async longPressFinalIntegration2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.finalIntegration2));
  }

  async expectFinalIntegration2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.finalIntegration2), value, timeoutMs);
  }

  async expectFinalIntegration2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.finalIntegration2), timeoutMs);
  }

  async expectFinalIntegration2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.finalIntegration2), count, timeoutMs);
  }

  async clickResourceTestType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType));
  }

  async doubleClickResourceTestType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType));
  }

  async longPressResourceTestType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType));
  }

  async expectResourceTestTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType), value, timeoutMs);
  }

  async expectResourceTestTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType), timeoutMs);
  }

  async expectResourceTestTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType), count, timeoutMs);
  }

  async clickResourceTestType2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2));
  }

  async doubleClickResourceTestType2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2));
  }

  async longPressResourceTestType2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2));
  }

  async expectResourceTestType2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType2), value, timeoutMs);
  }

  async expectResourceTestType2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType2), timeoutMs);
  }

  async expectResourceTestType2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType2), count, timeoutMs);
  }

  async clickResourceTestType2Updated(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated));
  }

  async doubleClickResourceTestType2Updated(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated));
  }

  async longPressResourceTestType2Updated(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated));
  }

  async expectResourceTestType2UpdatedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), value, timeoutMs);
  }

  async expectResourceTestType2UpdatedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), timeoutMs);
  }

  async expectResourceTestType2UpdatedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType2Updated), count, timeoutMs);
  }

  async clickResourceTestType2Updated2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2));
  }

  async doubleClickResourceTestType2Updated2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2));
  }

  async longPressResourceTestType2Updated2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2));
  }

  async expectResourceTestType2Updated2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), value, timeoutMs);
  }

  async expectResourceTestType2Updated2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), timeoutMs);
  }

  async expectResourceTestType2Updated2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType2Updated2), count, timeoutMs);
  }

  async clickResourceTestType3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType3));
  }

  async doubleClickResourceTestType3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType3));
  }

  async longPressResourceTestType3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType3));
  }

  async expectResourceTestType3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType3), value, timeoutMs);
  }

  async expectResourceTestType3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType3), timeoutMs);
  }

  async expectResourceTestType3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType3), count, timeoutMs);
  }

  async clickResourceTestType32(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType32));
  }

  async doubleClickResourceTestType32(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType32));
  }

  async longPressResourceTestType32(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.resourceTestType32));
  }

  async expectResourceTestType32Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.resourceTestType32), value, timeoutMs);
  }

  async expectResourceTestType32Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.resourceTestType32), timeoutMs);
  }

  async expectResourceTestType32Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.resourceTestType32), count, timeoutMs);
  }

  async clickFTE(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.fTE));
  }

  async doubleClickFTE(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.fTE));
  }

  async longPressFTE(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.fTE));
  }

  async expectFTEValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.fTE), value, timeoutMs);
  }

  async expectFTEEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTEFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.fTE), timeoutMs);
  }

  async expectFTECount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.fTE), count, timeoutMs);
  }

  async clickFTE2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.fTE2));
  }

  async doubleClickFTE2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.fTE2));
  }

  async longPressFTE2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.fTE2));
  }

  async expectFTE2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.fTE2), value, timeoutMs);
  }

  async expectFTE2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.fTE2), timeoutMs);
  }

  async expectFTE2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.fTE2), count, timeoutMs);
  }

  async clickIntegratedType(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.integratedType));
  }

  async doubleClickIntegratedType(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.integratedType));
  }

  async longPressIntegratedType(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.integratedType));
  }

  async expectIntegratedTypeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.integratedType), value, timeoutMs);
  }

  async expectIntegratedTypeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.integratedType), timeoutMs);
  }

  async expectIntegratedTypeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.integratedType), count, timeoutMs);
  }

  async clickIntegratedType2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.integratedType2));
  }

  async doubleClickIntegratedType2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.integratedType2));
  }

  async longPressIntegratedType2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.integratedType2));
  }

  async expectIntegratedType2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.integratedType2), value, timeoutMs);
  }

  async expectIntegratedType2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.integratedType2), timeoutMs);
  }

  async expectIntegratedType2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.integratedType2), count, timeoutMs);
  }

  async clickAllocationByProjectCategory(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory));
  }

  async doubleClickAllocationByProjectCategory(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory));
  }

  async longPressAllocationByProjectCategory(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.allocationByProjectCategory));
  }

  async expectAllocationByProjectCategoryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), value, timeoutMs);
  }

  async expectAllocationByProjectCategoryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), timeoutMs);
  }

  async expectAllocationByProjectCategoryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.allocationByProjectCategory), count, timeoutMs);
  }

  async clickOngoings2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings2));
  }

  async doubleClickOngoings2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings2));
  }

  async longPressOngoings2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.ongoings2));
  }

  async expectOngoings2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.ongoings2), value, timeoutMs);
  }

  async expectOngoings2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.ongoings2), timeoutMs);
  }

  async expectOngoings2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.ongoings2), count, timeoutMs);
  }

  async clickOngoings3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings3));
  }

  async doubleClickOngoings3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.ongoings3));
  }

  async longPressOngoings3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.ongoings3));
  }

  async expectOngoings3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.ongoings3), value, timeoutMs);
  }

  async expectOngoings3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.ongoings3), timeoutMs);
  }

  async expectOngoings3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.ongoings3), count, timeoutMs);
  }

  async clickAbc2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.abc2));
  }

  async doubleClickAbc2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.abc2));
  }

  async longPressAbc2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.abc2));
  }

  async expectAbc2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.abc2), value, timeoutMs);
  }

  async expectAbc2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.abc2), timeoutMs);
  }

  async expectAbc2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.abc2), count, timeoutMs);
  }

  async clickAbc3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.abc3));
  }

  async doubleClickAbc3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.abc3));
  }

  async longPressAbc3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.abc3));
  }

  async expectAbc3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.abc3), value, timeoutMs);
  }

  async expectAbc3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.abc3), timeoutMs);
  }

  async expectAbc3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.abc3), count, timeoutMs);
  }

  async clickOperationalTasks2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks2));
  }

  async doubleClickOperationalTasks2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks2));
  }

  async longPressOperationalTasks2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks2));
  }

  async expectOperationalTasks2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.operationalTasks2), value, timeoutMs);
  }

  async expectOperationalTasks2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.operationalTasks2), timeoutMs);
  }

  async expectOperationalTasks2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.operationalTasks2), count, timeoutMs);
  }

  async clickOperationalTasks3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks3));
  }

  async doubleClickOperationalTasks3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks3));
  }

  async longPressOperationalTasks3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.operationalTasks3));
  }

  async expectOperationalTasks3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.operationalTasks3), value, timeoutMs);
  }

  async expectOperationalTasks3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.operationalTasks3), timeoutMs);
  }

  async expectOperationalTasks3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.operationalTasks3), count, timeoutMs);
  }

  async clickKeyInitiative2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative2));
  }

  async doubleClickKeyInitiative2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative2));
  }

  async longPressKeyInitiative2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative2));
  }

  async expectKeyInitiative2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.keyInitiative2), value, timeoutMs);
  }

  async expectKeyInitiative2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.keyInitiative2), timeoutMs);
  }

  async expectKeyInitiative2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.keyInitiative2), count, timeoutMs);
  }

  async clickKeyInitiative3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative3));
  }

  async doubleClickKeyInitiative3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative3));
  }

  async longPressKeyInitiative3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.keyInitiative3));
  }

  async expectKeyInitiative3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.keyInitiative3), value, timeoutMs);
  }

  async expectKeyInitiative3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.keyInitiative3), timeoutMs);
  }

  async expectKeyInitiative3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.keyInitiative3), count, timeoutMs);
  }

  async clickMaintenance2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance2));
  }

  async doubleClickMaintenance2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance2));
  }

  async longPressMaintenance2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.maintenance2));
  }

  async expectMaintenance2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.maintenance2), value, timeoutMs);
  }

  async expectMaintenance2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.maintenance2), timeoutMs);
  }

  async expectMaintenance2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.maintenance2), count, timeoutMs);
  }

  async clickMaintenance3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance3));
  }

  async doubleClickMaintenance3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.maintenance3));
  }

  async longPressMaintenance3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.maintenance3));
  }

  async expectMaintenance3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.maintenance3), value, timeoutMs);
  }

  async expectMaintenance3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.maintenance3), timeoutMs);
  }

  async expectMaintenance3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.maintenance3), count, timeoutMs);
  }

  async clickProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.project));
  }

  async doubleClickProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.project));
  }

  async longPressProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.project));
  }

  async expectProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.project), value, timeoutMs);
  }

  async expectProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.project), timeoutMs);
  }

  async expectProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.project), count, timeoutMs);
  }

  async clickProject2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.project2));
  }

  async doubleClickProject2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.project2));
  }

  async longPressProject2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.project2));
  }

  async expectProject2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.project2), value, timeoutMs);
  }

  async expectProject2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.project2), timeoutMs);
  }

  async expectProject2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.project2), count, timeoutMs);
  }

  async clickTest2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.test2));
  }

  async doubleClickTest2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.test2));
  }

  async longPressTest2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.test2));
  }

  async expectTest2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.test2), value, timeoutMs);
  }

  async expectTest2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.test2), timeoutMs);
  }

  async expectTest2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.test2), count, timeoutMs);
  }

  async clickTest3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.test3));
  }

  async doubleClickTest3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.test3));
  }

  async longPressTest3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.test3));
  }

  async expectTest3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.test3), value, timeoutMs);
  }

  async expectTest3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.test3), timeoutMs);
  }

  async expectTest3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.test3), count, timeoutMs);
  }

  async clickPercentageAllocationByEpic(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic));
  }

  async doubleClickPercentageAllocationByEpic(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic));
  }

  async longPressPercentageAllocationByEpic(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic));
  }

  async expectPercentageAllocationByEpicValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), value, timeoutMs);
  }

  async expectPercentageAllocationByEpicEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), timeoutMs);
  }

  async expectPercentageAllocationByEpicCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.percentageAllocationByEpic), count, timeoutMs);
  }

  async clickActualsByCategoryPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious));
  }

  async doubleClickActualsByCategoryPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious));
  }

  async longPressActualsByCategoryPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious));
  }

  async expectActualsByCategoryPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), value, timeoutMs);
  }

  async expectActualsByCategoryPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), timeoutMs);
  }

  async expectActualsByCategoryPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actualsByCategoryPrevious), count, timeoutMs);
  }

  async clickPreviousWeek6(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek6));
  }

  async doubleClickPreviousWeek6(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek6));
  }

  async longPressPreviousWeek6(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek6));
  }

  async expectPreviousWeek6Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek6), value, timeoutMs);
  }

  async expectPreviousWeek6Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek6), timeoutMs);
  }

  async expectPreviousWeek6Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek6), count, timeoutMs);
  }

  async clickApprovedWork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork));
  }

  async doubleClickApprovedWork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork));
  }

  async longPressApprovedWork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork));
  }

  async expectApprovedWorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approvedWork), value, timeoutMs);
  }

  async expectApprovedWorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approvedWork), timeoutMs);
  }

  async expectApprovedWorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approvedWork), count, timeoutMs);
  }

  async clickApprovedWork2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork2));
  }

  async doubleClickApprovedWork2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork2));
  }

  async longPressApprovedWork2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork2));
  }

  async expectApprovedWork2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approvedWork2), value, timeoutMs);
  }

  async expectApprovedWork2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approvedWork2), timeoutMs);
  }

  async expectApprovedWork2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approvedWork2), count, timeoutMs);
  }

  async clickUnplannedProjects(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects));
  }

  async doubleClickUnplannedProjects(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects));
  }

  async longPressUnplannedProjects(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects));
  }

  async expectUnplannedProjectsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.unplannedProjects), value, timeoutMs);
  }

  async expectUnplannedProjectsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.unplannedProjects), timeoutMs);
  }

  async expectUnplannedProjectsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.unplannedProjects), count, timeoutMs);
  }

  async clickUnplannedProjects2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2));
  }

  async doubleClickUnplannedProjects2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2));
  }

  async longPressUnplannedProjects2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.unplannedProjects2));
  }

  async expectUnplannedProjects2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.unplannedProjects2), value, timeoutMs);
  }

  async expectUnplannedProjects2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.unplannedProjects2), timeoutMs);
  }

  async expectUnplannedProjects2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.unplannedProjects2), count, timeoutMs);
  }

  async clickOtherWork(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork));
  }

  async doubleClickOtherWork(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork));
  }

  async longPressOtherWork(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.otherWork));
  }

  async expectOtherWorkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.otherWork), value, timeoutMs);
  }

  async expectOtherWorkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.otherWork), timeoutMs);
  }

  async expectOtherWorkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.otherWork), count, timeoutMs);
  }

  async clickOtherWork2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork2));
  }

  async doubleClickOtherWork2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork2));
  }

  async longPressOtherWork2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.otherWork2));
  }

  async expectOtherWork2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.otherWork2), value, timeoutMs);
  }

  async expectOtherWork2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.otherWork2), timeoutMs);
  }

  async expectOtherWork2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.otherWork2), count, timeoutMs);
  }

  async clickPersonalTime(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime));
  }

  async doubleClickPersonalTime(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime));
  }

  async longPressPersonalTime(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.personalTime));
  }

  async expectPersonalTimeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.personalTime), value, timeoutMs);
  }

  async expectPersonalTimeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.personalTime), timeoutMs);
  }

  async expectPersonalTimeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.personalTime), count, timeoutMs);
  }

  async clickPersonalTime2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime2));
  }

  async doubleClickPersonalTime2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime2));
  }

  async longPressPersonalTime2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.personalTime2));
  }

  async expectPersonalTime2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.personalTime2), value, timeoutMs);
  }

  async expectPersonalTime2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.personalTime2), timeoutMs);
  }

  async expectPersonalTime2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.personalTime2), count, timeoutMs);
  }

  async clickEpicScoreByProject(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject));
  }

  async doubleClickEpicScoreByProject(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject));
  }

  async longPressEpicScoreByProject(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicScoreByProject));
  }

  async expectEpicScoreByProjectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicScoreByProject), value, timeoutMs);
  }

  async expectEpicScoreByProjectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicScoreByProject), timeoutMs);
  }

  async expectEpicScoreByProjectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicScoreByProject), count, timeoutMs);
  }

  async clickPreviousWeek7(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek7));
  }

  async doubleClickPreviousWeek7(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek7));
  }

  async longPressPreviousWeek7(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek7));
  }

  async expectPreviousWeek7Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek7), value, timeoutMs);
  }

  async expectPreviousWeek7Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek7), timeoutMs);
  }

  async expectPreviousWeek7Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek7), count, timeoutMs);
  }

  async clickEpicAlignmentScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore));
  }

  async doubleClickEpicAlignmentScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore));
  }

  async longPressEpicAlignmentScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore));
  }

  async expectEpicAlignmentScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicAlignmentScore), value, timeoutMs);
  }

  async expectEpicAlignmentScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicAlignmentScore), timeoutMs);
  }

  async expectEpicAlignmentScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicAlignmentScore), count, timeoutMs);
  }

  async clickEpicAlignmentScore2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2));
  }

  async doubleClickEpicAlignmentScore2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2));
  }

  async longPressEpicAlignmentScore2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicAlignmentScore2));
  }

  async expectEpicAlignmentScore2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), value, timeoutMs);
  }

  async expectEpicAlignmentScore2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), timeoutMs);
  }

  async expectEpicAlignmentScore2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicAlignmentScore2), count, timeoutMs);
  }

  async clickEpicHealthScore(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore));
  }

  async doubleClickEpicHealthScore(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore));
  }

  async longPressEpicHealthScore(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore));
  }

  async expectEpicHealthScoreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicHealthScore), value, timeoutMs);
  }

  async expectEpicHealthScoreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicHealthScore), timeoutMs);
  }

  async expectEpicHealthScoreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicHealthScore), count, timeoutMs);
  }

  async clickEpicHealthScore2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2));
  }

  async doubleClickEpicHealthScore2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2));
  }

  async longPressEpicHealthScore2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.epicHealthScore2));
  }

  async expectEpicHealthScore2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.epicHealthScore2), value, timeoutMs);
  }

  async expectEpicHealthScore2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.epicHealthScore2), timeoutMs);
  }

  async expectEpicHealthScore2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.epicHealthScore2), count, timeoutMs);
  }

  async clickActualsConfirmationStatusPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious));
  }

  async doubleClickActualsConfirmationStatusPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious));
  }

  async longPressActualsConfirmationStatusPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious));
  }

  async expectActualsConfirmationStatusPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), value, timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), timeoutMs);
  }

  async expectActualsConfirmationStatusPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actualsConfirmationStatusPrevious), count, timeoutMs);
  }

  async clickPreviousWeek8(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek8));
  }

  async doubleClickPreviousWeek8(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek8));
  }

  async longPressPreviousWeek8(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.previousWeek8));
  }

  async expectPreviousWeek8Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.previousWeek8), value, timeoutMs);
  }

  async expectPreviousWeek8Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.previousWeek8), timeoutMs);
  }

  async expectPreviousWeek8Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.previousWeek8), count, timeoutMs);
  }

  async clickPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.planned));
  }

  async doubleClickPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.planned));
  }

  async longPressPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.planned));
  }

  async expectPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.planned), value, timeoutMs);
  }

  async expectPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.planned), timeoutMs);
  }

  async expectPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.planned), count, timeoutMs);
  }

  async clickPlanned2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.planned2));
  }

  async doubleClickPlanned2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.planned2));
  }

  async longPressPlanned2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.planned2));
  }

  async expectPlanned2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.planned2), value, timeoutMs);
  }

  async expectPlanned2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.planned2), timeoutMs);
  }

  async expectPlanned2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.planned2), count, timeoutMs);
  }

  async clickActualsTrend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.actualsTrend));
  }

  async doubleClickActualsTrend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.actualsTrend));
  }

  async longPressActualsTrend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.actualsTrend));
  }

  async expectActualsTrendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.actualsTrend), value, timeoutMs);
  }

  async expectActualsTrendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.actualsTrend), timeoutMs);
  }

  async expectActualsTrendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.actualsTrend), count, timeoutMs);
  }

  async clickPersonalTime3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime3));
  }

  async doubleClickPersonalTime3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime3));
  }

  async longPressPersonalTime3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.personalTime3));
  }

  async expectPersonalTime3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.personalTime3), value, timeoutMs);
  }

  async expectPersonalTime3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.personalTime3), timeoutMs);
  }

  async expectPersonalTime3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.personalTime3), count, timeoutMs);
  }

  async clickPersonalTime4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime4));
  }

  async doubleClickPersonalTime4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.personalTime4));
  }

  async longPressPersonalTime4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.personalTime4));
  }

  async expectPersonalTime4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.personalTime4), value, timeoutMs);
  }

  async expectPersonalTime4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.personalTime4), timeoutMs);
  }

  async expectPersonalTime4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.personalTime4), count, timeoutMs);
  }

  async clickOtherWork3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork3));
  }

  async doubleClickOtherWork3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork3));
  }

  async longPressOtherWork3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.otherWork3));
  }

  async expectOtherWork3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.otherWork3), value, timeoutMs);
  }

  async expectOtherWork3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.otherWork3), timeoutMs);
  }

  async expectOtherWork3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.otherWork3), count, timeoutMs);
  }

  async clickOtherWork4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork4));
  }

  async doubleClickOtherWork4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.otherWork4));
  }

  async longPressOtherWork4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.otherWork4));
  }

  async expectOtherWork4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.otherWork4), value, timeoutMs);
  }

  async expectOtherWork4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.otherWork4), timeoutMs);
  }

  async expectOtherWork4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.otherWork4), count, timeoutMs);
  }

  async clickUnplannedEpics(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics));
  }

  async doubleClickUnplannedEpics(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics));
  }

  async longPressUnplannedEpics(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics));
  }

  async expectUnplannedEpicsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.unplannedEpics), value, timeoutMs);
  }

  async expectUnplannedEpicsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.unplannedEpics), timeoutMs);
  }

  async expectUnplannedEpicsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.unplannedEpics), count, timeoutMs);
  }

  async clickUnplannedEpics2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2));
  }

  async doubleClickUnplannedEpics2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2));
  }

  async longPressUnplannedEpics2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.unplannedEpics2));
  }

  async expectUnplannedEpics2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.unplannedEpics2), value, timeoutMs);
  }

  async expectUnplannedEpics2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.unplannedEpics2), timeoutMs);
  }

  async expectUnplannedEpics2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.unplannedEpics2), count, timeoutMs);
  }

  async clickApprovedWork3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork3));
  }

  async doubleClickApprovedWork3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork3));
  }

  async longPressApprovedWork3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork3));
  }

  async expectApprovedWork3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approvedWork3), value, timeoutMs);
  }

  async expectApprovedWork3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approvedWork3), timeoutMs);
  }

  async expectApprovedWork3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approvedWork3), count, timeoutMs);
  }

  async clickApprovedWork4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork4));
  }

  async doubleClickApprovedWork4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork4));
  }

  async longPressApprovedWork4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, DashboardPage.L.approvedWork4));
  }

  async expectApprovedWork4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, DashboardPage.L.approvedWork4), value, timeoutMs);
  }

  async expectApprovedWork4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, DashboardPage.L.approvedWork4), timeoutMs);
  }

  async expectApprovedWork4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, DashboardPage.L.approvedWork4), count, timeoutMs);
  }

}
