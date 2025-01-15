//* tipado de variable
let a: number = 2;

console.log(a);

//* tipado de función        tipado de los parámetros y del retorno
const addition = (a: number, b: number): number => a + b;

console.log(addition);

//* tipado de Interfaces
export interface IProduct {
    title: string;
    description: string;
    price: number; // o string
    images: Array<string>;
    active: boolean;
}

//* Tipado de objeto segun Interface IProduct
const newProduct: IProduct = {
    title: "Producto Nuevo",
    description: "Un producto muy bueno",
    price: 200,
    images: [],
    active: true
}
console.log(newProduct);

//* Tipado de Array
const arregloGenerico: Array<number> = [1, 2, 3, 4, 5]

console.log(arregloGenerico);

//* Tipado de Array mas COMÚN
const arregloConvencional: number [] = [6, 7, 8, 9, 10];

console.log(arregloConvencional);

//* Tipado de clases
export class ProductMemoryRepository {
    // Se tipa products como privado
    private products: IProduct[];
    // constructor de la Interfaz IProduct
    constructor(products: Array<IProduct>) {
        // se le asigna lo que llega por parámetro "products"
        this.products = products;
    }
    // se asigna método de tipo public (acceso público)
    // se puede tipar como: public / private / protected
    // retorna un array
    public getProducts(): Array<IProduct> {
        return this.products;
    }
}


//* Generics
// funcion que recibe un array que retorna number
export const getLastNumber = (numbers: number[]): number => {
    return numbers[numbers.length - 1];
}

// función que recibe un array de la interfaz IProudct
export const getLastProduct = (products: IProduct[]): IProduct => {
    return products[products.length - 1];
}

// función que recibe un array de strings...
// para no crear otra funcion por cada tipo se ocupa:

//* FUNCIÓN GENÉRICA 
// T es un type
// Recibe un parametro items que es un array de ese tipo y retorna ese tipo
export const getLasItem = <T>(items: T[]): T => {
    return items[items.length - 1];
}

// Prueba de la función GENÉRICA
console.log(getLasItem([1, 2, 3, 4, 5]));
console.log(getLasItem(["a", "b", "c", "d", "e"]));
//* si le doy un array de lo que sea, funciona IGUAL
console.log(getLasItem([[], {}, 2, 4, "e"]));


