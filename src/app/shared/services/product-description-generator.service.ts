import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

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
    const postBody = {
      name,
      category,
      additionalInformation,
    }

    return this.httpClient.post('/api/generate/product-description', postBody, {
      responseType: 'text',
      observe: 'events',
      reportProgress: true,
    })
  }
}
