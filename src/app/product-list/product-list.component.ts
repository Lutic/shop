import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product) {
    this.cartService.addToCart(product);
  }

}
