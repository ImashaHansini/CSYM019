// function clickFunction() {
//   var input = document.getElementById("myinput");
//   // alert(input.value);
//   var div = document.getElementById("mydiv");
//   div.innerHTML = input.value;
// }

function loadFuntion() {
  // var button = document.getElementById("mybutton");
  // button.addEventListener("click", clickFunction);

  var input = document.getElementById("myinput");
  input.addEventListener("keyup", function () {
    var div = document.getElementById("mydiv");
    div.innerHTML = input.value;
  });
}

document.addEventListener("DOMContentLoaded", loadFuntion);
