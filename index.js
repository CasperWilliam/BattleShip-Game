const rs = nrequire("readline-sync");

const grid = [
    [["A1"], ["A2"], ["A3"]],
    [["B1"], ["B2"], ["B3"]],
    [["C1"], ["C2"], ["C3"]],
];

const userArray = grid.flat(2);
let destroyedBattleShips = [];
let battleShipCoordinates = [];
let userGuesses = [];
let flatGrid = grid.flat()
let availableGrid = [];
function BattleShipGame() {
    function initializeGame() {
        destroyedBattleShips = [];
        battleShipCoordinate = [];
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
        let flatGrid = grid.flat(2);
        let battleShipLocation1 =
            flatGrid[Math.floor(Math.random() * flatGrid.length)];
        battleShipCoordinates.push(battleShipLocation1);
        return battleShipLocation1;
    };
    const createBattleShip2 = () => {
        let flatGrid = grid.flat(2);
        let battleShipLocation2 =
            flatGrid[Math.floor(Math.random() * flatGrid.length)];
        battleShipCoordinates.push(battleShipLocation2);
        return battleShipLocation2;
    };
    function strikeCoordinates() {
        userInput = rs.question("Enter strike coordinates now!\n");
        args = userInput;
        if (userGuesses.includes(userInput)) {
            console.log(
                "Sorry, but you already guessed that - let's try another guess this time!"
            );
            strikeCoordinates();
        } else if (userInput === battleShip1 || userInput === battleShip2) {
            console.log("You sunk the battleship!");
            userGuesses.push(userInput);
            destroyedBattleShips.push(userInput);
            if (destroyedBattleShips.length === 2) {
                console.log("You destroyed all the battleships!");
                playAgain();
            }
            strikeCoordinates();
        } else if (
            userArray.includes(userInput) ||
            (userArray.includes(userInput) && !battleShip1) ||
            (userArray.includes(userInput) && !battleShip2)
        ) {
            console.log("Nice try, but you missed! Try again!");
            userGuesses.push(userInput);
            strikeCoordinates();
            console.log(userMisses);
        } else {
            console.log("Something isn't quite right - let's try that again.\n");
            strikeCoordinates();
        }
    }
    playAgain = () => {
        if (rs.keyInYN("Do you want to play again?")) {
            BattleShipGame();
        } else {
            return;
        }
    };
    initializeGame();
    createBattleShip1();
    createBattleShip2();
    const battleShip1 = createBattleShip1();
    const battleShip2 = createBattleShip2();
    strikeCoordinates();
}
BattleShipGame();










