//Returns a random float between 0 and 1
function getRandomFloat() {
  return Math.random();
}

function handleRandomFloatButton() {
  document.getElementById('RandomFloatOutput').innerHTML = getRandomFloat();
}
