'use strict';
// Get the element with the ID of qwerty and save it to a variable.
// Get the element with the ID of phrase and save it to a variable.
// Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
let heartLives = document.getElementsByTagName('img');

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

// Create a checkLetter function.

function checkLetter(button) {
  //let target = event.target;
  const letter = button.textContent;
  // let letterButtons = document.getElementsByTagName("button")[i].textContent;
  const lettersArr = document.getElementsByClassName("letter");
  let letterFound = null;

  // console.log(letter + " outside");
  // console.log(lettersArr);

  // checking the button letter against the phrase array
  for (let i = 0; i < lettersArr.length; i++) {
    // put the letters to lowercase so it can be compared directly to the button
    let individualLetter = lettersArr[i].textContent.toLowerCase();

    // console.log(individualLetter + " letters inside for loop");
    // console.log(letter + " button inside for loop");

    // if the individualLetter matches exactly the letter add a class
    if (individualLetter === letter) {
      lettersArr[i].classList.add('show');
      console.log("match");
      // pass the found letter to letterFound
      letterFound = lettersArr[i].textContent;
    } else { // if not nothing
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
    let classShow = document.getElementsByClassName("show");
    let classLetters = document.getElementsByClassName("letters");
    //check if the number of letters with class “show” is equal to the number of letters with class “letters”
    if (classLetters.length === classShow.length) {
      //If they’re equal, show the overlay screen with the “win” class and appropriate text.
      console.log("Winner!");
    } else if (missed <= 5) {
      //if the number of misses is equal to or greater than 5, show the overlay screen with the “lose” class and appropriate text.
      console.log("Bummer");
    } else {
      console.log("Keep going!");
    }
  }
  //call the function
  checkWin();
});














