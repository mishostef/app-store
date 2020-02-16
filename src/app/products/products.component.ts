import { Component, OnInit } from '@angular/core';
import {IProduct} from '../interfaces/IProduct';
import {ProductDetailsComponent} from '../product-details/product-details.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: IProduct[] = [{imageUrl: '/assets/images/1.jpg', price : 3, inStock: 2} ,
{imageUrl: '/assets/images/1.jpg',  price: 3, inStock: 2} ] as IProduct[];


  constructor() { }

  ngOnInit() {
  }

}
