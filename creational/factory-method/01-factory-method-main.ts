import {BeanRestaurant, BeefRestaurant, ChickenRestaurant, Restaurant} from "./01-factory-method";
import promptSync from 'prompt-sync';
const prompt = promptSync();

function main(){
    let restaurant: Restaurant;

    const burgerType = prompt('¿Qué tipo de hamburguesa quieres? ( chicken/beef/bean ) ');

    switch (burgerType) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'bean':
            restaurant = new BeanRestaurant();
            break;
        default:
            throw new Error('Opciôn no válida');
    }

    restaurant.orderHamburger();
}

main()


