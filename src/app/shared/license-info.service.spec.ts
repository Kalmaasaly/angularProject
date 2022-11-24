import { TestBed } from '@angular/core/testing';

import { LicenseInfoService } from './license-info.service';

describe('LicenseInfoService', () => {
  let service: LicenseInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
