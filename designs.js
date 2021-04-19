/**************************
** VARIABLE DECLARATIONS **
***************************/

const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
var color = document.getElementById('colorPicker').value;


/********************
** EVENT LISTENERS **
*********************/

// SELECT COLOR INPUT
colorPicker.addEventListener ('change', function(){
  //'color' is updated after closing out of the colorPicker
  color = colorPicker.value;
});

// SELECT A CELL TO COLOR - The following logic allows for an easy 'toggle' interface by clicking an already colored cell
pixelCanvas.addEventListener('click', function(evt) {
  // This conditional ensures only cells will be updated, and not the entire table, especially if accidentally dragging the cursor across multiple cells
  if (evt.target.nodeName === 'TD') {
    if (evt.target.style.backgroundColor === ""){
      evt.target.style.backgroundColor = color;
    }
    else if (evt.target.style.backgroundColor != "transparent"){
      evt.target.style.backgroundColor = "transparent";
    }
    else if (evt.target.style.backgroundColor != color){
      evt.target.style.backgroundColor = color;
    }
  }
});

// When HEIGHT and WIDTH are submitted, call the 'makeGrid()' function
sizePicker.addEventListener ('submit', function(evt) {
  //This method prevents the table from resetting the values
  evt.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});


/**************
** FUNCTIONS **
***************/

// This function loops through the provided height to add a row, then creates a cell for each unit of width provided, until all rows are complete
function makeGrid(height, width) {
  pixelCanvas.innerHTML = '';
  for (let x = 0; x < height; x++) {
    let row = pixelCanvas.insertRow(x);
    for (let y = 0; y < width; y++) {
      row.insertCell(y);
    }
  }
}
