import { AngularmorePage } from './app.po';

describe('angularmore App', function() {
  let page: AngularmorePage;

  beforeEach(() => {
    page = new AngularmorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
