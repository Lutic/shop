import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() buy: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('Товар добавлен в корзину!');
    this.buy.emit(this.product);
  }

}
