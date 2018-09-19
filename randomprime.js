// computes a random prime number between 0 and 1000000
function getRandomPrime() {
  var i;
  while (true) {
    i = getRandomInt(0, 1000000);
    if (math.isPrime(i)) {
      return i;
    }
  }
}

function handleRandomPrimeButton() {
  document.getElementById('OutputDisplay').innerHTML = getRandomPrime();
}
