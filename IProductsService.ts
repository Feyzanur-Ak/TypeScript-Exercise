import { Product } from "./Product"

export interface IProductsService {   

   getById(id: number): Product  //ürünü alacak
   getProducts(): Product[]  //array döndürecek
   saveProduct(product: Product): void; //ürün kaydedecek
   deleteProduct(product: Product): void; //ürün silecek

}