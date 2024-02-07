document.addEventListener('DOMContentLoaded', function() {

//button with prompt
const buttonDiv = document.createElement('div');
buttonDiv.setAttribute('id', 'button-div');
document.body.append(buttonDiv);

const popupBtn = document.createElement('button');
popupBtn.setAttribute('id', 'popup-btn');
buttonDiv.appendChild(popupBtn);
popupBtn.textContent = 'Grid size';

//creating divs for grid screen
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container-div');
document.body.appendChild(containerDiv);

//loop for grid dimensions
function squaresPerSide(squares = 16) {
  for (let i = 0; i < squares; i++) {
    const squareDiv = document.createElement('div');
    containerDiv.appendChild(squareDiv);
    squareDiv.setAttribute('class', 'square-div');
  }
}
squaresPerSide();
hover();
//button eventlistener

popupBtn.addEventListener('click', () => {

  let squaresNumber = +prompt('Enter number of squares per side: ');
  if (squaresNumber <= 100 && 
    squaresNumber >= 4 && 
    squaresNumber % 2 === 0) {
      Array.from(containerDiv.children).forEach(child => {
        containerDiv.removeChild(child);
      });
      squaresPerSide(squares = squaresNumber * 4);
      hover();
  } else {
    return alert('It should be an even number, and maximum is 100');
  }
});


//hovering effect
function hover() {
const squareDivs = document.querySelectorAll('.square-div');

squareDivs.forEach(squareDiv => {
  squareDiv.addEventListener('mouseover', () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    squareDiv.style.background = rgb;
  });
})
}



});


