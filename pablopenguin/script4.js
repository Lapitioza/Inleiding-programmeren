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

  // De code hieronder maakt de next button zichtbaar wanneer er maar één keuze is, en de variatiebuttons (ja, nee, werk, gokken) wanneer er wel twee keuzes zijn

  if (current.classList.contains('choice')) {
    nextButton.classList.add('hidden');
    yesButton.classList.remove('hidden');
    noButton.classList.remove('hidden');

    // Verander de buttontekst
    setButtons();
  } else if (current.classList.contains('end')) {
    nextButton.classList.add('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
    endButton.classList.remove('hidden');
  } else {
    nextButton.classList.remove('hidden');
    yesButton.classList.add('hidden');
    noButton.classList.add('hidden');
  }

  setProperties(penguin.image, penguin.age);
}

function setButtons() {
  // Verander de buttontext op basis van het huidige pad
  switch (penguin.path) {
    case 'neutraal':
      yesButton.textContent = 'Bioscoop';
      noButton.textContent = 'Leren';
      break;

    case 'gangster':
      yesButton.textContent = 'Gokken';
      noButton.textContent = 'Solliciteren';
      break;

    case 'nerd':
      yesButton.textContent = 'Avontuur';
      noButton.textContent = 'Solliciteren';
      break;

    case 'work':
      yesButton.textContent = 'Familie';
      noButton.textContent = 'Workaholic';

    default:
      console.log(`${penguin.path} wordt goed afgehandeld`);
      break;
  }
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
      console.log(`${penguin.path} wordt goed afgehandeld`);
      break;
  }
  // Zet de pinguïn weer op de eerste stap van het huidige pad
  penguin.step = 0;

  // Word 5 jaar ouder
  nextAge();
}
function setProperties(image, age) {
  // Zet de image naar de huidige penguin state
  figureImg.src = `./images/${image}.png`;

  // Laat de huidige leeftijd zien
  currentAge.textContent = `Age: ${age}`;
}

// Event listeners
yesButton.addEventListener('click', () => choose(true));
noButton.addEventListener('click', () => choose(false));
nextButton.addEventListener('click', () => nextAge());
