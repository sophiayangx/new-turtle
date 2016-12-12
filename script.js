$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})


//function sides(distance, n) {
//  for (i = 0; i < n; i++) {
//    goForward(100)
//    turnLeft(n);
//  }
//}
//
//sides(3, 6)
//
//function sides(distance, n) {
//  for (i = 0; i < n; i++) {
//    goForward(100)
//    turnLeftStar(n);
//  }
//}

//sides(3, 6)

//December 12th, Day 2

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 39) {
    goForward(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 38) {
    turnUp()
    goForward(100)
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 37) {
    turnLeft();
    goForward(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 40) {
    turnDown();
    goForward(100);
  } 
})