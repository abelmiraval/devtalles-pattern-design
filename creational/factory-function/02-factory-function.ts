import {COLORS} from "../../helpers";

function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Función fábrica que crea un manejador de logs
type LogLevel = 'info' | 'warn' | 'error';

export function createLogger(level: LogLevel) {
    // Retorna una función que recibe el "message" como argumento
    // Completar: implementar el logger con formato y color para cada nivel
    return (message: string) => {
        const timestamp = formatDate(new Date());
        const logColor = {
            info: COLORS.white,
            warn: COLORS.yellow,
            error: COLORS.red,
        };

        const prefix = {
            info: 'INFO',
            warn: 'WARNING',
            error: 'ERROR',
        };

        console.log(
            `%c[${prefix[level]}: ${timestamp}] ${message}`,
            logColor[level]
        );
    };
}
