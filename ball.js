class Ball {

    constructor(radius, positionX, positionY, gravity, velocityX = 0, velocityY = 0, red = 0, green = 0, blue = 0) {
        this.radius = radius;
        this.positionX = positionX; 
        this.positionY = positionY;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.gravity = gravity;
        this.red = red === 0 ? random(255) : red;
        this.green = green === 0 ? random(255) : green;
        this.blue = blue === 0 ? random(255) : blue;
    }

    move() {
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
        this.velocityY += gravity * 0.08;
    }

    collisionWallX(ratio = 1) {
        this.velocityX = this.velocityX * ratio * (-1);
    }

    collisionWallY(ratio = 1) {
        this.velocityY = this.velocityY * ratio * (-1);
    }

    draw() {
        fill(this.red, this.green, this.blue);
        ellipse(this.positionX + (this.radius/2), this.positionY + (this.radius/2), this.radius);
    }

}