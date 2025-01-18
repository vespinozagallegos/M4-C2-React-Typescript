"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLasItem = exports.getLastProduct = exports.getLastNumber = exports.ProductMemoryRepository = void 0;

//* tipado de variable
var a = 2;
console.log(a);

//* tipado de función        tipado de los parámetros y del retorno
var addition = function (a, b) { return a + b; };
console.log(addition);


//* Tipado de objeto segun Interface IProduct
var newProduct = {
    title: "Producto Nuevo",
    description: "Un producto muy bueno",
    price: 200,
    images: [],
    active: true
};
console.log(newProduct);


//* Tipado de Array
var arregloGenerico = [1, 2, 3, 4, 5];
console.log(arregloGenerico);

//* Tipado de Array mas COMÚN
var arregloConvencional = [6, 7, 8, 9, 10];
console.log(arregloConvencional);


//* Tipado de clases
var ProductMemoryRepository = /** @class */ (function () {
    // constructor de la Interfaz IProduct
    function ProductMemoryRepository(products) {
        // se le asigna lo que llega por parámetro "products"
        this.products = products;
    }
    // se asigna método de tipo public (acceso público)
    // se puede tipar como: public / private / protected
    // retorna un array
    ProductMemoryRepository.prototype.getProducts = function () {
        return this.products;
    };
    return ProductMemoryRepository;
}());
exports.ProductMemoryRepository = ProductMemoryRepository;


//* Generics
// funcion que recibe un array que retorna number
var getLastNumber = function (numbers) {
    return numbers[numbers.length - 1];
};
exports.getLastNumber = getLastNumber;
// función que recibe un array de la interfaz IProudct
var getLastProduct = function (products) {
    return products[products.length - 1];
};
exports.getLastProduct = getLastProduct;
// función que recibe un array de strings...
// para no crear otra funcion por cada tipo se ocupa:
//* FUNCIÓN GENÉRICA 
// T es un type
// Recibe un parametro items que es un array de ese tipo y retorna ese tipo
var getLasItem = function (items) {
    return items[items.length - 1];
};
exports.getLasItem = getLasItem;
// Prueba comentando las funciones de ejemplos antes de la GENERICA
console.log((0, exports.getLasItem)([1, 2, 3, 4, 5]));
console.log((0, exports.getLasItem)(["a", "b", "c", "d", "e"]));
