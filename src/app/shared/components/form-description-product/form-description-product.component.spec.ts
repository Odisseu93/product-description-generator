import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormDescriptionProductComponent } from './form-description-product.component'

describe('FormDescriptionProductComponent', () => {
  let component: FormDescriptionProductComponent
  let fixture: ComponentFixture<FormDescriptionProductComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDescriptionProductComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FormDescriptionProductComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
