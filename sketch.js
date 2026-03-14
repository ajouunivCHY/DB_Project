function setup() {
  createCanvas(400, 400);
}

let i = 0;

function draw() {
  background(220,100,100);
  fill(50);
  rect(i*0.1,100,10,10);
  i = i+1;
}
