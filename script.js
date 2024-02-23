const sketchContainer = document.querySelector(".sketch-container");
// console.log(sketchContainer);
let noOfBlocks = 2;
let squareSize = 500 / noOfBlocks;
let squares = '';

let colorSelection = ''
let colorSelectionInput = document.getElementById("favcolor");
document.getElementById("reset-grid-btn").addEventListener("click", function () {
    resetColor();
    
});

colorSelectionInput.addEventListener("input", function () {
	colorSelection = colorSelectionInput.value;
	addOnHoverEffect(colorSelection);
	console.log(colorSelection);
});

function createSquares() {
	let blockCounter = 0;
	let totalBlocks = noOfBlocks * noOfBlocks;

	for (blockCounter; blockCounter < totalBlocks; blockCounter++) {
		let sketchBlock = document.createElement("div");
		sketchBlock.className = "sketch-block";
		sketchBlock.id = `sketch-block-${blockCounter}`;
		sketchBlock.style.cssText = `width:${squareSize}px;height:${squareSize}px`;
		// sketchBlock.setAttribute("style", )
		sketchContainer.appendChild(sketchBlock);
	}
}

function addOnHoverEffect(colorSelection) {
	squares = document.querySelectorAll(".sketch-block");
	squares.forEach(square => {
		square.addEventListener("mouseover", function () {
			setColor(square.id, colorSelection);
		});
	});
	// console.log(squares);
}

function setColor(squareId, colorSelection = "#000000") {
	let hoverSquare = document.getElementById(squareId);
	hoverSquare.setAttribute("style", `background-color: ${colorSelection};width:${squareSize}px;height:${squareSize}px`);
}

function resetColor() {
    squares.forEach(square => {
        setColor(square.id, '#ffffff')
    })
}

function startSketch() {}

createSquares();
addOnHoverEffect();
