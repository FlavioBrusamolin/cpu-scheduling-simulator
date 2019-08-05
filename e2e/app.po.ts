import { browser, element, by } from 'protractor';

export class SchedulingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sch-root h1')).getText();
  }
}
