class Background {

    constructor() {
        this.xmountain = 100;
        this.xclouds = 0;
        this.xsnowflake = 0;
        this.xsnowflake2 = 1200;
        this.xtrees = 0;
        this.xtreesReversed = 0;

        this.ysnowflake = 0;
        this.ysnowflake2 = 350;


        this.tree1x = 20;
        this.tree2x = 150;
        this.tree3x = 400;
        this.tree4x = 320;
        this.tree5x = 620;

        this.tree1y = 540;
        this.tree2y = 500;
        this.tree3y = 550;
        this.tree4y = 500;
        this.tree5y = 600;


    }
    preload() {
        this.mountain = loadImage("./assets/mountain.png");
        this.snowflake = loadImage('./assets/Ironhack-project1-snowflakes.png');
        this.trees = loadImage('./assets/trees.png');
        this.treesReversed = loadImage('./assets/trees2.png');
        this.snowflake2 = loadImage('./assets/Ironhack-project1-snowflakes copy.png')
        // this.clouds = loadImage('/assets/clouds.jpg');
    }

    setup() {
        //how can I make the mountain transparent??

        // tint(255, 126);

    }

    draw() {
        clear();
        background("lightblue");
        image(this.mountain, this.xmountain, 60, width, 600);
        push();
        stroke('white');
        strokeWeight(500);
        line(30, 450, width, height + 200);
        pop();

        image(this.snowflake, this.xsnowflake, this.ysnowflake);
        image(this.snowflake2, this.xsnowflake2, this.ysnowflake2);

        // var snowflakeSpeed = 4; (defined in main.js)
        this.xsnowflake -= snowflakeSpeed;
        this.ysnowflake -= snowflakeSpeed / 4;
        if (this.xsnowflake + width <= 0) {
            this.xsnowflake = width;
            this.ysnowflake = height / 2;
        }
        this.xsnowflake2 -= snowflakeSpeed;
        this.ysnowflake2 -= snowflakeSpeed / 4;
        if (this.xsnowflake2 + width < 0) {
            this.xsnowflake2 = width;
            this.ysnowflake2 = height / 2;
        }



        // const treeGroup = 

        const speedx = 1.2;
        const speedy = .6;

        this.tree1x -= speedx;
        this.tree4x -= speedx;

        this.tree2x -= speedx;
        this.tree3x -= speedx;
        this.tree5x -= speedx;

        this.tree1y -= speedy;
        this.tree4y -= speedy;

        this.tree2y -= speedy;
        this.tree3y -= speedy;
        this.tree5y -= speedy;

        image(this.trees, this.tree1x, this.tree1y, 160, 180);
        image(this.trees, this.tree2x, this.tree2y, 110, 150);

        image(this.treesReversed, this.tree3x, this.tree3y, 140, 170);
        image(this.treesReversed, this.tree4x, this.tree4y, 70, 90);
        image(this.treesReversed, this.tree5x, this.tree5y, 70, 90);

        if (this.tree1x <= -160) {
            this.tree1x = 140;
            this.tree1y = height;
        }
        if (this.tree2x <= -110) {
            this.tree2x = 650;
            this.tree2y = height;
        }
        if (this.tree3x <= -140) {
            this.tree3x = 700;
            this.tree3y = height;
        }
        if (this.tree4x <= -70) {
            this.tree4x = 400;
            this.tree4y = height;
        }
        if (this.tree5x <= -70) {
            this.tree5x = 300;
            this.tree5y = height;
        }

    }

}