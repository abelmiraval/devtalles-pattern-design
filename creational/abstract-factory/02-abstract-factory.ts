
// 1. Interfaces de Vehicle y Engine
import {COLORS} from "../../helpers";

interface Vehicle {
    assemble(): void;
}

interface Engine {
    start(): void;
}

// 2. Clases Concretas de Productos
class ElectricCar implements Vehicle{
    assemble(){
        console.log('Ensamblando un auto %celéctrico', COLORS.blue);
    }
}

class GasCar implements Vehicle {
    assemble() {
        console.log('Ensamblando un auto de %ccombustión', COLORS.brown);
    }
}

class ElectricEngine implements Engine {
    start() {
        console.log('Arrancando motor %celéctrico', COLORS.blue);
    }
}

class GasEngine implements Engine {
    start() {
        console.log('Arrancando motor de %ccombustión', COLORS.brown);
    }
}

// 3. Interfaz de la Fábrica Abstracta
export interface VehicleFactory {
    createVehicle(): Vehicle;
    createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas
export class ElectricVehicleFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new ElectricCar();
    }

    createEngine(): Engine {
        return new ElectricEngine();
    }
}

// 5. Clases Concretas de Fábricas
export class GasVehicleFactory implements VehicleFactory {
    createEngine(): Engine {
        return new GasEngine();
    }

    createVehicle(): Vehicle {
        return new GasCar();
    }
}

