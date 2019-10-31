function Ship(img) {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
//    fill(255);
//    rectMode(CENTER);
//    rect(this.x, height-20, 40, 40);
      
  image(img, this.x, height-100, 80, 100);
  }
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  
  this.move = function(){
    this.x += this.xdir*10;
  }
}
