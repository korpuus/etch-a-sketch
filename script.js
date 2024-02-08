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



function squaresGrid(squaresPerSide = 16) {
  // Clear the container
  containerDiv.innerHTML = '';


  // Calculate square size based on container dimensions and number of squares per side
  const containerSize = Math.min(containerDiv.offsetWidth, containerDiv.offsetHeight);
  const squareSize = containerSize / squaresPerSide;

  
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
    containerDiv.appendChild(squareDiv);
  }
}

squaresGrid();
hover();

// Event listener for the button click
popupBtn.addEventListener('click', () => {
  let squaresFromUser = +prompt('Enter number of squares per side: ');

  if (squaresFromUser <= 100 && squaresFromUser >= 4 && squaresFromUser % 2 === 0) {

    squaresGrid(squaresFromUser);
    hover();
  } else {
    alert('It should be an even number, and maximum is 100');
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


