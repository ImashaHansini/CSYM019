function runOnLoad() {
  var myButton = document.getElementById("circle");
  var offset = myButton.offsetLeft;

  document.onkeydown = function (e) {
    offset -= 10;
    myButton.style.left = offset + "px";
  };
}
document.addEventListener("DOMContentLoaded", runOnLoad);
