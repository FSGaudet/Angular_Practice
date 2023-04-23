import { TestBed } from '@angular/core/testing';

import { GoodDetailGuard } from './good-detail.guard';

describe('GoodDetailGuard', () => {
  let guard: GoodDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoodDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
