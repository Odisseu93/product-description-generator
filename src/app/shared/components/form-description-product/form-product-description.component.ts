import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-form-product-description',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-product-description.component.html',
  styleUrl: './form-product-description.component.scss',
})
export class FormProductDescriptionComponent {
  productForm: FormGroup
  formValidationError: Array<object> = []

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      info: '',
    })
  }

  validate() {
    const form = this.productForm

    function isRequired(fieldName: string) {
      return form.value[fieldName].length > 0
    }

    function isInvalid(fieldName: string) {
      return form.controls[fieldName].invalid
    }

    return {
      isRequire: isRequired,
      isInvalid,
    }
  }

  handleSubmit() {
    if (this.productForm.invalid) {
      for (const [key, value] of Object.entries(this.productForm.controls)) {
        value.invalid &&
          this.formValidationError.push({
            controlName: key,
            type: value.errors,
          })
      }
      throw new Error(
        `formValidationErrors: ${JSON.stringify(this.formValidationError)}`
      )
    }
    console.log(this.productForm)
  }
}
