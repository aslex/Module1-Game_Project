const game = new Game();
let snowflakeSpeed = 4;
let obstacleSpeed = 1;



const width = 1200;
const height = 700;

function preload() {
    game.preload();
}

function setup() {
    createCanvas(width, height);
    game.setup();

}

function draw() {
    game.draw();

    if (keyIsDown(RIGHT_ARROW)) {
        game.player.accelerate();
    }


}

function keyPressed() {
    if (keyCode === 32) {
        // console.log('spacebar pressed');
        game.player.jump();
    }


}