/* Desestructuración de objetos */

interface Audio {
    nivelvolumen: number;
    duracion: number;
    sonido: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    año: number;
}

/* ctrl + punto en audio= para agregar todas las propiedades de forma automática */

const audio: Audio = {
    nivelvolumen: 90,
    duracion: 36,
    sonido: "Mess",
    detalles: {
        autor: 'Ed',
        año: 2015
    }
};

/* Forma 1 : con detalles :) 
const { 
    nivelvolumen:volumen,     
    detalles: { autor } 
} = audio;*/

/* Forma 2 : con detalles */
const { nivelvolumen: volumen, detalles } = audio; /* Aquí se renombra */
const { año } = detalles; /* Aquí se desestructura detalles */


/* Listo para ejecutar :) */
console.log('Volumen con desestructuración', volumen); /* Aquí se usa la variable desestructurada */
console.log('Sonido', audio.sonido);
console.log('Duración', audio.duracion);
console.log('Autor', audio.detalles.autor);
console.log('Año', año);

const arre1: string[] = ['Froilán Aranzazu', 'Eleuterio Casimira', 'Zenobia Bartolomé'];
console.log('Persona 3', arre1[2] || 'No hay personaje'); /* Existe hasta el personaje 2 */

/* Desestructuración de ARREGLOS :) */
const [,,, ultimo = 'No existe']: string[] = ['Pantaleón Orfelinda', 'Severiano Briseida', 'Prócoro Fil'];

console.log('Personaje 3', ultimo);

