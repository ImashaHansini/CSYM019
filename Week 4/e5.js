function updateOnClick() {
  var h1 = document.getElementById("heading1");
  h1.firstChild.nodeValue = "This heading content is changed";

  var p1 = document.getElementById("paragraph1");
  p1.firstChild.nodeValue = "This paragraph content is changed";
}

document.addEventListener("click", updateOnClick);
