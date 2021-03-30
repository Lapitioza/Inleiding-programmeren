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

nextAge();

function nextAge() {
  penguin.age = penguin.age + 5;
  penguin.step = penguin.step + 1;

  var currentStep = `${penguin.path}-${penguin.step}`;

  penguin.image = currentStep;

// Event listeners
yesButton.addEventListener('click', () => choose(true));
noButton.addEventListener('click', () => choose(false));
nextButton.addEventListener('click', () => nextAge())};
