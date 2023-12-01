import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-form-description-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-description-product.component.html',
  styleUrl: './form-description-product.component.scss',
})
export class FormDescriptionProductComponent {
  productForm = this.formBuilder.group({
    name: '',
    category: '',
    info: '',
  })

  constructor(private formBuilder: FormBuilder) {}

  handleSubmit() {
    console.log(this.productForm.value)
  }
}
