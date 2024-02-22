const sketchContainer = document.querySelector(".sketch-container");
console.log(sketchContainer);
console.log(sketchContainer.lenght);
let noOfBlocks = 8


function createSquares() {
	let blockCounter = 0;
	let totalBlocks = noOfBlocks * noOfBlocks;

	for (blockCounter; blockCounter < totalBlocks; blockCounter++) {
		let sketchBlock = document.createElement("div");
        sketchBlock.className = "sketch-block";
		sketchContainer.appendChild(sketchBlock);
	}

}

function startSketch() {}

createSquares()