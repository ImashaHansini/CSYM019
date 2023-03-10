function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.onclick = function () {
    alert("The button was pressed");
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
