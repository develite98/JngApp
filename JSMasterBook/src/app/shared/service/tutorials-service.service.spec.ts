import { TestBed } from '@angular/core/testing';

import { TutorialsServiceService } from './tutorials-service.service';

describe('TutorialsServiceService', () => {
  let service: TutorialsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
