function runOnLoad() {
  var myButton = document.getElementById("circle");
  myButton.style.opacity = 1;
  myButton.onclick = function () {
    setInterval(function () {
      var opacity = parseFloat(myButton.style.opacity);
      if (opacity > 0) {
        myButton.style.opacity = opacity - 0.1;
      }
    }, 1000);
  };
}

document.addEventListener("DOMContentLoaded", runOnLoad);
