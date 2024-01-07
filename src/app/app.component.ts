import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { FormProductDescriptionComponent } from './shared/components/form-product-description/form-product-description.component'
import { ProductDescriptionResultComponent } from './shared/components/product-description-result/product-description-result.component'

import { Nl2brPipe } from './shared/pipes/nl2br.pipe'
import { FooterComponent } from './shared/components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatProgressSpinnerModule,
    FormProductDescriptionComponent,
    ProductDescriptionResultComponent,
    FooterComponent,
    Nl2brPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loading = true
}
