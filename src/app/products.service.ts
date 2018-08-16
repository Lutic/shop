import { Injectable } from '@angular/core';

import * as products from './products.json';
import { IProduct, ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = <IProduct[]>products.default;

  constructor() { }

  getProducts() {
    let items: IProduct[];
    items = this.products.map((product) => {
      return new ProductModel(
        product.id,
        product.name,
        product.description,
        product.price,
        product.category,
        product.isAvailable,
        product.image,
        product.colors,
        product.sizes
      );
    });
    return items;
  }
}
