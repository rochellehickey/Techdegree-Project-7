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