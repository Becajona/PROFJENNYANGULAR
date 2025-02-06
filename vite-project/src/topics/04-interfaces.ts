/* Forma 1 */
interface SuperHero {
    nombre: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress(): string;
}


/* Forma 2 */
interface SuperHero {
    nombre: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    };
    showAddress: () => string;
}

/* Forma 3 */
interface SuperHero {
    nombre: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

interface Address { /* Interface para el objeto interno */
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: SuperHero = { /* Ctrl + clic */
    nombre: 'Spiderman',
    age: 30,
    address: {
        calle: '2 sur',
        pais: 'USA',
        ciudad: 'NY'
    },

    showAddress() {
        return this.nombre + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
};


const address = superHero.showAddress();
console.log(address);