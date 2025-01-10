"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
//Neden bu metotları burada açtık bu kullanılan DATABASE ile alakalı oracle ise buraya kodlama yazılabilir
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
        //gelen datanın her bir öğesini ürünlere ekledik
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //id ye göre ürün alma işlemi 
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products.indexOf(product); //id si varsa soraya göre koyması içn kodu düzenledik
            this.products.splice(index, 1, product); //siliyor ve product ı ekliyor
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product); //id aldık
        if (index > 0) {
            this.products.splice(index, 1); // verilen indexten sonra bir eleman sil
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
