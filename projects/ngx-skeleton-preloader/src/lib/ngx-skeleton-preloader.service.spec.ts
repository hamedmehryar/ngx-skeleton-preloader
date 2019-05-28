import { TestBed } from '@angular/core/testing';

import { NgxSkeletonPreloaderService } from './ngx-skeleton-preloader.service';

describe('NgxSkeletonPreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSkeletonPreloaderService = TestBed.get(NgxSkeletonPreloaderService);
    expect(service).toBeTruthy();
  });
});
