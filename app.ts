import { Product } from "./Product";
import {ProductService} from "./ProductService"

let _productService=new ProductService();

let result;



  let p =new Product();
  p.id=6;
  p.category="PC";
  p.name="Monster";
  p.price=15000;

  _productService.saveProduct(p);
  
  result=_productService.getProducts();
  console.log(result)