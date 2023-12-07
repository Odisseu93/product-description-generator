import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Nl2brPipe } from '../../pipes/nl2br.pipe'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-product-description-result',
  standalone: true,
  imports: [CommonModule, Nl2brPipe, MatProgressSpinnerModule],
  templateUrl: './product-description-result.component.html',
  styleUrl: './product-description-result.component.scss',
})
export class ProductDescriptionResultComponent {
  description = ''

  @Input() productDescription: string | undefined
  @Input() isLoading: boolean = true
}
