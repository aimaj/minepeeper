$(document).ready(main);

var width = 8;
var height = 10;
var bombCount = 10;
var bombList = new Set();

var grid = [];

function main() {
	generateGrid();
	placeBombs();
	console.log(bombList);
	printGrid();
	
	$('.grid > span').click(function() {
		$(this).text('a');
		console.log(this.id);
	});
}

/**
 * Generates the N by M grid specified by width and height parameters.
 */
function generateGrid() {
	for (var i = 0; i < height; i++){
		var row = [];
		for (var j = 0; j < width; j++){
			row.push(0);
		}
		grid.push(row);
	}
}

/**
 * Generates N bombs within the grid.
 */
function placeBombs() {
	var x, y;

	for (var i = 0; i < bombCount; i++){
		x = Math.floor(Math.random() * height);
		y = Math.floor(Math.random() * width);

		// Only place a bomb if the area is clear!
		if (!isBomb(x,y)){
			bombList.add(x + ' ' + y);
			grid[x][y] = 'X';
			generateHints(x,y);
		}
		else {
			i--;
		}
	}
}

/**
 * Adds hint numbers for each cell surround a bomb
 */
function generateHints(x, y) {
	for (var i = (x - 1); i < (x + 2); i++){			// Left to right of the bomb
		if (i >= 0 && i < width){						// Don't go beyond the sides of the grid!
			for (var j = (y - 1); j < (y + 2); j++){	// Top to bottom of bomb
				if (j >= 0 && j < height){
					if (!isBomb(i,j)){
						grid[i][j] += 1;
					}
				}
			}
		}
	}
}

function printGrid() {
	var print = '';

	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			print += '<span id="' + i + ' ' + j + '">' + grid[i][j] + '</span>';
		}
		print += '<br>';
	}
	$('.grid').html(print);
}

function isBomb(x, y) {
	return (grid[x][y] === 'X');
}

function openCell(x, y) {
	// Reveal just the one cell
	if (grid[x][y] != 0){

	}

	// Open up that huge satisfying segment
	else {

	}
}

function changeCellState(x, y) {
}