import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  product: Product;

  countToBuy:number = 0;
  increment(){
    if(this.countToBuy < this.product.inStock)
    this.countToBuy++;
  }
  decrement(){
    if(this.countToBuy>=1)
    this.countToBuy--;
  }

  constructor() { }

  ngOnInit() {
  }

}
