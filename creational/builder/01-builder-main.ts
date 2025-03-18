import {COLORS} from "../../helpers";
import {ComputerBuilder} from "./01-builder";


function main() {
    const basicComputer = new ComputerBuilder()
        .setCPU('Intel Core 2 Dúo')
        .setRAM('4 GB')
        .setStorage('256GB')
        .build();

    console.log('%c\nComputadora básica\n', COLORS.blue)
    basicComputer.displayConfiguration();

    const gamingComputer = new ComputerBuilder()
        .setCPU('Intel Core i9')
        .setRAM('32 GB')
        .setStorage('2TB')
        .setCPU('Nvidia RTX 3090')
        .build();

    console.log('%c\nComputadora para gaming\n', COLORS.cyan)
    gamingComputer.displayConfiguration();

}

main();