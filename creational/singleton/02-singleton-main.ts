import {DatabaseConnection} from "./02-singleton";

function main() {
    const db1 = DatabaseConnection.getInstance();
    db1.connect(); // Debería conectar a la base de datos

    const db2 = DatabaseConnection.getInstance();
    db2.connect(); // Debería mostrar que ya existe una conexión activa

    console.log('Son iguales:', db1 === db2); // Debería mostrar true

    db1.disconnect(); // Debería cerrar la conexión
    db2.disconnect();

    db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();