$(document).ready(function () {
  const box0 = $("#0");
  const box1 = $("#1");
  const box2 = $("#2");
  const box3 = $("#3");
  const box4 = $("#4");
  const box5 = $("#5");
  const box6 = $("#6");
  const box7 = $("#7");
  const box8 = $("#8");
  let currentPlayer = "X";
  let spaces = [null, null, null, null, null, null, null, null, null];
  box0.on("click", function () {
    if (spaces[0] === null) {
      box0.html(currentPlayer);
      spaces[0] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box1.on("click", function () {
    if (spaces[1] === null) {
      box1.html(currentPlayer);
      spaces[1] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box2.on("click", function () {
    if (spaces[2] === null) {
      box2.html(currentPlayer);
      spaces[2] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box3.on("click", function () {
    if (spaces[3] === null) {
      box3.html(currentPlayer);
      spaces[3] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box4.on("click", function () {
    if (spaces[4] === null) {
      box4.html(currentPlayer);
      spaces[4] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box5.on("click", function () {
    if (spaces[5] === null) {
      box5.html(currentPlayer);
      spaces[5] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box6.on("click", function () {
    if (spaces[6] === null) {
      box6.html(currentPlayer);
      spaces[6] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box7.on("click", function () {
    if (spaces[7] === null) {
      box7.html(currentPlayer);
      spaces[7] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  box8.on("click", function () {
    if (spaces[8] === null) {
      box8.html(currentPlayer);
      spaces[8] = currentPlayer;
      playerHasWon();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
  const playerHasWon = () => {
    const winCombination = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [2, 4, 6],
    ];
    winCombination.forEach((thisCombination) => {
      if (
        spaces[thisCombination[0]] !== null &&
        spaces[thisCombination[1]] !== null &&
        spaces[thisCombination[2]] !== null
      ) {
        if (
          spaces[thisCombination[0]] === spaces[thisCombination[1]] &&
          spaces[thisCombination[1]] === spaces[thisCombination[2]]
        ) {
          $("#playText").html(`${currentPlayer} won.`);
          return true;
        }
      }
    });
    let tie = true;
    for (i = 0; i < spaces.length; i++) {
      if (spaces[i] === null) {
        tie = false;
      }
    }
    if (tie === true) {
      $("#playText").html(`It is a tie`);
    }
  };
  $("#restartBtn").on("click", function () {
    spaces = [null, null, null, null, null, null, null, null, null];
    $(".box").html("");
    $("#playText").html("Let's Play Again!");
  });
});
