import { TestBed } from '@angular/core/testing';

import { SummarySectionService } from './summary-section.service';

describe('SummarySectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummarySectionService = TestBed.get(SummarySectionService);
    expect(service).toBeTruthy();
  });
});
