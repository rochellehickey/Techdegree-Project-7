'use strict';
// Get the element with the ID of qwerty and save it to a variable.
// Get the element with the ID of phrase and save it to a variable.
// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed
const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
let heartLives = document.getElementsByTagName('img');
const title = document.querySelector('.title');
const buttonRestart = document.createElement("button");

// Attach a event listener to the “Start Game” button to hide the start screen overlay.
document.addEventListener('click', function(event) {
  if (!event.target.matches("btn__reset")) {
    overlay.style.visibility = "hidden";
    event.stopPropagation();
    console.log('Bye-bye');
  } else {
    console.log('Hiya');
  }
  return;
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

// Create a checkLetter function.

function checkLetter(button) {
  const letter = button.textContent;
  const lettersArr = document.getElementsByClassName("letter");
  let letterFound = null;

  // checking the button letter against the phrase array
  for (let i = 0; i < lettersArr.length; i++) {
    // put the letters to lowercase so it can be compared directly to the button
    let individualLetter = lettersArr[i].textContent.toLowerCase();

    // if the individualLetter matches exactly the letter add a class
    if (individualLetter === letter) {
      lettersArr[i].classList.add('show');
      console.log("match");
      // pass the found letter to letterFound
      letterFound = lettersArr[i].textContent;
    } else { // if not, nothing
      console.log("no match");
    }
  }

  // return letterFound at the end
  return letterFound;
};

// Add an event listener to the keyboard.
qwerty.addEventListener("click", (event) => {
  // a class is added "chosen" that disables the button you picked
  if (event.target.nodeName == "BUTTON") {
      event.target.className = "chosen";
      event.target.setAttribute("disabled", true);
    }
  // button gets passed to the function checkLetter
  let letterFound = checkLetter(event.target);

  // If letterFound value is null
  if (letterFound === null) {

    //remove a try (heart) from the scoreboard (replace liveHeart.png with lostHeart.png)
    heartLives[missed].setAttribute("src", "images/lostHeart.png");

    // increase missed count by 1
    missed = missed + 1;
    console.log("missed number count: " + missed);
   }

  // Create a checkWin function.

  function checkWin() {
    const classLetters = document.querySelectorAll('.letter');
    const classShow = document.querySelectorAll('.show');
    //check if the number of letters with class “show” is equal to the number of letters with class “letters”
    if (classLetters.length === classShow.length) {
      //If they’re equal, show the overlay screen with the “win” class and appropriate text.
      event.stopImmediatePropagation();
      overlay.style.visibility = "visible";
      overlay.className = "win";
      overlay.innerHTML = "<h2>Winner, winner, chicken dinner!</h2>"
      console.log("Winner!");
      // Add a button to the “success” and “failure” screens that reset the game.
      buttonRestart.innerHTML = "<a>Keep the party going!</a>";
      buttonRestart.className = "btn__reset";
      overlay.appendChild(buttonRestart);
    } else if (missed === 5) {
      //if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.
      event.stopImmediatePropagation();
      overlay.setAttribute('style', 'visibility: visible');
      overlay.className = "lose";
      overlay.innerHTML = "<h2>Total bummer, dude.</h2>"
      console.log("Bummer");
      // Add a button to the “success” and “failure” screens that reset the game.
      buttonRestart.innerHTML = "<a>Try that again, Brah!</a>";
      buttonRestart.className = "btn__reset";
      overlay.appendChild(buttonRestart);
    } else {
      console.log("Keep going!");
    }
  }
  //call the function
  checkWin();

});


buttonRestart.addEventListener ('click', function(event) {
  // recreate the buttons in the keyboard

  // generate a new random phrase
  addPhraseToDisplay(phraseArray);
  // set the number of misses to zero
  missed = 0;
});





















