class Obstacle {
    constructor() {
        this.y = random(height - 140, height + 40);
        this.x = width;
        this.treeObstacle = loadImage('/assets/tree_obstacle.png');
        this.width = 100;
        this.height = 110;

    }

    preload() {

    }

    draw() {
        //clear();

        image(this.treeObstacle, this.x, this.y, this.width, this.height);

        // rect(this.x, this.y, this.width, this.height);
        this.x -= 4;
        this.y -= 1.5;
        if (keyIsDown(RIGHT_ARROW)) {
            this.x -= 6;
            this.y -= 2.25;
        }



    }
    // accelerate(){
    //     console.log('obstacle accelerate')
    //     obstacleSpeed = 2;
    // }

}

class Present {
    constructor() {
        this.y = random(height - 300, height + 20);
        this.x = width;
        this.presentImage = loadImage('/assets/present-cutout.png');
        this.width = 50;
        this.height = 50;
    }

    preload() {

    }

    draw() {
        image(this.presentImage, this.x, this.y, this.width, this.height);

        this.x -= 3;
        this.y -= 1.2;
        if (keyIsDown(RIGHT_ARROW)) {
            this.x -= 5;
            this.y -= 2;
        }

    }
}