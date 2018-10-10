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
})

// Create a phrases array that contains at least 5 different phrases as strings.
const phrases = ["NOT ALL WHO WANDER ARE LOST",
                "PETER PICKED A PECK OF PICKLED PEPPERS",
                "MAY THE FORCE BE WITH YOU",
                "PICKLES ARE BETTER THAN CUCUMBERS",
                "WITCH BREWS INCLUDE EYE OF NEWT"]

// Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
  let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
  const splitRandomPhaseIntoCharArr = randomPhrase.split("");
  return splitRandomPhaseIntoCharArr;
}

console.log(getRandomPhraseAsArray(phrases));

// Set the game display.
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr[i].length; i++) {
    let charList = document.createElement('LI');
    console.log("1");
    let charLetters = document.createTextNode(getRandomPhraseAsArray(arr));
    console.log("2");
    charList.appendChild(charLetters); //?????
    console.log("3");
    document.getElementById('phrase').appendChild(charList);
    console.log("4");
  }
  return arr;
  console.log("5");
  if (arr === " ") {
    return "";
    console.log("6A");
  }  else {
    arr.className = "letter";
    console.log("6B");
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);















