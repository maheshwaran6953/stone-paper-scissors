const loseEmojis = ["😢", "😂", "😭", "😵", "🤡", "🙈", "🤯", "💀", "👎", "🐌"];
const winEmojis = ["🎉", "🥳", "😎", "🤩", "💪", "🔥", "🏆", "👑", "🌟", "💖"];
const option = ["stone", "paper", "scissor"];
var tie = 0;
var playerScore = 0;
var computerScore = 0;
var y_result = document.getElementById("yscore");
var c_result = document.getElementById("cscore");

function computerChoice() {
    var Choice = Math.floor(Math.random() * option.length);
    return option[Choice];
}
function playGame(playerChoice) {
    var randomChoice = computerChoice();

    y_result.classList.add("show");
    c_result.classList.add("show");

    if (playerChoice == randomChoice) {
    y_result.innerHTML = "It's a tie!";
    tie++;
    c_result.innerHTML = "Total ties: " + tie;
} else if (
    (playerChoice == "stone" && randomChoice == "scissor") ||
    (playerChoice == "paper" && randomChoice == "stone") ||
    (playerChoice == "scissor" && randomChoice == "paper")
) {
    playerScore++;
    y_result.innerHTML =" ✅ Your score ! " + playerScore +
      winEmojis[Math.floor(Math.random() * winEmojis.length)];
    c_result.innerHTML = " ❌ Computer score ! " + computerScore;
    if (playerScore == 5) {
        alert("Congratulations " + winEmojis[2] + "! You won the game ");
        playerScore = 0;
        computerScore = 0;
        tie = 0;
        y_result.innerHTML = "Your Score ! 0";
        c_result.innerHTML = "Computer Score ! 0";
    }
} else {
    alert(
      "You lose!" + loseEmojis[Math.floor(Math.random() * loseEmojis.length)]
    );
    computerScore++;
    document.querySelectorAll("button").forEach((button) => {
        button.classList.add("shake");
        setTimeout(() => {
        button.classList.remove("shake");
    }, 300);
    });

    y_result.innerHTML = " ❌  Your score ! " + playerScore;
    c_result.innerHTML = " ✅ Computer Score: " + computerScore;
    if (computerScore == 5) {
        alert("Hey Shameless fellow, you lose the game!");
        playerScore = 0;
        computerScore = 0;
        tie = 0;
        y_result.innerHTML = "Your Score ! 0";
        c_result.innerHTML = "Computer Score ! 0";
    }
}

console.log("Player choice: " + playerChoice);
console.log("Computer choice: " + randomChoice);
}
