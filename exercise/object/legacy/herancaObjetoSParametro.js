function Brick(){
  this.width = 20;
  this.height = 20;
}

function BlueGlassBrick(){
  
  //Just need `this` argument for de function.
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}