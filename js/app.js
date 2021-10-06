$(document).ready(function () {
  let winCondition = false;
  let currentPlayer = "X";
  let spaces = [null, null, null, null, null, null, null, null, null];
  //////////click handler//////////using (e.target.id) to select id of each box clicked/////////
  $(".box").on("click", function (e) {
    if (spaces[e.target.id] === null && winCondition === false) {
      $(`#${e.target.id}`).html(currentPlayer);
      spaces[e.target.id] = currentPlayer;
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
          winCondition = true;
          $("#playText").html(`${currentPlayer} won.`);
          return true;
        }
      }
    });
    /////////tie condition////////////
    let tie = true;
    if (winCondition === true) {
      return;
    }
    for (i = 0; i < spaces.length; i++) {
      if (spaces[i] === null) {
        tie = false;
      }
    }
    if (tie === true) {
      $("#playText").html(`It is a tie`);
    }
  };
  //////////restart button///////////
  $("#restartBtn").on("click", function () {
    spaces = [null, null, null, null, null, null, null, null, null];
    winCondition = false;
    $(".box").html("");
    $("#playText").html("Let's Play Again!");
  });
  $(".box").on("click", function (e) {
    console.log(e.target.id);
  });
});
