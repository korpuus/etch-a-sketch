document.addEventListener('DOMContentLoaded', function() {

//button with prompt
const popupBtn = document.createElement('button');
popupBtn.setAttribute('id', 'popupbtn');
document.body.append(popupBtn);
popupBtn.textContent = 'Grid size';


function numberOfSquares(x){
  x = +prompt('Enter a number of squares per side: ');
};

//creating divs
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


