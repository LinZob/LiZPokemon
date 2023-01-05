import { TestBed } from '@angular/core/testing';

import { PokeHttpService } from './poke-http.service';

describe('PokeHttpService', () => {
  let service: PokeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
