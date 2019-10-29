class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacleArr = [];
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

        if (frameCount > 300 && frameCount % 200 === 0) {
            this.obstacleArr.push(new Obstacle());
        }

        this.obstacleArr.forEach((obs, index, arr) => {
            obs.draw();
            if (obs.x < -obs.width) {
                arr.splice(index, 1);
            }
        });

        // console.log(frameCount);


    }

    collide(obstacle, player) {

    }
}