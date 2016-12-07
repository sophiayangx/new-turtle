$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    console.log("saw enter press!");
    goForward(100);
  } 
})