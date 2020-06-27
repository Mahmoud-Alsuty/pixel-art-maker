var sizeX = document.getElementById("inputHeight");
var sizeY = document.getElementById("inputWidth");
// When size is submitted by the user, call makeGrid()
var tablem = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var form = document.getElementById("sizePicker");

function makeGrid() {
  for (var i = 0; i < sizeX.value; i++) {
    var tr = document.createElement("tr");
    tablem.appendChild(tr);

    for (var j = 0; j < sizeY.value; j++) {
      var td = document.createElement("td");
      tr.appendChild(td);
    }


  }
}
document.getElementById("sizePicker").addEventListener("submit", function(event) {
  tablem.innerHTML = "";
  makeGrid();
  event.preventDefault();

});
tablem.addEventListener('click', function(e) {

  e.target.style.backgroundColor = color.value;
});