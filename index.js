//DICE ROLLER PROGRAM

function diceRoller() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult").value;
  const diceImages = document.getElementById("diceImages").value;
  // Generate a random number between 1 and 6
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
