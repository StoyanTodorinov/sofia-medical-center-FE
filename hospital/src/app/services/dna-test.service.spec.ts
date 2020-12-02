import { TestBed } from '@angular/core/testing';

import { DnaTestService } from './dna-test.service';

describe('DnaTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DnaTestService = TestBed.get(DnaTestService);
    expect(service).toBeTruthy();
  });
});
