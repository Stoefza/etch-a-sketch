const sketchContainer = document.querySelector(".sketch-container");
// console.log(sketchContainer);
let numberOfBlocks 
let squareSize ;
let squares = '';
let slider = document.querySelector('.slider')
let colorSelection = ''
let colorSelectionInput = document.getElementById("favcolor");
let randomColor
let randomizeColorCheckbox = document.getElementById('randomise-check')
let blockAmountText = document.querySelector(".slider-value")
blockAmountText.textContent = `${slider.value} x ${slider.value}` 


//Adds even listener to reset button
document.getElementById("reset-grid-btn").addEventListener("click", function () {
    randomizeColorCheckbox.checked = false;
    resetColor();
    colorSelectionInput.value = '#000000';
    addOnHoverEffect()
    
    
});

// Add event listener to slider
slider.addEventListener('input', function(){
    numberOfBlocks = slider.value
    blockAmountText.textContent = `${slider.value} x ${slider.value}` 
    removeSquares()
    createSquares(slider.value)
    addOnHoverEffect()
})

//Sets Selected color and include the color in the on hover affect
colorSelectionInput.addEventListener("input", function () {
	colorSelection = colorSelectionInput.value;
	addOnHoverEffect(colorSelection);
	// console.log(colorSelection);
});

// Creates squares based on the slider input amount it has a default value of 16
// This also injects the size of the block based on the container size and makes them fit perfectly each time
function createSquares(numberOfBlocks =16) {
	let blockCounter = 0;
	let totalBlocks = numberOfBlocks * numberOfBlocks;
    squareSize = 700 / numberOfBlocks;

	for (blockCounter; blockCounter < totalBlocks; blockCounter++) {
		let sketchBlock = document.createElement("div");
		sketchBlock.className = "sketch-block";
		sketchBlock.id = `sketch-block-${blockCounter}`;
		sketchBlock.style.cssText = `width:${squareSize}px;height:${squareSize}px`;
		// sketchBlock.setAttribute("style", )
		sketchContainer.appendChild(sketchBlock);
	}
    
}

// This funtion adds hover affects to each square, it takes the current selected color as a paramater
// to paas through to setcolor(), once a block is hovered over it will run the set color FN
function addOnHoverEffect(colorSelection) {
	squares = document.querySelectorAll(".sketch-block");
	squares.forEach(square => {
		square.addEventListener("mouseover", function () {
			setColor(square.id, colorSelection);
		});
	});
	// console.log(squares);
}

// Set the color of a square based on the current selected color on the front end
function setColor(squareId, colorSelection = "#000000") {
	let hoverSquare = document.getElementById(squareId);
    if (randomizeColorCheckbox.checked){
        randomColor = generateRandomColor ()
        hoverSquare.setAttribute("style", `background-color: #${randomColor};width:${squareSize}px;height:${squareSize}px`);
    } else {
	    hoverSquare.setAttribute("style", `background-color: ${colorSelection};width:${squareSize}px;height:${squareSize}px`);
    }
}

// This resets the board top white
function resetColor() {
    squares.forEach(square => {
        setColor(square.id, '#ffffff')
    })
}

// This is used to remove the squares before generateing new ones (without this, the squares will just generate below the current block)
function removeSquares () {
    squares = document.querySelectorAll(".sketch-block");
    squares.forEach(square => {
        square.remove()
    })
}

// this funtion generates a random hex color value
function generateRandomColor () {
    randomHexGenerator = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomHexGenerator)
    console.log(document.getElementById('randomise-check').checked)
    return randomHexGenerator
}

// function resetSketch() {
//     numberOfBlocks = slider.value
//     removeSquares()
//     createSquares(slider.value)
//     addOnHoverEffect()
// }

createSquares();
addOnHoverEffect();
