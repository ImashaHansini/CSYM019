function runOnLoad() {
  var myButton = document.getElementById("circle");
  var offset = myButton.offsetLeft;

  document.onkeydown = function (e) {
    console.log(e.keyCode);
  };
}
document.addEventListener("DOMContentLoaded", runOnLoad);
