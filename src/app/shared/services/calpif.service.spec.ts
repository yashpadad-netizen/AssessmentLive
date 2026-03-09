import { TestBed } from '@angular/core/testing';

import { CalpifService } from './calpif.service';

describe('CalpifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalpifService = TestBed.get(CalpifService);
    expect(service).toBeTruthy();
  });
});
