// 1. Deposit some money
// 2. Deteremine number of line to be on
// 3. Colect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();
const ROWS = 3;
const COLS = 3;


const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};


const getNumberOfLines = () =>{
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || (numberOfLines <= 0 || numberOfLines > 3)) {
      console.log("Invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
}

const getBet = (balanceParameter, linesParameter) =>{
while (true) {
    const bet = prompt("Enter the total bet per line: ");
    const betAmount = parseFloat(bet);

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balanceParameter / linesParameter ) {
      console.log("Invalid bet amount");
    } else {
      return betAmount ;
    }
  }  
}


let balance = deposit();
const numberOfChosenLines = getNumberOfLines();
const bet = getBet(balance ,  numberOfChosenLines);
console.log(bet)
 