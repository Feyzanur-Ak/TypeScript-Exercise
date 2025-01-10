"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array();
        this.products.push(new Product_1.Product(1, "Samsung s5", "Telefon", 1000));
        this.products.push(new Product_1.Product(2, "Samsung 5", "Telefon", 4000));
        this.products.push(new Product_1.Product(3, "ASUS", "PC", 8000));
        this.products.push(new Product_1.Product(4, "oppo 5A", "Telefon", 2000));
        this.products.push(new Product_1.Product(5, "APPLE 7S", "Telefon", 10000));
    }
    //ilk başta sadece new Porductı ama öyle olunca undefined hatası aldım böyle düzenledim
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
