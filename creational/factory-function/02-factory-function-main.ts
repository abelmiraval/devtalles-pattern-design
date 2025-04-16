
//! 📌️ Desafío: Sistema de Logs con Códigos de Color

/**
 *
 * 🎯 Objetivo: Implementar un sistema de logs que utilice diferentes colores según el nivel de severidad,
 * mejorando la legibilidad y la identificación rápida de problemas.
 *
 * 📋 Instrucciones:
 *
 * 1️⃣ Niveles de Log y Colores:
 *   • INFO (🟢): Mensajes informativos normales [Verde]
 *   • WARNING (🟠): Advertencias que no detienen la ejecución [Amarillo]
 *   • ERROR (🔴): Errores que requieren atención inmediata [Rojo]
 *
 * 2️⃣ Formato Estándar de Logs:
 *   • Corchetes para delimitar metadatos: [NIVEL:FECHA:HORA]
 *   • Seguido del mensaje descriptivo
 *   • Ejemplo: [INFO:2025-10-21:07] Aplicación iniciada correctamente.
 *
 * 3️⃣ Implementación Requerida:
 *   • Función de log que acepte nivel y mensaje
 *   • Detección automática de fecha y hora
 *   • Renderizado con colores según el nivel
 *   • Salida consistente en todos los entornos
 *
 * 💡Salida esperada:
 *
 * [INFO:2025-10-21:07] Aplicación iniciada correctamente. (VERDE)
 * [WARNING:2025-10-21:07] El uso de memoria está alto. (AMARILLO)
 * [ERROR:2025-10-21:07] Error de conexión a la base de datos. (ROJO)
 *
 */

import {createLogger} from "./02-factory-function";

function main() {
    const infoLogger = createLogger('info');
    const warnLogger = createLogger('warn');
    const errorLogger = createLogger('error');

    infoLogger('Aplicación iniciada correctamente.');
    warnLogger('El uso de memoria está alto.');
    errorLogger('Error de conexión a la base de datos.');
}

main();