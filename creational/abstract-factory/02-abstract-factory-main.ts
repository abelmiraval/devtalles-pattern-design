
//! 📌️ Desafío: Implementación del Patrón Abstract Factory para Vehículos

/**
 * 🎯 Objetivo: Crear un sistema de fabricación de vehículos utilizando el patrón Abstract Factory
 * que permita producir distintos tipos de vehículos y sus componentes de manera coherente.
 *
 * 📋 Instrucciones:
 *
 * 1️⃣ Completar las Clases de Productos:
 *    • 🚗 `ElectricCar`: Debe implementar `Vehicle` y mostrar "Ensamblando un auto eléctrico"
 *    • 🚗 `GasCar`: Debe implementar `Vehicle` y mostrar "Ensamblando un auto de combustión"
 *    • ⚙️ `ElectricEngine`: Debe implementar `Engine` y mostrar "Arrancando motor eléctrico"
 *    • ⚙️ `GasEngine`: Debe implementar `Engine` y mostrar "Arrancando motor de combustión"
 *
 * 2️⃣ Implementar las Clases de Fábricas:
 *    • ⚡ `ElectricVehicleFactory`: Debe crear instancias de `ElectricCar` y `ElectricEngine`
 *    • ⛽ `GasVehicleFactory`: Debe crear instancias de `GasCar` y `GasEngine`
 *
 * 3️⃣ Pruebas del Sistema:
 *    • Ejecutar el programa y verificar que cada fábrica produce correctamente
 *      su tipo específico de vehículo y motor
 *    • Comprobar que los mensajes mostrados son los esperados según el tipo de componente
 *
 */

import {ElectricVehicleFactory, GasVehicleFactory, VehicleFactory} from "./02-abstract-factory";

function main(factory: VehicleFactory) {
    const vehicle = factory.createVehicle();
    const engine = factory.createEngine();

    vehicle.assemble();
    engine.start();
}

console.log('Creando vehículo eléctrico:');
main(new ElectricVehicleFactory());

console.log('\nCreando vehículo de combustión:');
main(new GasVehicleFactory());