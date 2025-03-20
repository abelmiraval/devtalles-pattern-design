import {FastFoodRestaurantFactory, HealthyRestaurantFactory, RestaurantFactory} from "./01-abstract-factory";
import {COLORS} from "../../helpers";

function main(factory: RestaurantFactory){
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepare();
    drink.pour();
}

console.log('\n%cPedido del menú regular:', COLORS.green)
main(new FastFoodRestaurantFactory())

console.log('\n\n%cPedido del menú saludable:', COLORS.green)
main(new HealthyRestaurantFactory())