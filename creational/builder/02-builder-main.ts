//! 📌️ Desafío: Construcción de un QueryBuilder en JavaScript

/**
 * 🎯 Objetivo: Implementar una clase `QueryBuilder` para generar dinámicamente consultas SQL de manera fluida utilizando métodos encadenados.
 *
 * 📋 Instrucciones:
 *
 *   ✅ Construcción de consultas SQL con métodos encadenables
 *   ✅ Soporte para selección de campos, condiciones, ordenamiento y límites
 *   ✅ Generación de una consulta SQL válida como cadena de texto
 *
 * 🚀 Métodos que debe implementar la clase `QueryBuilder`:
 *
 * 🔹 `constructor(table: string)`
 *     📌 Recibe el nombre de la tabla sobre la cual se ejecutará la consulta.
 *
 * 🔹 `select(...fields: string[]): QueryBuilder`
 *     📌 Define los campos a seleccionar en la consulta.
 *     📌 Si no se especifican, se selecciona todo (`*`).
 *
 * 🔹 `where(condition: string): QueryBuilder`
 *     📌 Agrega condiciones de filtrado (`WHERE`).
 *     📌 Puede encadenarse varias veces, combinando condiciones con `AND`.
 *
 * 🔹 `orderBy(field: string, order: string): QueryBuilder`
 *     📌 Ordena los resultados por el campo especificado en `ASC` o `DESC`.
 *
 * 🔹 `limit(limit: number): QueryBuilder`
 *     📌 Establece un límite de registros a devolver.
 *
 * 🔹 `execute(): string`
 *     📌 Retorna la consulta SQL generada en forma de cadena de texto.
 *
 * 💡 Salida esperada:
 *
 * const usersQuery = new QueryBuilder("users")  // 📌 Especifica la tabla "users"
 *     .select("id", "name", "email")            // 📌 Selecciona los campos id, name y email
 *     .where("age > 18")                        // 📌 Agrega condición: edad mayor a 18
 *     .where("country = 'Cri'")                 // 📌 Agrega otra condición con `AND`
 *     .orderBy("name", "ASC")                   // 📌 Ordena los resultados por nombre ascendente
 *     .limit(10)                                // 📌 Limita los resultados a 10 registros
 *     .execute();                               // 📌 Genera la consulta SQL
 *
 * console.log('Consulta:', usersQuery);
 *
 * SELECT id, name, email FROM users WHERE age > 18 AND country = 'Cri' ORDER BY name ASC LIMIT 10;
 *
 */

import {COLORS} from "../../helpers";
import {QueryBuilder} from "./02-builder";


function main() {
    const usersQuery = new QueryBuilder('users')
        .select('id', 'name', 'email')
        .where('age > 20')
        // .where("country = 'CHI'") // Esto debe de hacer una condición AND
        .orderBy('name', 'ASC')
        .orderBy('age', 'DESC')
        .limit(100)
        .execute();

    console.log('%cConsulta:\n', COLORS.red);
    console.log(usersQuery);
}

main();