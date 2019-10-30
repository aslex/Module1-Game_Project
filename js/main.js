const game = new Game();
let snowflakeSpeed = 4;
let obstacleSpeed = 1;
let gameStart = false
const width = 1200;
const height = 700;

const introBox = document.getElementsByTagName('div');


function preload() {
    game.preload();
}

function setup() {
    createCanvas(width, height);
    // Canvas.center();
    game.setup();

}




function draw() {
    game.draw();


    if (keyIsDown(RIGHT_ARROW)) {
        game.player.accelerate();
    }
    if (keyIsPressed === true && gameStart == false) {
        console.log("working")
        anyKeyToBegin();
    }

}


function keyPressed() {
    if (keyCode === 32) {
        // console.log('spacebar pressed');
        game.player.jump();
    }
}

function anyKeyToBegin() {
    gameStart = true;
    console.log('keypressed - begin game');
    // document.querySelector('div').remove();

    document.querySelector('div').style.visibility = "hidden";
    //document.querySelector('div').style.visibility = "visbile";

    // introBox.classList.add('invisible');
    //introBox.classList.remove('instructions');
}