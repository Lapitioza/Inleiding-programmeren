// Penguin object. Houdt de status bij
var penguin = {
  age: -5,
  image: 'neutraal-1.png',
  path: 'neutraal',
  step: 0
};

// Pablo
var figureImg = document.querySelector('#figure');

// Age element
var currentAge = document.querySelector('#age');

// Buttons
var yesButton = document.querySelector('#yes');
var noButton = document.querySelector('#no');
var nextButton = document.querySelector('#next');
var endButton = document.querySelector('#end');

// Initiëren
nextAge();

// Toon leeftijd
currentAge.textContent = `Age: ${penguin.age}`;

function nextAge() {
  penguin.age = penguin.age + 5;
  penguin.step = penguin.step + 1;

  var currentStep = `${penguin.path}-${penguin.step}`;

  penguin.image = currentStep;

  // Kijk naar de huidige stap (en de huidige paragraaf)
  var previous = document.querySelector('.current');
  var current = document.querySelector(`#${currentStep}`);

  // hide de vorige
  previous.classList.remove('current');

  // Maak de huidige zichtbaar
  current.classList.add('current');

  setProperties(penguin.image, penguin.age);
}

function choose(choice) {
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

// Event listeners
yesButton.addEventListener('click', () => choose(true));
noButton.addEventListener('click', () => choose(false));
nextButton.addEventListener('click', () => nextAge());
