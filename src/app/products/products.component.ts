import { Component, OnInit } from '@angular/core';
import {IProduct} from '../interfaces/IProduct';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {ProductService} from './product.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: IProduct[];

  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
    .pipe(map(ps => {
      ps.forEach(p => p.imageUrl.includes('http')?
      p.imageUrl = p.imageUrl: // if image number from assets folder provided
      p.imageUrl = `/assets/images/${p.imageUrl}.jpg`); //  get image from assets
      return ps;
    }))
    .subscribe(products => this.products = products);
   }

  ngOnInit() {
  }

}
