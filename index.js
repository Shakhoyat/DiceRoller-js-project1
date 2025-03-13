//DICE ROLLER PROGRAM

function rolldice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult").value;
  const diceImages = document.getElementById("diceImages").value;

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(value);
    // values.push(value);
    // images.push(`images/dice${value}.png`);
  }
  // Generate a random number between 1 and 6

  // return randomNumber;
}
