import { calcularCompra, Producto } from './06-desArgumentos';

const ComprarProd: Producto[] = [
  {
    descripcion: 'Nokia', /* Primer objeto */
    precio: 100
  },
  {
    descripcion: 'iPad', /* Segundo Objeto */
    precio: 200
  }
];

const [total, imptotal] = calcularCompra({
    productos: ComprarProd,
    impuesto: 0.15
  });
  
  console.log('Total', total);
  console.log('Impuesto', imptotal);
  

