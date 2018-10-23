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
      console.log("space");
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// above works
// below broken

// Create a checkLetter function.
// // Add an event listener to the keyboard.
// qwerty.onclick = function checkLetter(button) {
//   let letterButtons = document.getElementsByTagName("button");
//   let letters = document.getElementsByClassName("letter");

qwerty.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);

      let letters = document.getElementsByClassName("letter");
      let letterButtons = event.target.textContent;

      for (let i = 0; i < letters.length; i++) {
        letters = letters[i].innerHTML;
        letters = letters.toLowerCase();

        console.log(letters);
        console.log(letterButtons);
        // if (letterButtons === letters) {
        //   console.log("Past the if");
        //   li.className = "show";
        //   let match = letters.innerHTML;
        //   return match;
        //   console.log("match");
        // } else {
        //   return null;
        //   console.log("no match");
        // }
      }
    }
  });


// }



// check the button letter and then compare that letter to the string for matches










