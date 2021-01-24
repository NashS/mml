import { TestBed } from '@angular/core/testing';

import { HomeworkContentService } from './homework-content.service';

describe('HomeworkContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeworkContentService = TestBed.get(HomeworkContentService);
    expect(service).toBeTruthy();
  });
});
