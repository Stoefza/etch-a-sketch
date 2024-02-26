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

colorSelectionInput.addEventListener("input", function () {
	colorSelection = colorSelectionInput.value;
	addOnHoverEffect(colorSelection);
	// console.log(colorSelection);
});

function createSquares(numberOfBlocks =16) {
	let blockCounter = 0;
	let totalBlocks = numberOfBlocks * numberOfBlocks;
    squareSize = 500 / numberOfBlocks;

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
    if (randomizeColorCheckbox.checked){
        randomColor = generateRandomColor ()
        hoverSquare.setAttribute("style", `background-color: #${randomColor};width:${squareSize}px;height:${squareSize}px`);
    } else {
	    hoverSquare.setAttribute("style", `background-color: ${colorSelection};width:${squareSize}px;height:${squareSize}px`);
    }
}

function resetColor() {
    squares.forEach(square => {
        setColor(square.id, '#ffffff')
    })
}

function removeSquares () {
    squares = document.querySelectorAll(".sketch-block");
    squares.forEach(square => {
        square.remove()
    })
}

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
