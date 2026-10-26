

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const gameResult = document.querySelector("#game-result");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  if (gameOver) {
    return;
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResult.textContent =
      `Tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult.textContent =
      `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult.textContent =
      `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreDisplay.textContent =
    `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;

    if (humanScore === 5) {
      gameResult.textContent = "Congratulations! You won the game!";
    } else {
      gameResult.textContent = "The computer won the game. Try again!";
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

