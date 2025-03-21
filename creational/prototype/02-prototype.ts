
export class Pokemon {
    name: string;
    type: string;
    level: number;
    attacks: string[];

    constructor(name: string, type: string, level: number, attacks: string[]) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.attacks = attacks;
    }

    // Método para clonar el Pokémon
    clone(): Pokemon {
        // Los ataques deben de evitar pasarse por referencia, es decir, no deben de ser el mismo arreglo.
        return new Pokemon(this.name, this.type, this.level, [...this.attacks]);
    }

    displayInfo(): void {
        console.log(
            `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${
                this.level
            }\nAtaques: ${this.attacks.join(', ')} \n`
        );
    }
}

