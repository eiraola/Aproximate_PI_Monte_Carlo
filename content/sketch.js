//radius of the circle
let r;
//counter of all the points we are using
let total;
//counter of the points inside the circle
let inside;
function setup() {
  //firstly we set a radius to our circle, and initiate the counters.
  r=200.0;
  total=inside=0;
  //we create a canvas with a circel and a square inside
  createCanvas(402, 502);
  strokeWeight(0.1);
  translate(width/2,height/2);
  stroke(255);
  noFill();
  ellipse(0,0,r*2,r*2);
  rectMode(CENTER);
  rect(0, 0, r*2, r*2);
  
}

function draw() {
  
  //we refresh the screen, so we can see all the new points in this iteration.
  
  background("black");
  translate(width/2, height/2);
  
  //10000 random points will be created for each iteration
  
  for(let z=0; z<10000;z++){
  var x = random(-r, r);
  var y = random(-r, r);
  //we calculate the module of each point and we sum it to total
  var d = sqrt(x*x + y*y);
  
  total++;
    
    
  //if the module is smaller than the radious, it means that the point is inside the circle
    
    
  if(d < r)
  {
    stroke("cyan");
    inside++;
  }
  else
  {
    stroke("yellow");
  }
  point(x, y);}
  
  
  
  stroke("yellow");
  fill("yellow");
  //finally, we do the calculations and we print the result
  text(float(4*(float(inside)/float(total))).toPrecision(10), 100, -210);
  
}