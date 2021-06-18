//Generates random variable for computer
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * 3)];
}
  
//Change the player's selection image
function imageChange() {
  const playerRock = document.getElementById("rock");
  playerRock.addEventListener("click", () => { document.querySelector(".player-selection").src = "Rock.png"});
  const playerPaper = document.getElementById("paper");
  playerPaper.addEventListener("click", () => { document.querySelector(".player-selection").src = "Paper.png"});
  const playerScissors = document.getElementById("scissors");
  playerScissors.addEventListener("click", () => { document.querySelector(".player-selection").src = "Scissors.png"});
}   

//Call the function once image is clicked
const playerRock = document.getElementById("rock");
playerRock.addEventListener("click", playRound, imageChange());
const playerPaper = document.getElementById("paper");
playerPaper.addEventListener("click", playRound, imageChange());
const playerScissors = document.getElementById("scissors");
playerScissors.addEventListener("click", playRound, imageChange());

//Set initial values
let playerCount = 0;
let computerCount = 0;
let gameCount = 0;

//One round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = this.className.toUpperCase();
  computerSelection = computerPlay().toUpperCase();
  gameCount++;

  document.querySelector(".round-number").textContent = "Round " + gameCount;
          
  function computerImage(computerSelection) {
      if (computerSelection == "ROCK") {
          document.querySelector('.computer-selection').src = "Rock.png";
      } else if (computerSelection == "PAPER") {
          document.querySelector('.computer-selection').src = "Paper.png";
      } else {
          document.querySelector('.computer-selection').src = "Scissors.png";
      }
  }
  computerImage(computerSelection);
      
  //To get results
  if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
  playerSelection === "PAPER" && computerSelection === "PAPER" ||
  playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
      document.querySelector(".result").textContent = "Tie!";
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
  playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
  playerSelection === "SCISSORS" && computerSelection === "ROCK") {
      document.querySelector(".result").textContent = "You Lose!";
      computerCount++;
  } else {
      document.querySelector(".result").textContent = "You Win!";
      playerCount++;           
  }

  //Display score results
  document.querySelector(".player-score").textContent =+ playerCount;
  document.querySelector(".computer-score").textContent =+ computerCount;

  //Displays winner of game
  if (gameCount == 5) {
      if (playerCount < computerCount) {
        document.querySelector('.result').textContent = "Game over! You lost";
        document.querySelector('.result').style.color = "red";
      }
      if (playerCount > computerCount) {
        document.querySelector('.result').textContent = "Congratulations! You won!";
        document.querySelector('.result').style.color = "green";
      }
      if (playerCount == computerCount) {
        document.querySelector('.result').textContent = "It\'s a tie! Try again.";
        document.querySelector('.result').style.color = "orange";
      }
   //remove buttons and result at the end of 5 rounds
    //create new button to reload page
      var elem = document.querySelector('.choices');
      elem.parentNode.removeChild(elem);
      
      const butt = document.querySelector('.restart-button');
      butt.textContent = 'New Game';
      butt.setAttribute('style', 'display: inline-block;');

      //reload page
      butt.addEventListener('click', () => {
      location.reload();
      });
  }
}