var heading = 0
var position = {x: 200, y: 300};
var turtle = $("#turtle");
var turtleCage = $(".turtle-cage")

function turnRight(n) {
  heading = heading - 180
}

function turnLeft(n) {
  heading = heading + 180
}

function turnUp(n) {
  heading = heading + 90
}

function turnDown(n) {
  heading = heading + 90
}

function turnRightStar(n) {
  heading = heading - 36
}

function turnLeftStar(n) {
  heading = heading + 108
}

function goForward(distance) {    
  var radians = -1 * heading * (Math.PI/180);
  var yIncrement = Math.sin(radians) * distance;
  var xIncrement = Math.cos(radians) * distance;        

  var origPosition = {x: position.x, y: position.y}; 
  var origHeading = heading;

  position.x = position.x + xIncrement;
  position.y = position.y + yIncrement;

  turtle.animate({
    left: position.x, 
    bottom: position.y,
  },{
    complete : function() {
      insertLine(origPosition, origHeading, distance)
    }
  })

}

function insertLine(start, angle, distance) {
  var lineEl = $("<div class='line'></div>")
  lineEl.css({
    "left": start.x,
    "bottom": start.y,
    "width": distance,
    height: "1px",
    "transform-origin": "0 0 0",
    transform: "rotate(" + angle + "deg)",
    background: "green",
    position: "absolute"
  })
  
  turtleCage.append(lineEl)
}