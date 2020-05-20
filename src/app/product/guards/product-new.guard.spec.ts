import { TestBed } from '@angular/core/testing';

import { ProductNewGuard } from './product-new.guard';

describe('ProductNewGuard', () => {
  let guard: ProductNewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductNewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
