import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-form-product-description',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-product-description.component.html',
  styleUrl: './form-product-description.component.scss',
})
export class FormProductDescriptionComponent {
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
