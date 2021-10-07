$(document).ready(function () {
  let winCondition = false; //for detecting the right win condition
  let currentPlayer = "X"; // defualt start character
  const playerOne = prompt("Player One Name ?"); //for players naming
  const playerTwo = prompt("Player Two Name ?"); //for players naming
  // const playerOne = "Ehsan";
  // const playerTwo = "ET";
  let winnerName = ""; // passin the name of winner as string
  let winCount = []; // number of hand won for each player--players name will go here as a winner
  let spaces = [null, null, null, null, null, null, null, null, null];
  let reuseThisCombination = []; // to use for removing the yello color for winning line after pressing the restart
  $("#playerOne").html(playerOne); /// inserting the name of the winner
  $("#playerTwo").html(playerTwo); /// inserting the name of the winner
  $("#playerOne").css("color", "yellow"); // converting the who's turn is that become yellow
  //////////click handler//////////using (e.target.id) to select id of each box clicked/////////
  $(".box").on("click", function (e) {
    $("#gameboard").removeClass("animate__animated animate__backInDown"); ///removing the animation of game board after restart button
    if (spaces[e.target.id] === null && winCondition === false) {
      //selecting the clicked box
      $(`#${e.target.id}`).html(currentPlayer); //inserting the X or O
      $(`#${e.target.id}`).addClass("animate__animated animate__flipInY"); //inserting the filiping effect for clicked box
      spaces[e.target.id] = currentPlayer; //to insert  the X or O in the spaces array
      playerHasWon(); /// calling the game winning condition
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
    /////game conditions
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
      //checking all 8 winning conditions
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
          changingLineColor(thisCombination);
          if (currentPlayer === "X") {
            winnerName = playerOne;
          } else {
            winnerName = playerTwo;
          }
          winCount.push(winnerName); //passing the winner name to the winnerName variable and print it on the html (text)
          $("#playText").html(`${winnerName} won.`);
          $("#playText").css("color", "yellow");
          winnerCounter();
          reuseThisCombination.push(thisCombination);
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
    $("#gameboard").addClass("animate__animated animate__backInDown");
    removeAnimation();
    reuseThisCombination.forEach(function (myCombination) {
      removeWinColor(myCombination);
    });
    $("#playText").html("Let's Play Again!");
    $("#playText").css("color", "#3e0249");
  });
  const removeAnimation = () => {
    for (i = 0; i < 9; i++) {
      $(`#${i}`).removeClass("animate__animated animate__flipInY");
    }
  };
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
  const changingLineColor = (combination) => {
    combination.forEach((index) => {
      $(`#${index}`).css("color", "yellow");
    });
  };
  const removeWinColor = (combination) => {
    combination.forEach((index) => {
      $(`#${index}`).css("color", "#3e0249");
    });
  };
});
