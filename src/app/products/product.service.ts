import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
productsUrl = '/api/products';

  constructor(private http: HttpClient) { }

  // get("/api/products")
  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<any>(this.productsUrl)
    .pipe(map( (res) => res as IProduct[]));
  }
}
