import { SchedulingPage } from './app.po';

describe('CPU Scheduling App', function() {
  let page: SchedulingPage;

  beforeEach(() => {
    page = new SchedulingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sch works!');
  });
});
