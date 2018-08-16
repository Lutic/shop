import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private costSub: Subscription;
  items: IProduct[] = [];
  totalCost: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe((data) => {
      this.items = data;
    });
    this.costSub = this.cartService.totalCost$.subscribe((data) => {
      this.totalCost = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.costSub.unsubscribe();
  }

}
