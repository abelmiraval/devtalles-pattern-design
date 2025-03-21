import {Document} from "./01-prototype";

function main() {
    const document1 = new Document('Cotización', '500 dólares', 'Fernando');

    console.log({document1});
    document1.displayInfo();

    // Llegaremos a tener el problema de objetos anidados al hacer una copia superficial
    // const document2 = {...document1};
    // Se rompe la referencia de los objetos anidados
    // const document2 = structuredClone(document1);

    const document2 = document1.clone();
    document2.title = 'Nueva Cotización';
    document2.displayInfo()
    console.log({document2});

}

main()