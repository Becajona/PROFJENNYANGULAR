/* export class Persona { 
    // Forma 1 correcta
    public nombre: string;
    public direccion: string;

    constructor(nombre1: string, direccion1: string) {
        this.nombre = nombre1;
        this.direccion = direccion1;
    }
} */


    export class Persona {
        /*
        constructor(nombre1: string, direccion1: string) {
            this.nombre = nombre1;
            this.direccion = direccion1;
        }
        */
        /* Terminas Forma 1 correcta */
    
        /* Forma 2 correcta */
        constructor(public nombre1: string, public direccion1: string, public peso: number) {
        }
    }

    
    const ObjPersona = new Persona('Jonathan', 'Puebla', 23);

console.log(ObjPersona);

/* export class SuperHero extends Persona {
    constructor(public sobrenombre: string, public edad: number, public nombre: string) {
        super(nombre, 'CDMX', 8);
    }
}

const pers = new SuperHero('Alias', 23, 'jorge');
console.log(pers); */

export class SuperHero {
    constructor(
        public sobrenombre: string, 
        public edad: number, 
        public nombre: string, 
        public person: Persona
    ) {
        // Con esto logramos que la clase SuperHero no se vea afectada a la hora de modificar la clase Persona
        this.person = new Persona(nombre,'anita',23);  // Property 'perso' does not exist on type 'SuperHero'. Did you mean 'person'?
    }
}

const ObjPer = new Persona('anita', 'CDMX', 12);
const ana2 = new SuperHero('jorge', 23, 'Anita', ObjPer);

console.log(ana2);



