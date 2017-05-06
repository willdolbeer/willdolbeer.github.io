import { WilldolbeerPage } from './app.po';

describe('willdolbeer App', () => {
  let page: WilldolbeerPage;

  beforeEach(() => {
    page = new WilldolbeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
