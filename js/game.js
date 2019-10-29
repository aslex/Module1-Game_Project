class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacleArr = [];
        //this.randomInterval = Math.random()*150 + 120;
    }

    preload() {
        this.background.preload();
        this.player.preload();

    }

    setup() {
        this.background.setup();

    }

    draw() {
        this.background.draw();
        this.player.draw();


        // random interval function
        // let randomInterval = setInterval(function () {
        //     return Math.random() * 170 + 130;
        // }, 3000);

        if (frameCount > 200 && frameCount % 200 === 0) {
            this.obstacleArr.push(new Obstacle());
        }

        this.obstacleArr.forEach((obs, index, arr) => {
            obs.draw();

            if (obs.x < -obs.width) {
                arr.splice(index, 1);
            }
            if (this.isCollision(obs, this.player)) {
                console.log('game over');
                noLoop();
            }
            console.log(this.isCollision(obs, this.player))
        });

    }

    // player = {
    //     this.playerx = player.x;
    //     this.playery = player.y;
    // }
    // obstacle = {
    //     this.obstaclex = obstacle.x;
    //     this.obstacley = obstacle.y;
    // }



    // collide(obstacle, player) {

    //     if ((player.x + player.width) < obstacle.x || player.x > (obstacle.x + obstacle.width)) {
    //         console.log('function false')

    //         return false;
    //     } else if ((player.y + player.height) > obstacle.y || player.y < (obstacle.y + obstacle.height)) {

    //         console.log('function also false')
    //         return false;
    //     } else {
    //         console.log('AT ANYTIME TRUEEEE????');
    //         return true;
    //     }


    //     // return !(
    //     //     player.x + player.width < obstacle.x ||
    //     //     player.x > obstacle.x + obstacle.width ||
    //     //     player.y + player.height > obstacle.y ||
    //     //     player.y < obstacle.y + obstacle.height
    //     // )
    // }

    isCollision(obstacle, player) {
        if (
            player.x + player.width < obstacle.x ||
            obstacle.x + obstacle.width < player.x
        ) {
            return false;
        }
        if (
            player.y > obstacle.y + obstacle.height ||
            obstacle.y > player.y + player.height
        ) {
            return false;
        }
        return true;
    }

}