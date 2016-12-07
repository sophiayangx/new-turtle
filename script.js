$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})

var position = 200

function origPosition () {
  position.x = position.x + xIncrement;
  position.y = position.y + yIncrement;
}
