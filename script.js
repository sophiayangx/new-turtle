$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})

//var position = 200
//
////insertLine(200, 30, 200)

function sides(distance, n) {
  for (i = 0; i < n; i++) {
    goForward(100)
    turnLeft();
  }
}

sides(3, 180)