import {COLORS} from "../../helpers";

interface Hambuger {
    prepare(): void;
}

class ChickenHamburger implements Hambuger {

    prepare() {
        console.log('Preparando una hamburguesa de %cpollo', COLORS.yellow);
    }
}

class BeefHamburger implements Hambuger{

    prepare() {
        console.log('Preparando una hamburguesa de %cres', COLORS.brown);
    }
}

class BeanHamburger implements Hambuger{

    prepare() {
        console.log('Preparando una hamburguesa de %ccfrijol', COLORS.orange);
    }
}

export abstract class Restaurant {
    protected abstract createHamburger(): Hambuger;

    orderHamburger() {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

export class ChickenRestaurant extends Restaurant {
    override createHamburger() {
        return new ChickenHamburger();
    }
}

export class BeefRestaurant extends Restaurant {
    override createHamburger() {
        return new BeefHamburger();
    }
}

export class BeanRestaurant extends Restaurant {
    override createHamburger() {
        return new BeanHamburger();
    }
}