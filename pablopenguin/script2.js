// Penguin object. Houdt de status bij
var penguin = {
  age: -5,
  image: 'neutraal-1.png',
  path: 'neutraal',
  step: 0
};


var figureImg = document.querySelector('#figure');
var currentAge = document.querySelector('#age');
var yesButton = document.querySelector('#yes');
var noButton = document.querySelector('#no');
var nextButton = document.querySelector('#next');
var endButton = document.querySelector('#end');

nextAge();

currentAge.textContent = `Age: ${penguin.age}`;

function nextAge() {
  penguin.age = penguin.age + 5;
  penguin.step = penguin.step + 1;

  var currentStep = `${penguin.path}-${penguin.step}`;

  penguin.image = currentStep;

  var previous = document.querySelector('.current');
  var current = document.querySelector(`#${currentStep}`);

  setProperties(penguin.image, penguin.age);
}


function choose(choice) {
  // Verander het huidige pad op basis van de keuze die er is gemaakt.
  switch (penguin.path) {
    case 'neutraal':
      if (choice) {
        penguin.path = 'gangster';
      } else {
        penguin.path = 'nerd';
      }
      break;

    case 'gangster':
      if (choice) {
        penguin.path = 'gok';
      } else {
        penguin.path = 'work';
      }
      break;

    case 'nerd':
      if (choice) {
        penguin.path = 'lost';
      } else {
        penguin.path = 'work';
      }
      break;

    case 'work':
      if (choice) {
        penguin.path = 'family';
      } else {
        penguin.path = 'workaholic';
      }

    default:
      console.log(`${penguin.path} wordt niet goed afgehandeld`);
      break;
  }
  penguin.step = 0;

  nextAge();
}
function setProperties(image, age) {
  figureImg.src = `./images/${image}.png`;
  currentAge.textContent = `Age: ${age}`;
}

yesButton.addEventListener('click', () => choose(true));
noButton.addEventListener('click', () => choose(false));
nextButton.addEventListener('click', () => nextAge());
