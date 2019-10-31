function Flower(img1,x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 0;
  this.ydir = random(3,7);
  this.toDelete = false;

  this.evaporate = function() {
    this.toDelete = true;
  }
  
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }
  
  this.move = function() {
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
  }
  
  this.show = function() {
//    noStroke();
//    fill(255, 0, 200);
//    ellipse(this.x, this.y, this.r*2, this.r*2);
      
  // Displays the image at point (0, height/2) at half size
  image(img1, this.x, this.y, this.r*2, this.r*2);
  }
  
}
