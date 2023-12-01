import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductDescriptionResultComponent } from './product-description-result.component'

describe('ProductDescriptionResultComponent', () => {
  let component: ProductDescriptionResultComponent
  let fixture: ComponentFixture<ProductDescriptionResultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDescriptionResultComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductDescriptionResultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
