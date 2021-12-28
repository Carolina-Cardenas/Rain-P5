function setup() {
    createCanvas(windowWidth, windowHeight);
    balls = [];
    while (balls.length < 500) {
      balls.push({
        x: random(0, windowWidth),
        y: random(0, windowHeight),
        r: random(1, 3),
        xSpeed: 0,
        ySpeed: random(25),
        color: "white",
      });
    }
  }
  
  function draw() {
    background("black");
    for (let ball of balls) {
      fill(ball.color);
     
      circle(ball.x, ball.y, ball.r );
    
      ball.y += ball.ySpeed;
      if (ball.y > height)
        ball.y = 0;
    }
  }
  