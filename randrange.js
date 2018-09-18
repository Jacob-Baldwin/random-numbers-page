// Computes a random int between min and max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}
