class Player {
    constructor() {
        this.x = 110;
        this.y = 230;
        this.velocity = 0;
        this.gravity = .2;
        this.width = 70;
        this.height = 60;
        this.jumpCount = 0;

    }

    preload() {
        this.ski = loadImage('/assets/penguin-ski-cutout.png')
    }

    draw() {

        image(this.ski, this.x, this.y, this.width, this.height)

        if (frameCount > 250 && frameCount < 390) {
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
            this.jumpCount = 0;
        }
   
        snowflakeSpeed = 4;
        obstacleSpeed = 1;  
    }

    jump() {
        if (this.jumpCount < 2) {
            console.log('jump!');
            this.velocity = 8;
            this.jumpCount++;
        }
    }
    accelerate() {
        console.log('accelerate');
        snowflakeSpeed = 8;
        obstacleSpeed = 4;
        console.log(obstacleSpeed);

    }
}