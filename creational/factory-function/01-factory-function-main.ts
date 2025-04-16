import {createGreeter} from "./01-factory-function";

function main() {
    const spanishGreeter = createGreeter('es');
    const englishGreeter = createGreeter('en');
    const frenchGreeter = createGreeter('fr');

    spanishGreeter('Fernando');
    englishGreeter('Alice');
    frenchGreeter('Pierre');
}

main();