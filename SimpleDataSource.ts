import { Product } from "./Product";

export class SimpleDataSource {  //Burada bir data kaynağı oluşturduk Bunu ProductService de kullanacağız
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
        this.products.push(new Product(1, "Samsung s5", "Telefon", 1000));
        this.products.push(new Product(2, "Samsung 5", "Telefon", 4000));
        this.products.push(new Product(3, "ASUS", "PC", 8000));
        this.products.push(new Product(4, "oppo 5A", "Telefon", 2000));
        this.products.push(new Product(5, "APPLE 7S", "Telefon", 10000));
    }

    //ilk başta sadece new Porductı ama öyle olunca undefined hatası aldım böyle düzenledim


        getProducts() :Product[] {
            return this.products;
        }

    }