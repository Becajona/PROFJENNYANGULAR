 export interface Producto {
    descripcion: string;
    precio: number;
}
const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150.0
};
const tableta: Producto = {
    descripcion: 'iPad Air',
    precio: 250.0
};
/* Nota1: en las funciones pasamos como parámetro esta interfaz */
interface ICalcularCompra {
    impuesto: number;
    productos: Producto[];
}
export function calcularCompra(options: ICalcularCompra): number[] {
    let total = 0;
    options.productos.forEach(productito => {
        total += productito.precio;
    });

    return [total, total * options.impuesto];
}
