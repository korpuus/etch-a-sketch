document.addEventListener('DOMContentLoaded', function() {


const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container-div');
document.body.appendChild(containerDiv);


for (let i = 0; i < 16; i++) {
  const squareDiv = document.createElement('div');
  containerDiv.appendChild(squareDiv);
  squareDiv.setAttribute('class', 'square-div');
}


});

