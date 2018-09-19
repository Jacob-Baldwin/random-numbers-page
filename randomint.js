// Computes a random int between min and max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function handleRandomIntButton() {
  let input_min = document.getElementById('RandomIntMin').value;
  input_min = +input_min;
  let input_max = document.getElementById('RandomIntMax').value;
  input_max = +input_max;

  document.getElementById('RandomIntOutput').innerHTML = getRandomInt(input_min, input_max);
}
