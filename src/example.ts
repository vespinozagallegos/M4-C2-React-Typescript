import { log } from "console";

//* tipado de variable
let a: number = 2;

console.log(a);

//* tipado de función        tipado de los parámetros y del retorno
const addition = (a: number, b: number): number => a + b;

console.log(addition);

//* tipado de Interfaces---------------> (se pone el TIPO de dato de cada props)                                            1. se crea la matriz(interface)
export interface IProduct {
    title: string;
    description: string;
    price: number; // o string
    images: Array<string>;
    active: boolean;
}

//* Tipado de objeto segun Interface IProduct---------------> (se entrega el dato duro de la PROPS segun la Interface)      2. se Crea un objeto segun la interfaz (1)
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
export class ProductMemoryRepository {                                                                                  //* 3. Se crea el array de objetos(productos) según la Interfaz
    // Se tipa products para evitar error, por mas que esté tipado en el constructor. Y se tipa como privado y array
    private products: IProduct[];
    // constructor, tiene products que es un array de objetos IProduct (de la Interfaz) //*Forma 1 products: Array<IProduct> y forma 2 (abajo)
    constructor(products: IProduct[]) {                                                                            //* 3. Se crea el array de objetos(productos) según la Interfaz
        // se le asigna lo que llega por parámetro "products"
        this.products = products;
    }
    // se asigna método de tipo public (acceso público) como es MÉTODO, es una FUNCIÓN
    // se puede tipar como: public / private / protected
    // retorna un array
    public getProducts(): IProduct[] {
        return this.products;
    }
}


//! Generics
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

//* Prueba. Se entrega el array y utiliza la misma FUNCIÓN GENÉRICA declarada
console.log(getLasItem([1, 2, 3, 4, 5]));               //5
console.log(getLasItem(["a", "b", "c", "d", "e"]));     //e
//* si le doy un array de lo que sea, funciona IGUAL
console.log(getLasItem([[], {}, 2, 4, "e"]));           //e

//! formas de restringir la función genérica para que sea mas consistente
//* Sólo se indica el tipo (number) y se declara el array de number
const result1 = getLasItem<number>([1, 2, 3, 4, 5]);
console.log(result1);                                   //5
//* Sólo se indica el tipo (string) y se declara el array de string
const result2 = getLasItem<string>(["a", "b", "c", "d", "e"]);
console.log(result2);                                   //e
// //* Se indica el tipo (string) y se declara el array de cualquiera, MARCA ERROR / SE ROMPE en consola
// const result3 = getLasItem<string>([[], {}, 2, 4, "e"]);
// console.log(result3); 