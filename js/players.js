class Player {
    constructor() {
        this.x = 110;
        this.y = 230;
        this.velocity = 0;
        this.gravity = .2;


    }

    preload() {
        this.ski = loadImage('/assets/penguin-ski-cutout.png')
    }

    draw() {

        image(this.ski, this.x, this.y, 70, 60);
        if (frameCount > 200 && frameCount < 340) {
            this.x += 2;
            this.y += .9;
            // console.log(this.x, this.y);
        }

        // this.originalY = this.y;
        if (this.velocity !== 0) {
            this.velocity -= this.gravity;
            this.y -= this.velocity;
        }
        if (this.y > 355) {
            this.velocity = 0;
            this.y = 355;
        }
        snowflakeSpeed = 4;
        obstacleSpeed = 1;

    }

    jump() {
        console.log('jump!');
        this.velocity = 8;
    }
    accelerate() {
        console.log('accelerate');
        snowflakeSpeed = 8;
        obstacleSpeed = 3;
        console.log(obstacleSpeed)

    }
}