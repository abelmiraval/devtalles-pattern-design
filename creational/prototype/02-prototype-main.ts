

// Ejemplo:
import {Pokemon} from "./02-prototype";
import {COLORS} from "../../helpers";

const basePokemon = new Pokemon("Charmander", "Fuego", 1, ["Llamarada", "Arañazo"]);

const clone1 = basePokemon.clone();
clone1.name = "Charmeleon";
clone1.level = 16;
clone1.attacks.push("Lanzallamas");

console.log('%cCharmander', COLORS.red);
basePokemon.displayInfo();

console.log('%cCharmeleon', COLORS.pink);
clone1.displayInfo();