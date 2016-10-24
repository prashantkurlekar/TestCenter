/* tslint:disable:no-unused-variable */

import { browser, element, by } from 'protractor';

export class NgTestSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
