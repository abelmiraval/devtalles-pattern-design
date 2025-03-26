
/**
 * 🎮 **Desafío: Método de Copia Inmutable para Jugador**
 * 📌 **Descripción del Desafío: Implementación del Patrón Inmutabilidad con copia para Jugadores**
 *
 * 1. Implementar método `copyWith` en la clase Player
 *    • Permitir crear copias con cambios en name, score o level
 *
 * 2. Probar el método mediante código cliente
 *    • Realizar cambios en puntaje, nivel y nombre
 */

import {Player} from "./02-inmutable";

// 2. Código Cliente para probar
function main() {
    // Crear jugador inicial
    let player = new Player({ name: 'Carlos', score: 0, level: 1 });
    console.log('Estado inicial:');
    player.displayState();

    // Incrementar el puntaje
    player = player.copyWith({ score: 10 });
    console.log('\nDespués de incrementar el puntaje:');
    player.displayState();

    // Subir de nivel
    player = player.copyWith({ level: 2 });
    console.log('\nDespués de subir de nivel:');
    player.displayState();

    // Cambiar el nombre del jugador
    player = player.copyWith({ name: 'Carlos Pro' });
    console.log('\nDespués de cambiar el nombre:');
    player.displayState();
}

main();