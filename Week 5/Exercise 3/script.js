function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.onclick = function () {
    myButton.style.opacity = 0.5;
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
