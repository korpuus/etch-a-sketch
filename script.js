

  //button with prompt
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('id', 'button-div');
  document.body.append(buttonDiv);

  const resetBtn = document.createElement('button');
  resetBtn.setAttribute('id', 'reset-btn');
  buttonDiv.appendChild(resetBtn);
  resetBtn.textContent = 'Reset';

  const popupBtn = document.createElement('button');
  popupBtn.setAttribute('id', 'popup-btn');
  buttonDiv.appendChild(popupBtn);
  popupBtn.textContent = 'Grid size';

  const eraseBtn = document.createElement('button');
  eraseBtn.setAttribute('id', 'erase-btn');
  buttonDiv.appendChild(eraseBtn);
  eraseBtn.textContent = 'Erase';


  //creating divs for grid screen
  const containerDiv = document.createElement('div');
  containerDiv.setAttribute('id', 'container-div');
  document.body.appendChild(containerDiv);


  //erase button mode
  let eraseMode = false;

  function squaresGrid(squaresPerSide = 16) {
    containerDiv.innerHTML = '';

    //adjusting squares size based on container size
    const containerSize = Math.min(600, 600);
    const squareSize = containerSize / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
      for (let i = 0; i < squaresPerSide; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        containerDiv.appendChild(squareDiv);
      }
    }
  }

  squaresGrid();
  hover();

  // Grid size button
  popupBtn.addEventListener('click', () => {
    let squaresFromUser = +prompt('Enter number of squares per side: ');

    if (squaresFromUser <= 100 && squaresFromUser >= 4) {
      squaresGrid(squaresFromUser);
      hover();
    } else {
      alert('Number should be minimum 4 and maximum 100');
    }
  });

  // Reset button
  resetBtn.addEventListener('click', () => {
    containerDiv.innerHTML = '';
    squaresGrid();
    hover();
  });

  // Erase button
  eraseBtn.addEventListener('click', () => {
    // Toggle erase mode
    eraseMode = !eraseMode; 
  });

  containerDiv.addEventListener('mouseover', (event) => {
    if (eraseMode && event.target.classList.contains('square-div')) {
      event.target.style.background = 'rgb(255, 255, 255)';
    }
  });

  // Hovering effect
  function hover() {
    const squareDivs = document.querySelectorAll('.square-div');

    squareDivs.forEach(squareDiv => {
      squareDiv.addEventListener('mouseover', () => {
        if (!eraseMode) {
          const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
          const r = randomBetween(0, 255);
          const g = randomBetween(0, 255);
          const b = randomBetween(0, 255);
          const rgb = `rgb(${r},${g},${b})`;
          squareDiv.style.background = rgb;
        }
      });
    });
  }


