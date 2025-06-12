let player_turn = "O"; // this can be "O"/"X" <---- program start

const tiles = document.querySelectorAll(".tile"); // 9 buttons  <---- program start

function checkWin() {
  if (checkRowWin() || checkColumnWin() || checkDiagonalWin()) {
    return true;
  }
  return false;
}

tiles.forEach((tile) => {
  // <---- program start
  // for each button
  // tile -> html node
  tile.addEventListener("click", () => {
    // <---- program start
    // check if player is "O"
    if (player_turn == "O") {
      // <---- only run on click
      tile.innerText = "O"; // html node -> "O"                      // <---- only run on click
      tile.disabled = true; // html node disable                     // <---- only run on click
      player_turn = "X"; // change player turn to "X"                // <---- only run on click
    } else {
      // this is turn of player "X"
      tile.innerText = "X"; // html node -> "X"
      tile.disabled = true; // html node disbale
      player_turn = "O"; // change player turn to "O"
    } // <---- only run on click

    let winner = checkWin();
    if (winner) {
      alert(`Player ${winner} wins!`);
      // Disable further clicks
      tiles.forEach((tile) => (tile.disabled = true));
    } else if (checkDraw()) {
      alert("It's a draw!");
      tiles.forEach((tile) => (tile.disabled = true));
    }
  });
});

// <---- defined program start
function checkColumnWin() {
  for (let i = 0; i < 3; i++) {
    if (
      tiles[i].innerText !== "" &&
      tiles[i].innerText === tiles[i + 3].innerText &&
      tiles[i].innerText === tiles[i + 6].innerText
    ) {
      return tiles[i].innerText;
    }
  }
  return null;
}

// <---- defined program start

function checkRowWin() {
  for (let i = 0; i < 3; i++) {
    if (
      tiles[i * 3].innerText !== "" &&
      tiles[i * 3].innerText === tiles[i * 3 + 1].innerText &&
      tiles[i * 3].innerText === tiles[i * 3 + 2].innerText
    ) {
      return tiles[i * 3].innerText;
    }
  }
  return null;
}

function checkDiagonalWin() {
  if (
    tiles[0].innerText !== "" &&
    tiles[0].innerText === tiles[4].innerText &&
    tiles[0].innerText === tiles[8].innerText
  ) {
    return tiles[0].innerText;
  }
  if (
    tiles[2].innerText !== "" &&
    tiles[2].innerText === tiles[4].innerText &&
    tiles[2].innerText === tiles[6].innerText
  ) {
    return tiles[2].innerText;
  }
  return null;
}

// <--- program start
newbtn.addEventListener("click", () => {
  // <--- program start add listneer
  tiles.forEach((tile) => {
    // <--- only click
    tile.textContent = ""; // <--- only click
    tile.disabled = false; // <--- only click
  });
  player_turn = "X"; // <--- program start
});
