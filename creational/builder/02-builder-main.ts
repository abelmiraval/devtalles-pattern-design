

//! Tarea: crear un QueryBuilder para construir consultas SQL

/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 *
 ** Ejemplo de uso:
 const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
 .select("id", "name", "email")
 .where("age > 18")
 .where("country = 'Cri'")
 .orderBy("name", "ASC")
 .limit(10)
 .execute();

 console.log('Consulta: ', usersQuery);
 // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
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