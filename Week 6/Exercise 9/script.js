function runOnLoad() {
  var myButton = document.getElementById("circle");
  var offsetx = myButton.offsetLeft;
  var offsety = myButton.offsetTop;

  document.onkeydown = function (e) {
    if (e.keyCode == 37) {
      offsetx -= 10;
      myButton.style.left = offsetx + "px";
    }
    if (e.keyCode == 38) {
      offsety -= 10;
      myButton.style.top = offsety + "px";
    }
    if (e.keyCode == 39) {
      offsetx += 10;
      myButton.style.left = offsetx + "px";
    }
    if (e.keyCode == 40) {
      offsety += 10;
      myButton.style.top = offsety + "px";
    }
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
