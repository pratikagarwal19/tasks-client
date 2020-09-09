import { TestBed } from '@angular/core/testing';

import { TestFetchService } from './test-fetch.service';

describe('TestFetchService', () => {
  let service: TestFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
