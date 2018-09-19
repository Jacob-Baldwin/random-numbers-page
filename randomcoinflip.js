//returns randomly true or false
function getRandomBool() {
  return !!Math.floor(Math.random() + 0.5);
}

function handleCoinFlipButton() {
  if (getRandomBool()) {
    document.getElementById('CoinFlipOutput').innerHTML = "Heads";
  }
  else {
    document.getElementById('CoinFlipOutput').innerHTML = "Tails";
  }
}
