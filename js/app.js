$(document).ready(function () {
  let winCondition = false;
  let currentPlayer = "X";
  const playerOne = prompt("Player One Name ?");
  const playerTwo = prompt("Player Two Name ?");
  // const playerOne = "Ehsan";
  // const playerTwo = "ET";
  let winnerName = "";
  let winCount = [];
  let spaces = [null, null, null, null, null, null, null, null, null];
  $("#playerOne").html(playerOne);
  $("#playerTwo").html(playerTwo);
  $("#playerOne").css("color", "yellow");
  //////////click handler//////////using (e.target.id) to select id of each box clicked/////////
  $(".box").on("click", function (e) {
    if (spaces[e.target.id] === null && winCondition === false) {
      $(`#${e.target.id}`).html(currentPlayer);
      spaces[e.target.id] = currentPlayer;
      playerHasWon();
      if (winCondition === true) {
        return;
      }
      if (currentPlayer === "X") {
        $("#playerOne").css("color", "#3e0249");
        $("#playerTwo").css("color", "yellow");
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
        $("#playerOne").css("color", "yellow");
        $("#playerTwo").css("color", "#3e0249");
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
          if (currentPlayer === "X") {
            winnerName = playerOne;
          } else {
            winnerName = playerTwo;
          }
          winCount.push(winnerName);
          $("#playText").html(`${winnerName} won.`);
          $("#playText").css("color", "yellow");
          winnerCounter();
          $("#playerTwo").css("color", "#3e0249");
          $("#playerOne").css("color", "#3e0249");
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
      $("#playerTwo").css("color", "#3e0249");
      $("#playerOne").css("color", "#3e0249");
    }
  };
  //////////restart button///////////
  $("#restartBtn").on("click", function () {
    spaces = [null, null, null, null, null, null, null, null, null];
    winCondition = false;
    $(".box").html("");
    $("#playText").html("Let's Play Again!");
    $("#playText").css("color", "#3e0249");
  });
  const winnerCounter = () => {
    let playerOneWins = 0;
    let playerTwoWins = 0;
    for (i = 0; i < winCount.length; i++) {
      if (winCount[i] === playerOne) {
        playerOneWins += 1;
      } else {
        playerTwoWins += 1;
      }
    }
    $("#playerOneResult").html(playerOneWins);
    $("#playerTwoResult").html(playerTwoWins);
  };
});
