class Obstacle {
    constructor() {
        this.y = random(height - 140, height + 40);
        this.x = width;
        this.treeObstacle = loadImage('/assets/tree_obstacle.png');
        // this.width = 100;
        // this.height = 100;
       
    }

    preload() {

    }

    draw() {
        //clear();

        image(this.treeObstacle, this.x, this.y, 80, 90);
        // obstacleSpeed = 1;
        // rect(this.x, this.y, this.width, this.height);
        this.x -= 4 * obstacleSpeed;
        this.y -= 1.5 * obstacleSpeed;
        obstacleSpeed = 1;
    

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