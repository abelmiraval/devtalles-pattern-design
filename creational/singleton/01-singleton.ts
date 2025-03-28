import {COLORS} from "../../helpers";

export class DragonBalls{
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor(){
        this.ballsCollected = 0;
    }

    static getInstance(): DragonBalls{
        if(!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls();
            console.log("%cLas pelotas del Dragón ha sido creadas!", COLORS.green)
        }
        return DragonBalls.instance;
    }

    collectBall(): void{
        if (this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(`%cPelota recolectada, Total de esferas: ${this.ballsCollected}`, COLORS.blue)
            return;
        }

        console.log("Ya se han recolectado las 7 esferas del Dragón! Invoca a Shenlong")
    }

    summonShenlong(): void{
        if (this.ballsCollected === 7){
            console.log("Shenlong ha sido invocado, Pide tu deseo!")
            this.ballsCollected = 0;
            return;
        }

        console.log(`\nAún faltan ${7 - this.ballsCollected} pelotas para invocar a Shenlong`)
    }
}