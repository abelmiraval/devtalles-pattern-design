import {DragonBalls} from "./01-singleton";

function main(){
    const gokuDrangonBalls = DragonBalls.getInstance();

    gokuDrangonBalls.collectBall();
    gokuDrangonBalls.collectBall();
    gokuDrangonBalls.collectBall();

    gokuDrangonBalls.summonShenlong();
}

main()