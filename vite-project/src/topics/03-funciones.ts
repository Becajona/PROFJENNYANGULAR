function addnumeros(a: number, b: number): number { /*Tipado de datos */
    return a + b;
}

const result: number = addnumeros(1, 2);
console.log(result);

function otraFun() { 
}

const addnumerosA = (a: number, b: number): string => {
    return `${a + b}`; /* símbolo de bactis */
}

const poema = `Este es un poema
que ocupa
varias líneas.`;
console.log(poema);

const re: string = addnumerosA(4, 5);
console.log({ re });

function masDatos(n1: number, n2?: number, base: number = 2) { /* Obligatorio, opcional y opcional con valor */
    return n1 * base;
}
/* uno */
interface datosYmasDatos {
    nombre: string;
    edad: number;
    mostrarDatos: () => void; // booleano, string
}

const misDatos = (dato: datosYmasDatos, masEdad: number) => {
    dato.edad += masEdad;
};

const persona: datosYmasDatos = {
    nombre: 'Jenn',
    edad: 18,
    mostrarDatos() {
        console.log(`La edad es ${this.edad}`);
    }
};



misDatos(persona,10);
misDatos(persona,30);
persona.mostrarDatos();

const resultado: number = addnumeros(1, 2);

const result2: string = addnumerosA(1, 2);

const resul3: number = masDatos(8);

console.log({ resultado, result2, resul3 }); // Imprime como objeto en la consola
