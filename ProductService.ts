import { IProductsService } from "./IProductsService"
import { Product } from "./Product"


//Neden bu metotları burada açtık bu kullanılan DATABASE ile alakalı oracle ise buraya kodlama yazılabilir

class ProductService implements IProductsService {  //ınterface içinde olan metotların hepsi burda
    getById(id: number): Product {
        throw new Error("Method not implemented.")
    }
    getProducts(): Product[] {
        throw new Error("Method not implemented.")
    }
    saveProduct(product: Product): void {
        throw new Error("Method not implemented.")
    }
    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.")
    }
   
}