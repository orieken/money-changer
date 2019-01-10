import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to money-changer!');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to money-changer!');
  });

  it('totals should be 0', async () => {
    page.navigateTo();
    const message = await page.totals.getText();
    expect(message.match(/\d+/)[0]).toEqual('0');
  });

  it('totals should be 0', async () => {
    page.navigateTo();
    const message = await page.totals.getText();
    const totalCount = message.match(/\d+/)[0];
    const permutationCount = message.match(/\d+/)[1];
    expect(totalCount).toEqual('0');
    expect(permutationCount).not.toBeDefined();
  });
});
