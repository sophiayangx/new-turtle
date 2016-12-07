$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})

//var position = 200
//
////insertLine(200, 30, 200)