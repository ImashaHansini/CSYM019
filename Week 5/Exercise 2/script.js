function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.onclick = function () {
    myButton.style.backgroundColor = "blue";
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
