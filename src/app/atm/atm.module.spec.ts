import { ATMModule } from './atm.module';

describe('ATMModule', () => {
  let aTMModule: ATMModule;

  beforeEach(() => {
    aTMModule = new ATMModule();
  });

  it('should create an instance', () => {
    expect(aTMModule).toBeTruthy();
  });
});
