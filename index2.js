const rs = require("readline-sync");

let grid = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10"],
  ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10"],
  ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10"],
  ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
  ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10"],
];

const userArray = grid.flat();
let unavailableGrid = []
let destroyedBattleShips = [];
let userGuesses = [];
function BattleShipGame() {
  function initializeGame() {
    destroyedBattleShips = [];
    battleShipCoordinates = [];
    userGuesses = [];
    gameStart = rs.question("Press enter to start the game\n");
    args = gameStart;
    if ((args = true)) {
      console.log(
        'It\'s time to play Battleship! Choose a location to strike in the following format "A1-3, B1-3, or C1-3". I.E "A2" or "C3".'
      );
      console.log(
        "Please enter your strike coordinates in the correct format, or you will be asked to re-enter coordinates."
      );
    }
  }

  const createBattleShip1 = () => {
    // 5 cell ship
    let battleShipLocation1 = grid[Math.floor(Math.random() * grid.length)];

    unavailableGrid.push(battleShipLocation1)

    let battleShipSliceArray = battleShipLocation1.slice(0, 6);
    
    let battleShipStartlocation =
      battleShipSliceArray[
        Math.floor(Math.random() * battleShipSliceArray.length)
      ];

    let indexNum = battleShipLocation1.indexOf(battleShipStartlocation);

    let fiveShipArray = "";

    for (i = indexNum; i <= 9; i++) {
      fiveShipArray = fiveShipArray + i;
      if (fiveShipArray.length == 5) break;
    }

    let shipTransfer = Array.from(fiveShipArray);

    let fiveShipFinal = battleShipLocation1.splice(
      shipTransfer[0],
      shipTransfer.length
    );
    return fiveShipFinal;
  };

  const createBattleShip2 = () => {
    // four cell ship
    let battleShipLocation2 = grid[Math.floor(Math.random() * grid.length)];

    for (let i = 0;i < unavailableGrid.flat().length; i++) {
      if (battleShipLocation2.includes(unavailableGrid.flat()[i])) {
        return createBattleShip2();
      }
    }

    unavailableGrid.push(battleShipLocation2)

    let battleShipSliceArray = battleShipLocation2.slice(0, 5);

    let battleShipStartlocation =
      battleShipSliceArray[
        Math.floor(Math.random() * battleShipSliceArray.length)
      ];

    let indexNum = battleShipLocation2.indexOf(battleShipStartlocation);

    let fourShipArray = "";

    for (i = indexNum; i <= 9; i++) {
      fourShipArray = fourShipArray + i;
      if (fourShipArray.length == 4) break;
    }

    let shipTransfer = Array.from(fourShipArray);

    let fourShipFinal = battleShipLocation2.splice(
      shipTransfer[0],
      shipTransfer.length
    );
    return fourShipFinal;
  };

  const createBattleShip3 = () => {
    // three cell ship 1
    let battleShipLocation3 = grid[Math.floor(Math.random() * grid.length)];

    for (let i = 0;i < unavailableGrid.flat().length; i++) {
      if (battleShipLocation3.includes(unavailableGrid.flat()[i])) {
        return createBattleShip3();
      }
    }

    unavailableGrid.push(battleShipLocation3)

    let battleShipSliceArray = battleShipLocation3.slice(0, 4);

    let battleShipStartlocation =
      battleShipSliceArray[
        Math.floor(Math.random() * battleShipSliceArray.length)
      ];

    let indexNum = battleShipLocation3.indexOf(battleShipStartlocation);

    let threeShipArray = "";

    for (i = indexNum; i <= 9; i++) {
      threeShipArray = threeShipArray + i;
      if (threeShipArray.length == 3) break;
    }

    let shipTransfer = Array.from(threeShipArray);

    let threeShipFinal = battleShipLocation3.splice(
      shipTransfer[0],
      shipTransfer.length
    );
    return threeShipFinal;
  };

  const createBattleShip4 = () => {
    // three cell ship 2
    let battleShipLocation4 = grid[Math.floor(Math.random() * grid.length)];

    for (let i = 0;i < unavailableGrid.flat().length; i++) {
      if (battleShipLocation4.includes(unavailableGrid.flat()[i])) {
        return createBattleShip4();
      }
    }

    unavailableGrid.push(battleShipLocation4)

    let battleShipSliceArray = battleShipLocation4.slice(0, 4);

    let battleShipStartlocation =
      battleShipSliceArray[
        Math.floor(Math.random() * battleShipSliceArray.length)
      ];

    let indexNum = battleShipLocation4.indexOf(battleShipStartlocation);

    let threeShipArray = "";

    for (i = indexNum; i <= 9; i++) {
      threeShipArray = threeShipArray + i;
      if (threeShipArray.length == 3) break;
    }

    let shipTransfer = Array.from(threeShipArray);

    let threeShipFinal = battleShipLocation4.splice(
      shipTransfer[0],
      shipTransfer.length
    );
    return threeShipFinal;
  };

  const createBattleShip5 = () => {
    // two cell ship
    let battleShipLocation5 = grid[Math.floor(Math.random() * grid.length)];

    for (let i = 0;i < unavailableGrid.flat().length; i++) {
      if (battleShipLocation5.includes(unavailableGrid.flat()[i])) {
        return createBattleShip5();
      }
    }

    let battleShipSliceArray = battleShipLocation5.slice(0, 2);

    let battleShipStartlocation =
      battleShipSliceArray[
        Math.floor(Math.random() * battleShipSliceArray.length)
      ];

    let indexNum = battleShipLocation5.indexOf(battleShipStartlocation);

    let twoShipArray = "";

    for (i = indexNum; i <= 9; i++) {
      twoShipArray = twoShipArray + i;
      if (twoShipArray.length == 2) break;
    }

    let shipTransfer = Array.from(twoShipArray);

    let twoShipFinal = battleShipLocation5.splice(
      shipTransfer[0],
      shipTransfer.length
    );
    return twoShipFinal;
  };

  const battleShip1 = createBattleShip1();
  let ghostShip1 = []
  
  const battleShip2 = createBattleShip2();
  let ghostShip2 = []
  
  const battleShip3 = createBattleShip3();
  let ghostShip3 = []
  
  const battleShip4 = createBattleShip4();
  let ghostShip4 = []
  
  const battleShip5 = createBattleShip5();
  let ghostShip5 = []

  function shipChecks() {
        if (ghostShip1.length == 4) {
          console.log("You sank a ship")
          ghostShip1 = []
        } else if (battleShip1.includes(userInput)) {
          ghostShip1.push('hit')
        } 
        
        if (ghostShip2.length == 3) {
          console.log("You sank a ship!");
          ghostShip2 = []
        } else if (battleShip2.includes(userInput)) {
          ghostShip2.push('hit')
        }

        if (ghostShip3.length == 2) {
          console.log("You sank a ship!");
          ghostShip3 = []
        } else if (battleShip3.includes(userInput)) {
          ghostShip3.push('hit')
        }

        if (ghostShip4.length == 2) {
          console.log("You sank a ship!");
          ghostShip4 = []
        } else if (battleShip4.includes(userInput)) {
          ghostShip4.push('hit')
        }

        if (ghostShip5.length == 1) {
          console.log("You sank a ship!");
          ghostShip5= []
        } else if (battleShip5.includes(userInput)) {
          ghostShip5.push('hit')
        }
      }
  

  function strikeCoordinates() {
    userInput = rs.question("Enter strike coordinates now!\n");
    args = userInput;
    if (userGuesses.includes(userInput)) {
      console.log(
        "Sorry, but you already guessed that - let's try another guess this time!"
      );
      strikeCoordinates();
    } else if (
      battleShip1.includes(userInput) ||
      battleShip2.includes(userInput) ||
      battleShip3.includes(userInput) ||
      battleShip4.includes(userInput) ||
      battleShip5.includes(userInput)
    ) {
      console.log("that's a hit!");
      userGuesses.push(userInput);
      shipChecks()
      destroyedBattleShips.push(userInput);
      if (destroyedBattleShips.length === 17) {
        console.log("You destroyed all the battleships!");
        playAgain();
      }
      strikeCoordinates();
    } else if (
      userArray.includes(userInput) ||
      (userArray.includes(userInput) && !battleShip1) ||
      (userArray.includes(userInput) && !battleShip2) ||
      (userArray.includes(userInput) && !battleShip3) ||
      (userArray.includes(userInput) && !battleShip4) ||
      (userArray.includes(userInput) && !battleShip5)
    ) {
      console.log("Nice try, but you missed! Try again!");
      userGuesses.push(userInput);
      strikeCoordinates();
    } else {
      console.log("Something isn't quite right - let's try that again.\n");
      strikeCoordinates();
    }
  }

  exitGame = () => {
    return;
  }
  playAgain = () => {
    if (rs.keyInYN("Do you want to play again?")) {
      BattleShipGame();
    } else {
      process.exit()
    }
  };
  strikeCoordinates();
  initializeGame();
}
BattleShipGame();