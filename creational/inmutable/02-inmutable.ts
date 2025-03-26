
// 1. Clase Player inmutable
import {COLORS} from "../../helpers";

interface PlayerProps {
    name: string;
    score: number;
    level: number;
}

export class Player {
    readonly name: string;
    readonly score: number;
    readonly level: number;

    constructor({ name, score, level }: PlayerProps) {
        this.name = name;
        this.score = score;
        this.level = level;
    }

    // Método copyWith para crear una copia modificada del jugador
    copyWith({ name, score, level }: Partial<Player>): Player {
        return new Player(
            {
                name: name ?? this.name,
                score: score ?? this.score,
                level: level ?? this.level,
            }
        );
    }

    displayState(): void {
        console.log(`\n%cJugador: ${this.name}`, COLORS.green);
        console.log(`%cPuntaje: ${this.score}`, COLORS.yellow);
        console.log(`%cNivel: ${this.level}`, COLORS.blue);
    }
}

