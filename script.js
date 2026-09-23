const posterTitle = document.querySelector('#poster-title');
const posterBody = document.querySelector('#poster-body');
const fontChoice = document.querySelector('#font-choice');
const fontSize = document.querySelector('#font-size');
const fontSizeValue = document.querySelector('#font-size-value');
const circle = document.querySelector('#circle');
const square = document.querySelector('#square');
const posterCircle = document.querySelector('.poster-circle');
const posterSquare = document.querySelector('.poster-square');
const posterPreviewTitle = document.querySelector('#poster-preview-title');
const posterPreviewBody = document.querySelector('#poster-preview-body');
let circleColorInput = document.getElementById("circle-color")
let circleColorOutput = document.getElementById("circle-color-output")
let squareColorInput = document.getElementById("square-color")
let squareColorOutput = document.getElementById("square-color-output")
let squareX = document.getElementById("square-x")
let squareY = document.getElementById("square-y")
let circleX = document.getElementById("circle-x")
let circleY = document.getElementById("circle-y")
let circleInput = document.getElementById("circle-scale")
let squareInput = document.getElementById("square-scale")

function updateColor(element, colorInput, colorOutput) {
	element.style.backgroundColor = colorInput.value;
	colorOutput.textContent = colorInput.value;
}

function updatePoster() {
	posterPreviewTitle.textContent = posterTitle.value || 'type a title...';
	posterPreviewBody.textContent = posterBody.value || 'type your body text...';
	posterPreviewTitle.style.fontFamily = fontChoice.value;
	posterPreviewBody.style.fontFamily = fontChoice.value;
	posterPreviewTitle.style.fontSize = `${fontSize.value}px`;
	posterPreviewBody.style.fontSize = `${Math.max(16, fontSize.value / 2)}px`;
	posterCircle.hidden = !circle.checked;
	posterSquare.hidden = !square.checked;
	updateColor(posterCircle, circleColorInput, circleColorOutput);
	updateColor(posterSquare, squareColorInput, squareColorOutput);
	updatePosition(posterSquare, squareX, squareY);
	updateScale(posterCircle, circleInput);
    updateScale(posterSquare, squareInput);
	fontSizeValue.value = `${fontSize.value}px`;
	fontSizeValue.textContent = `${fontSize.value}px`;

}

function updateScale(element, input) {
	element.style.scale = input.value;
}

circleInput.addEventListener("input", function(){
	updateScale(posterCircle, circleInput)
})
squareInput.addEventListener("input", function(){
	updateScale(posterSquare, squareInput)
})
function updatePosition(element, xInput, yInput) {
  element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
}
circleColorInput.addEventListener("input", function(){
	updateColor(posterCircle, circleColorInput, circleColorOutput)
})

squareColorInput.addEventListener("input", function(){
	updateColor(posterSquare, squareColorInput, squareColorOutput)
})
squareX.addEventListener("input", function(){
	updatePosition(posterSquare, squareX, squareY)
})

squareY.addEventListener("input", function(){
	updatePosition(posterSquare, squareX, squareY)
})

circleX.addEventListener("input", function(){
	updatePosition(posterCircle, circleX, circleY)
})

circleY.addEventListener("input", function(){
	updatePosition(posterCircle, circleX, circleY)
})
posterTitle.addEventListener('input', updatePoster);
posterBody.addEventListener('input', updatePoster);
fontChoice.addEventListener('change', updatePoster);
fontSize.addEventListener('input', updatePoster);
circle.addEventListener('change', updatePoster);
updatePoster();
square.addEventListener('change', updatePoster);
updatePoster();

