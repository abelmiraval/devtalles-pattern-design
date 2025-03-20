import {COLORS} from "../../helpers";

interface Hamburger{
    prepare(): void
}

interface Drink{
    pour(): void
}

class ChickenHamburger implements Hamburger{
    prepare(): void {
        console.log('Preparando hamburguesa de %cPollo', COLORS.yellow);
    }
}

class BeefHamburger implements Hamburger{
    prepare(): void {
        console.log('Preparando hamburguesa de %cRes', COLORS.red);
    }
}

class Water implements Drink{
    pour(): void{
        console.log('Sirviendo un vaso de %cagua', COLORS.blue);
    }
}

class Soda implements Drink{
    pour(): void{
        console.log('Sirviendo un vaso de %cgaseosa', COLORS.pink);
    }
}

export interface RestaurantFactory{
    createHamburger(): Hamburger
    createDrink(): Drink
}

export class FastFoodRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger{
        return new BeefHamburger();
    }

    createDrink(): Drink{
        return new Soda();
    }
}

export class HealthyRestaurantFactory implements RestaurantFactory{
    createHamburger(): Hamburger{
        return new ChickenHamburger();
    }

    createDrink(): Drink{
        return new Water();
    }
}