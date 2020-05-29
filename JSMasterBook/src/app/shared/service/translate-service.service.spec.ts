import { TestBed } from '@angular/core/testing';

import { TranslateServiceService } from './translate-service.service';

describe('TranslateServiceService', () => {
  let service: TranslateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
