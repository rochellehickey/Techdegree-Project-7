// Get the element with the ID of qwerty and save it to a variable.
// Get the element with the ID of phrase and save it to a variable.
// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;

// Attach a event listener to the “Start Game” button to hide the start screen overlay.
document.addEventListener('click', function() {
  document.querySelector("btn__reset");
  if (true) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
    console.log('Bye-bye');
  } else {
    console.log('Hiya');
  }
});

// Create a phrases array that contains at least 5 different phrases as strings.
const phrases = ["NOT ALL WHO WANDER ARE LOST",
                "PETER PICKED A PECK OF PICKLED PEPPERS",
                "MAY THE FORCE BE WITH YOU",
                "PICKLES ARE BETTER THAN CUCUMBERS",
                "WITCH BREWS INCLUDE EYE OF NEWT"];

// Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
  let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  const splitRandomPhraseIntoCharArr = randomPhrase.split("");
  return splitRandomPhraseIntoCharArr;
}

// Set the game display.
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const ul = document.getElementById('phraseList');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(arr[i]));
    ul.appendChild(li);
    if (li.innerHTML !== " ") {
      li.className = "letter";
      console.log("letter");
    } else {
      li.className = "space";
      console.log("space");
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// above works
// below broken

// Create a checkLetter function.
function checkLetter(button) {

  let letterButtons = document.getElementsByTagName("button").textContent;
  const lettersArr = document.getElementsByClassName("letter");
  let letterFound = null;

  console.log(letterButtons + " outside");
  console.log(lettersArr);

  for (let i = 0; i < lettersArr.length; i++) {
    let letters = lettersArr[i].textContent.toLowerCase();

    console.log(letters + " letters inside for loop");
    console.log(letterButtons + " button inside for loop");

    if (letters === letterButtons) {
      letters[i].className = "show";
      console.log("match");
      letterFound = lettersArr[i].textContent;
    } else {
      console.log("no match");
    }
  }
  return letterFound;
};

// Add an event listener to the keyboard.
qwerty.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
      event.target.className = "chosen";
      event.target.setAttribute("disabled", true);
    }
  return checkLetter(this);
});








