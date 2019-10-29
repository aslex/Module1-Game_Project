class Obstacle {
    constructor() {
        this.y = random(height - 140, height + 40);
        this.x = width;
        this.treeObstacle = loadImage('/assets/tree_obstacle.png');
        this.width = 80;
        this.height = 90;

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

// class Present {
//     this.y = random(400, height);
//     this.x = width;
// }