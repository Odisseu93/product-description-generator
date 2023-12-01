import { Component, Input } from '@angular/core'
import { Product } from '../form-description-product/types/product.type'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product-description-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-description-result.component.html',
  styleUrl: './product-description-result.component.scss',
})
export class ProductDescriptionResultComponent {
  @Input() product: Product | undefined
}
