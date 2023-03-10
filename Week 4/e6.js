function updateParagraph() {
  var p1 = document.getElementById("paragraph");
  p1.firstChild.nodeValue = "New Paragraph content is updated";
}

function updateHeading() {
  var h1 = document.getElementById("pageheading");
  h1.firstChild.nodeValue = "New Heading content is updated";
}

function updateOnClick() {
  var h1 = document.getElementById("pageheading");
  h1.addEventListener("click", updateHeading);

  var p1 = document.getElementById("paragraph");
  p1.addEventListener("click", updateParagraph);
}

function mouseOver() {
  var h1 = document.getElementById("pageheading");
  h1.style.color = "red";

  var p1 = document.getElementById("paragraph");
  p1.style.color = "red";
}

function mouseOut() {
  var h1 = document.getElementById("pageheading");
  h1.style.color = "black";

  var p1 = document.getElementById("paragraph");
  p1.style.color = "black";
}

function updateOnMouseOver() {
  var h1 = document.getElementById("pageheading");
  h1.addEventListener("mouseover", mouseOver);
  h1.addEventListener("mouseout", mouseOut);

  var p1 = document.getElementById("paragraph");
  p1.addEventListener("mouseover", mouseOver);
  p1.addEventListener("mouseout", mouseOut);
}

document.addEventListener("DOMContentLoaded", updateOnClick);
document.addEventListener("DOMContentLoaded", updateOnMouseOver);
