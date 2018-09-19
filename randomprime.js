// computes a random prime number between 0 and 1000000
function getRandomPrime(max) {
  var i;
  while (true) {
    i = getRandomInt(0, max);
    if (math.isPrime(i)) {
      return i;
    }
  }
}

function handleRandomPrimeButton() {
  let input_max = +document.getElementById("RandomPrimeMax").value;
  document.getElementById('RandomPrimeOutput').innerHTML = getRandomPrime(input_max);
}
