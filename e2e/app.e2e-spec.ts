import { AngularJs4.0Page } from './app.po';

describe('angular-js4.0 App', () => {
  let page: AngularJs4.0Page;

  beforeEach(() => {
    page = new AngularJs4.0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
