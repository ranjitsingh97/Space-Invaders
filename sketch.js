var cnv;
var ship;
var flowers = [];
var drops = [];
var count = 0;
let img;
let img1;
let bg;

function setup() {
  bg = loadImage('starfield.jpg');
  cnv = createCanvas(windowWidth-10, windowHeight-10);
  //cnv = createCanvas(512, 512);
  
  img = loadImage('ship.png');
  img1 = loadImage('meteor1.png');
  img2 = loadImage('missile.png');
  ship = new Ship(img);
  //for(var i=0; i< 10; i++) {
  //  flowers[i] = new Flower(random(width), random(-100,-200));
  //}
}


function draw() {
  background(bg);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  
  for(var i=flowers.length; i<random(flowers.length + 0.22)%100 ;i++) {
    flowers[i] = new Flower(img1, random(width), random(-100,-500));
  }
  
  /*if(flowers.length<10) {
    var flower = new Flower(img1, random(width), random(-100,-500));
    flowers.push(flower);
  }*/
  
  
  for (i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if( drops[i].hits(flowers[j]) ) {
        flowers[j].evaporate();
        drops[i].evaporate();
          count += 1;
          
      }
    }
  }
    
  ship.show();
  ship.move();    
    
  fill(255);
  textSize(40);
  text("Score:", 15 ,35)
  text(count, 135 , 35);
    
  
  var edge = false;
  for(i=0; i<flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    
    if(flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }
  
  /*for(i=0; i<flowers.length; i++) {
    if(flowers[i].y > height) {
      flowers.splice(i,1);
    }
  }*/
  
  
  if(edge) {
    for(i=0; i<flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }
  
  for (i = drops.length-1; i >= 0 ; i--) {
    if(drops[i].toDelete) {
      drops.splice(i,1);
    }
  }
  
  for (i = flowers.length-1; i >= 0 ; i--) {
    if(flowers[i].toDelete) {
      flowers.splice(i,1);
    }
  }
  
  
}

function keyReleased() {
  if(key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if(key === ' ') {
    var drop = new Drop(img2, ship.x+25, height-100);
    drops.push(drop);
  }
  
  
  if(keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
