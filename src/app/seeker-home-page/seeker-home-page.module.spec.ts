import { SeekerHomePageModule } from './seeker-home-page.module';

describe('SeekerHomePageModule', () => {
  let seekerHomePageModule: SeekerHomePageModule;

  beforeEach(() => {
    seekerHomePageModule = new SeekerHomePageModule();
  });

  it('should create an instance', () => {
    expect(seekerHomePageModule).toBeTruthy();
  });
});
