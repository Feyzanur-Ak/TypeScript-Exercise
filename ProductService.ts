import { IProductsService } from "./IProductsService"
import { Product } from "./Product"
import { SimpleDataSource } from "./SimpleDataSource"


//Neden bu metotları burada açtık bu kullanılan DATABASE ile alakalı oracle ise buraya kodlama yazılabilir

export class ProductService implements IProductsService {  //ınterface içinde olan metotların hepsi burda

    private dataSource :SimpleDataSource; //kaynaktan gelen dataları  ekledik
    private products: Array<Product>; // gelen ürünleri de dizi olarak tanımladık

    constructor(){  //gelen datayı yönetmek için bir constructor tanımladık 

        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>;
        this.dataSource.getProducts().forEach(p=>this.products.push(p)); 
        //gelen datanın her bir öğesini ürünlere ekledik
    }

    getById(id: number): Product {
        return this.products.filter(p=>p.id===id)[0];  //id ye göre ürün alma işlemi 
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id==null) {
            product.id=this.generateId();
            this.products.push(product);
        } else{
            let index=this.products.indexOf(product); //id si varsa soraya göre koyması içn kodu düzenledik
            this.products.splice(index,1,product); //siliyor ve product ı ekliyor
        }
    }
    deleteProduct(product: Product): void {
        let index=this.products.indexOf(product); //id aldık
        if(index>0) {
            this.products.splice(index,1); // verilen indexten sonra bir eleman sil
        }
    }

    private generateId() :number { // id si yoksa id ürettik 
        let key=1;
        while(this.getById(key) !=null) {
            key++;
        }

        return key;
    }
   
}