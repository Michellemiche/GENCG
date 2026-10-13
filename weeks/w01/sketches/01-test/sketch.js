function setup() {
  createCanvas(windowHeight, windowHeight/2)
}

function draw() {
  background(244, 243, 239)
  noFill();
  
  circle(width/2, height/2, 100)
  
  rectMode(CENTER);

  rect(width/2, height/2, 150)
  
  fill(0);
  circle(width/2 + 75, height/2 - 75, 30)
  noFill();
  triangle(width/2-80, height/2 + 75, 10, height/2 + 75, 10, 10);
  
  let x1 = width/2;
  let y1 = height/2;
  let angle = PI*1.65; 
  let len = 45;

  // Calculate end coordinates
  let x2 = x1 + cos(angle) * len;
  let y2 = y1 + sin(angle) * len;
  
  line(x1, y1, x2, y2);


  let l1 = width/2-70;
  let g1 = height/2 + 90;
  line(l1, g1,l1 + 140, g1)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
