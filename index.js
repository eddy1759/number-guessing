// function to get elements by id
function getElementById(id) {
  return document.getElementById(id)
};

let msg1 = getElementById("msg1"),
  msg2 = getElementById("msg2"),
  msg3 = getElementById("msg3"),
  answer = Math.floor(Math.random() * 2) + 1,
  no_of_guesses = 0,
  guessed_nums = [];

function playGame() {
  let userGuess = document.getElementById('guess').value;

  if (userGuess < 1 || userGuess > 2) {
    alert("Enter a number between 1 and 2")
  }

  else {
    guessed_nums.push(userGuess);
    no_of_guesses += 1;

    if (userGuess < answer) {
      msg1.textContent = "your guess is low";
      msg2.textContent = "No. of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " +
        guessed_nums;
    } else if (userGuess > answer) {
      msg1.textContent = "Your guess is too high.";
      msg2.textContent = "No. of guesses: " + no_of_guesses;
      msg3.textContent = "Guessed numbers are: " +
        guessed_nums;
    }
    else if (userGuess == answer) {
      msg1.textContent = "Guess Correctly!!";
      msg2.textContent = "The number was: " + answer;
      msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
      document.getElementById("btn").disabled = true;
    }
  }
}

