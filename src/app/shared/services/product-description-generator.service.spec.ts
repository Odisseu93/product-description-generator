import { TestBed } from '@angular/core/testing';

import { ProductDescriptionGeneratorService } from './product-description-generator.service';

describe('ProductDescriptionGeneratorService', () => {
  let service: ProductDescriptionGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDescriptionGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
