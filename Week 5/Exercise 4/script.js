function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.style.opacity = 0.5;
  myButton.onclick = function () {
    myButton.style.opacity = 1;
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
