import { TestBed } from '@angular/core/testing';

import { AbtServiceService } from './abt-service.service';

describe('AbtServiceService', () => {
  let service: AbtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
