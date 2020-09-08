import { TestBed } from '@angular/core/testing';

import { BannerContentService } from './banner-content.service';

describe('BannerContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannerContentService = TestBed.get(BannerContentService);
    expect(service).toBeTruthy();
  });
});
