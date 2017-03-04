import { RndPage } from './app.po';

describe('rnd App', () => {
  let page: RndPage;

  beforeEach(() => {
    page = new RndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
