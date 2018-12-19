import { MobilePartModule } from './mobile-part.module';

describe('MobilePartModule', () => {
  let mobilePartModule: MobilePartModule;

  beforeEach(() => {
    mobilePartModule = new MobilePartModule();
  });

  it('should create an instance', () => {
    expect(mobilePartModule).toBeTruthy();
  });
});
