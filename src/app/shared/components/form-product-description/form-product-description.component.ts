import { Component, Output } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ProductDescriptionGeneratorService } from '../../services/product-description-generator.service'
import { HttpClientModule } from '@angular/common/http'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-form-product-description',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './form-product-description.component.html',
  styleUrl: './form-product-description.component.scss',
})
export class FormProductDescriptionComponent {
  productForm: FormGroup
  formValidationError: Array<object> = []
  requestLoading: boolean = false
  charTotal: number = 0

  @Output() description: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private toasty: ToastrService,
    private genereteDescriptionService: ProductDescriptionGeneratorService
  ) {
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

  countCharacters() {
    this.charTotal = this.productForm.value.info.length || 0
  }

  handleClear() {
    this.requestLoading = false
    this.description = ''
    this.charTotal = 0
    this.toasty.info('Tudo limpo!')
    setTimeout(() => {
      this.productForm.reset()
    }, 100)
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

    this.requestLoading = true
    this.genereteDescriptionService
      .generate({
        name: this.productForm.value.name,
        category: this.productForm.value.category,
        additionalInformation: this.productForm.value.additionalInformation,
      })
      .subscribe({
        next: (response) => {
          this.description = response.description
          this.toasty.success('Descrição gerada com sucesso!')
        },
        error: (err) => this.toasty.error(err.message),
        complete: () => {
          this.requestLoading = false
        },
      })
  }
}
