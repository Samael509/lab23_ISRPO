const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
  [0, 1, 2], // первая г
  [3, 4, 5], // вторая г
  [6, 7, 8], // третья г
  [0, 3, 6], // первая в
  [1, 4, 7], // вторая в
  [2, 5, 8], // третья в
  [0, 4, 8], // слева-направо
  [2, 4, 6], // справа-налево
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.getAttribute("data-index");

  if (board[index] !== "" || !gameActive) {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  checkResult();
}

function checkResult() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `игрок ${currentPlayer} победил!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusText.textContent = "ничья!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `ход игрока: ${currentPlayer}`;
}

function restartGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusText.textContent = "ход игрока: X";

  cells.forEach((cell) => {
    cell.textContent = "";
  });
}