document.addEventListener('DOMContentLoaded', function() {

//button with prompt
const buttonDiv = document.createElement('div');
buttonDiv.setAttribute('id', 'button-div');
document.body.append(buttonDiv);

const popupBtn = document.createElement('button');
popupBtn.setAttribute('id', 'popup-btn');
buttonDiv.appendChild(popupBtn);
popupBtn.textContent = 'Grid size';



function numberOfSquares(){
  return +prompt('Enter number of squares per side: ');
};

//creating divs for grid screen
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container-div');
document.body.appendChild(containerDiv);

//loop for grid dimensions
for (let i = 0; i < 16; i++) {
  const squareDiv = document.createElement('div');
  containerDiv.appendChild(squareDiv);
  squareDiv.setAttribute('class', 'square-div');
}


//hovering effect
const squareDivs = document.querySelectorAll('.square-div');

squareDivs.forEach(squareDiv => {
  squareDiv.addEventListener('mouseover', () => {
    squareDiv.style.background = 'blue';
  });
})



});


