let gravity = 10;
let width = 800;
let height = 800;
let ballRadius = 10;
let engine;

function setup() {
    createCanvas(width, height);
    engine = new Engine(gravity, ballRadius, 0.4);
    for (let i = 0; i < 1000; i++) {
        let positionX = random(width);
        let positionY = random(height);
        let velocityX = random(10) - 5;
        let velocityY = random(10) - 5;
        engine.addBall(positionX, positionY, velocityX, velocityY);
    }
    console.log("Ready!");
}

function draw() {
    background(255);
    fill(255);
    rect(0, 0, width, height);
    engine.moveBalls();
    engine.drawBalls(); 
}