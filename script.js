const playerINfo = document.querySelector(".info-player");
const Boxes = document.querySelectorAll(".box");
const newButton = document.querySelector(".new-btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initgame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  //ui ko bhi show karna padega
  Boxes.forEach((box, Index) => {
    box.innerText = "";
    Boxes[Index].style.pointerEvents = "all";

    box.classList = `box box${Index + 1}`;
  });
  console.log("init function is working");
  newButton.classList.remove("active");
  playerINfo.innerText = `Current Player-${currentPlayer}`;
}

initgame();

function checkGameover() {
  let answer = "";

  winningPosition.forEach((position) => {
    if (
      (gameGrid[position[0]] !== "" ||
        gameGrid[position[1]] !== "" ||
        gameGrid[position[2] !== ""]) &&
      gameGrid[position[0]] === gameGrid[position[1]] &&
      gameGrid[position[1]] === gameGrid[position[2]]
    ) {
      //chwek if winner is X
      if (gameGrid[position[0]] === "X")
         answer = "X";
      else answer = "O";

      //disable pointer events
      Boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      //now know X/o is winner
      Boxes[position[0]].classList.add("win");
      Boxes[position[1]].classList.add("win");
      Boxes[position[2]].classList.add("win");
    }
  });

  //Its means that answerwe have a winner
  if (answer !== "") {
    playerINfo.innerText = `Winner Player-${answer}`;
    newButton.classList.add("active");
    return;
  }

  //We know let's check  whether there is tie
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if (box !== "") fillCount++;
  });
  console.log("check wiinner function is working");
  //board is fill
  if (fillCount === 9) {
    playerINfo.innerText = "Game Tie";
    newButton.classList.add("active");
  }
}

function swapPlayer() {
  console.log("swap function is working");
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  playerINfo.innerText = `Current Player-${currentPlayer}`;
}
 
function handleToClick(Index) {
  if (gameGrid[Index] === "") {
    Boxes[Index].innerHTML = currentPlayer;
    gameGrid[Index] = currentPlayer;
    Boxes[Index].style.pointerEvents = "none";
    console.log("handle function is working");
    //create funtion to swapping player
    swapPlayer();
    //create function to checkking anyone player have't win
    checkGameover();
  }
}

Boxes.forEach((box, Index) => {
  box.addEventListener("click", () => {
    handleToClick(Index);
  });
});

newButton.addEventListener("click", initgame);
