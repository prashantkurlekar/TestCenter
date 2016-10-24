/* tslint:disable:no-unused-variable */

import { NgTestSamplePage } from './app.po';

describe('ng-test-sample App', function() {
  let page: NgTestSamplePage;

  beforeEach(() => {
    page = new NgTestSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
