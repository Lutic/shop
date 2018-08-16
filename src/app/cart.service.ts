import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private channel = new Subject<IProduct[]>();
  private totalCost = new Subject<number>();

  products: IProduct[] = [];
  channel$ = this.channel.asObservable();
  totalCost$ = this.totalCost.asObservable();

  constructor() { }

  addToCart(product: IProduct) {
    if (!product.numberInCart) {
      this.products.push(product);
    }
    product.numberInCart++;
    this.channel.next(this.products);
    this.getTotalCost(product);
  }

  getTotalCost(product: IProduct) {
    product.totalPrice = product.price * product.numberInCart;
    let cost = 0;
    this.products.forEach((item) => {
      cost += item.totalPrice;
    });
    this.totalCost.next(cost);
  }
}
