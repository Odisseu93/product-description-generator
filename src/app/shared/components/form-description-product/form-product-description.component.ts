import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ProductDescriptionResultComponent } from '../product-description-result/product-description-result.component'
import { Product } from './types/product.type'

@Component({
  selector: 'app-form-product-description',
  standalone: true,
  imports: [ReactiveFormsModule, ProductDescriptionResultComponent],
  templateUrl: './form-product-description.component.html',
  styleUrl: './form-product-description.component.scss',
})
export class FormProductDescriptionComponent {
  private product: Product = {
    name: '',
    category: '',
    info: '',
  }

  productForm = this.formBuilder.group(this.product)

  constructor(private formBuilder: FormBuilder) {}

  handleSubmit() {
    console.log(this.productForm.value)
  }
}
