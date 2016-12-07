$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})

function origPosition () {
  position.x + 100;
  position.y + 100
}
