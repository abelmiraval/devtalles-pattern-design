//! 📌 Descripción del Desafío: Generación de Reportes con el Patrón Factory

/**
 *
 * 🎯 Objetivo: Implementar un sistema de generación de reportes utilizando una interfaz común y el patrón de diseño Factory Method.
 *
 * 📋 Instrucciones:
 *
 * 1️⃣ Implementar la interfaz `Report`
 *    - Debe definir un método `generate()`, que será implementado en las clases de reportes.
 *
 * 2️⃣ Completar las clases `SalesReport` e `InventoryReport`
 *    - Ambas clases deben implementar la interfaz `Report`.
 *    - Cada una debe personalizar su método `generate()` para generar el contenido adecuado del reporte.
 *
 * 3️⃣ Crear las fábricas `SalesReportFactory` e `InventoryReportFactory`
 *    - Estas clases deben encargarse de crear instancias de `SalesReport` e `InventoryReport`, respectivamente.
 *    - Aplicar el patrón **Factory Method** para encapsular la creación de los objetos.
 *
 * 💡 Salida esperada:
 *
 * ```
 * Reporte de Ventas generado con éxito.
 * ```
 * o
 * ```
 * Reporte de Inventario generado con éxito.
 * ```
 */
import promptSync from 'prompt-sync';
const prompt = promptSync();

import {InventoryReportFactory, ReportFactory, SalesReportFactory} from "./02-factory-method";


function main() {
    let reportFactory: ReportFactory;

    const reportType = prompt('¿Qué tipo de reporte deseas? (sales/inventory)');

    if (reportType === 'sales') {
        reportFactory = new SalesReportFactory();
    } else {
        reportFactory = new InventoryReportFactory();
    }

    reportFactory.generateReport();

}

main();