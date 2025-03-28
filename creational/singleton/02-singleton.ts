import {COLORS} from "../../helpers";

export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connected: boolean = false;

    // Constructor privado para evitar instancias directas
    private constructor() {}

    // Método estático para obtener la instancia única
    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
            console.log('\n%cConectado a la base de datos', COLORS.blue);
        }

        return DatabaseConnection.instance;
    }

    // Método para conectar a la base de datos
    public connect(): void {
        if (this.connected) {
            console.log('%cYa estábamos conectados a la base de datos', COLORS.red);
            return;
        }

        this.connected = true;
        console.log('%cNueva conexión a la base de datos', COLORS.green);
        // Completar: si no está conectado, mostrar mensaje de conexión
    }

    // Método para desconectar de la base de datos
    public disconnect(): void {
        if (this.connected) {
            console.log(
                '%cDesconectamos la conexión a la base de datos',
                COLORS.blue
            );
            this.connected = false;
            return;
        }

        console.log('%cNo hay una conexión activa', COLORS.red);
    }
}
