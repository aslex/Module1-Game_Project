class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacleArr = [];
        this.presentArr = [];
        //this.randomInterval = Math.random()*150 + 120;
    }

    preload() {
        this.background.preload();
        this.player.preload();
        console.log('game.preload');
    }

    setup() {
        this.background.setup();
        console.log('game.setup');

    }

    draw() {
        console.log('game.draw');
        this.background.draw();
        this.player.draw();



        // random interval function
        // let randomInterval = setInterval(function () {
        //     return Math.random() * 170 + 130;
        // }, 3000);

        if (gameStart === true) {
            if (keyIsDown(RIGHT_ARROW) && frameCount % 140 === 0) {
                this.obstacleArr.push(new Obstacle());
            } else if (frameCount % 200 === 0) {
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
                    document.querySelector('.game-over>p').innerText = 'Score: ' + this.player.totalPoints;
                    document.querySelector('.game-over').style.visibility = 'visible';
                }
            });

            if (frameCount % 400 === 0) {
                this.presentArr.push(new Present());
            }

            this.presentArr.forEach((gift, index, arr) => {
                gift.draw();

                if (this.catchPresent(gift, this.player)) {
                    console.log('more points!');
                    arr.splice(index, 1);
                } else if (gift.x < -gift.width) {
                    arr.splice(index, 1);
                }

            });
        }




    }

    isCollision(obstacle, player) {
        if (
            player.x + player.width - 20 < obstacle.x + 10 ||
            obstacle.x - 10 + obstacle.width < player.x + 20
        ) {
            return false;
        }
        if (
            player.y + 20 > obstacle.y + obstacle.height ||
            obstacle.y > player.y + player.height - 20
        ) {
            return false;
        }
        return true;
    }

    catchPresent(present, player) {
        if (
            player.x + player.width < present.x ||
            present.x + present.width < player.x
        ) {
            return false;
        }
        if (
            player.y > present.y + present.height ||
            present.y > player.y + player.height
        ) {
            return false;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            player.totalPoints += 5;
            return true;
        }
        player.totalPoints += 2;
        return true;
    }


}