
// 1. Definir la interfaz Report
import {COLORS} from "../../helpers";

// En conclusion esta clase es la encargada de dar el molde a las sublcases, las subclases solo lo implementan
interface Report {
    generate(): void;
}

// 2. Clases concretas de Reportes
class SalesReport implements Report {
    // 'Generando reporte de ventas...'
    generate(): void {
        console.log('%cGenerando reporte de ventas ...', COLORS.green);
    }
}

class InventoryReport implements Report {
    // 'Generando reporte de inventario...'
    generate(): void {
        console.log('%cGenerando reporte de inventario ...', COLORS.orange);
    }
}

// 3. Clase Base ReportFactory con el Método Factory
export abstract class ReportFactory {
    protected abstract createReport(): Report;

    generateReport(): void {
        const report = this.createReport();
        report.generate();
    }
}

// 4. Clases Concretas de Fábricas de Reportes
export class SalesReportFactory extends ReportFactory {
    createReport(): Report {
       return new SalesReport();
    }
}

export class InventoryReportFactory extends ReportFactory {
    createReport(): Report {
        return new InventoryReport();
    }
}