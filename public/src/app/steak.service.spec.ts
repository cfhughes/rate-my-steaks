import { TestBed } from '@angular/core/testing';

import { SteakService } from './steak.service';

describe('SteakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SteakService = TestBed.get(SteakService);
    expect(service).toBeTruthy();
  });
});
