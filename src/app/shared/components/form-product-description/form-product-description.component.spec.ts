import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormProductDescriptionComponent } from './form-product-description.component'

describe('FormDescriptionProductComponent', () => {
  let component: FormProductDescriptionComponent
  let fixture: ComponentFixture<FormProductDescriptionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormProductDescriptionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FormProductDescriptionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
