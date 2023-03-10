function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.style.opacity = 0;
  myButton.onclick = function () {
    myButton.style.opacity = parseFloat(myButton.style.opacity) + 0.1;
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
