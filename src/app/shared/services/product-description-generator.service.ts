import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { timeout } from 'rxjs'

type RequestBody = {
  name: string
  category: string
  additionalInformation?: string
}

@Injectable({
  providedIn: 'root',
})
export class ProductDescriptionGeneratorService {
  constructor(private httpClient: HttpClient) {}

  generate({ name, category, additionalInformation }: RequestBody) {
    return this.httpClient
      .post<any>('http://localhost:3000/generate/product-description', {
        name,
        category,
        additionalInformation,
      })
      .pipe(timeout(30000))
  }
}
