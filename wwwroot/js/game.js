let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let scores = { X: 0, O: 0, Draws: 0 };
let gameMode = "multiplayer"; // Default mode

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cell").forEach((cell, index) => {
        cell.addEventListener("click", () => handleClick(index));
    });

    document.getElementById("restartGame").addEventListener("click", restartGame);
    document.getElementById("resetScoreboard").addEventListener("click", resetScoreboard);
    document.getElementById("playAI").addEventListener("click", () => switchMode("ai"));
    document.getElementById("playMultiplayer").addEventListener("click", () => switchMode("multiplayer"));
});

function handleClick(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    document.getElementsByClassName("cell")[index].classList.add(currentPlayer.toLowerCase());

    let winningCombo = checkWin();
    if (winningCombo) {
        highlightWinningCells(winningCombo);
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        scores.Draws++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (gameMode === "ai" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
            return combo;
        }
    }
    return null;
}

function highlightWinningCells(combo) {
    combo.forEach(i => document.getElementsByClassName("cell")[i].classList.add("winning-cell"));
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";

    document.querySelectorAll(".cell").forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("x", "o", "winning-cell");
    });

    if (gameMode === "ai" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

function resetScoreboard() {
    scores = { X: 0, O: 0, Draws: 0 };
    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById("xWins").innerText = scores.X;
    document.getElementById("oWins").innerText = scores.O;
    document.getElementById("draws").innerText = scores.Draws;
}

function switchMode(mode) {
    gameMode = mode;
    restartGame(); // Restart game when switching modes

    // 🛠 If switching to AI mode and it's O's turn, let AI move immediately!
    if (gameMode === "ai" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

function aiMove() {
    if (!gameActive) return;

    let availableMoves = board.map((val, index) => val === "" ? index : null).filter(val => val !== null);
    if (availableMoves.length === 0) return;

    let move = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    board[move] = "O";
    document.getElementsByClassName("cell")[move].innerText = "O";
    document.getElementsByClassName("cell")[move].classList.add("o");

    if (checkWin()) {
        highlightWinningCells(checkWin());
        scores["O"]++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        scores.Draws++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    currentPlayer = "X";
}
function handleClick(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    document.getElementsByClassName("cell")[index].classList.add(currentPlayer.toLowerCase());

    let winningCombo = checkWin();
    if (winningCombo) {
        highlightWinningCells(winningCombo);
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;

        // Automatically restart the game after 2 seconds
        setTimeout(restartGame, 2000);

        return;
    }

    if (!board.includes("")) {
        scores.Draws++;
        updateScoreboard();
        gameActive = false;

        // Automatically restart the game after 2 seconds
        setTimeout(restartGame, 000);

        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (gameMode === "ai" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

function handleClick(index) {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    document.getElementsByClassName("cell")[index].classList.add(currentPlayer.toLowerCase());

    let winningCombo = checkWin();
    if (winningCombo) {
        highlightWinningCells(winningCombo);
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;
        
        // Automatically restart the game after 2 seconds
        setTimeout(restartGame, 2000);
        
        return;
    }

    if (!board.includes("")) {
        scores.Draws++;
        updateScoreboard();
        gameActive = false;
        
        // Automatically restart the game after 2 seconds
        setTimeout(restartGame, 2000);
        
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (gameMode === "ai" && currentPlayer === "O") {
        setTimeout(aiMove, 500);
    }
}

