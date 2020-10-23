class Engine {
    constructor(gravity, ballRadius, collisionRatio) {
        this.gravity = gravity;
        this.ballRadius = ballRadius;
        this.collisionRatio = collisionRatio;
        this.balls = [];
    }

    addBall(positionX, positionY, velocityX, velocityY) {
        this.balls.push(new Ball(ballRadius, positionX, positionY, gravity, velocityX, velocityY));
    }

    drawBalls() {
        this.balls.forEach(ball => {
            ball.draw();
        })
    }

    moveBalls() {
        this.balls.forEach(b => b.move());
        this.detectWalls();
        // this.detectCollisions();
    }

    detectCollisions() {
        // var collided = [];
        // for (var ball = 0; ball < this.balls.length; ball++) {
        //     for (var nextBall = ball + 1; nextBall < this.balls.length; nextBall++) {
        //         if ()
        //     }
        // }
    }

    detectWalls() {
        var hr = this.ballRadius / 2;
        this.balls.forEach(ball => {
            // this.collisionRatio = random(1);
            // going left
            if (ball.velocityX < 0  && ball.positionX < hr) {
                // console.log('LEFT');
                ball.collisionWallX(this.collisionRatio);
            }
            // going right
            if (ball.velocityX > 0  && ball.positionX > (width - hr)) {
                // console.log('RIGHT');
                ball.collisionWallX(this.collisionRatio);
            }
            // going up
            if (ball.velocityY < 0 && ball.positionY < hr) {
                // console.log('TOP');
                ball.collisionWallY(this.collisionRatio);
            }
            // going down
            if (ball.velocityY > 0 && ball.positionY > (height - hr)) {
                // console.log('BOTTOM');
                ball.collisionWallY(this.collisionRatio);
            }
        });
    }

    getDistance(ballA, ballB) {
        return Math.sqrt(Math.pow(ballA.positionX - ballB.positionX, 2) + Math.pow(ballA.positionY - ballB.positionY, 2));
    }
}