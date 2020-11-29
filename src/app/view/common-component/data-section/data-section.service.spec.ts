import { TestBed } from '@angular/core/testing';

import { DataSectionService } from './data-section.service';

describe('DataSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSectionService = TestBed.get(DataSectionService);
    expect(service).toBeTruthy();
  });
});
