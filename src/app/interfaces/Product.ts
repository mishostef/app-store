import {IProduct} from './IProduct';
export class Product implements IProduct {
  imageUrl: string;
  price: number;
  inStock: number;
constructor(img: string, price: number, qty: number) {
  this.imageUrl = img;
  this.price = price;
  this.inStock = qty;
}

}
