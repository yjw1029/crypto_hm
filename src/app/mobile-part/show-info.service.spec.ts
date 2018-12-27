import { TestBed, inject } from '@angular/core/testing';

import { ShowInfoService } from './show-info.service';

describe('ShowInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowInfoService]
    });
  });

  it('should be created', inject([ShowInfoService], (service: ShowInfoService) => {
    expect(service).toBeTruthy();
  }));
});
