import { TestBed } from '@angular/core/testing';

import { ExtClassService } from './ext-class.service';

describe('ExtClassService', () => {
  let service: ExtClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
