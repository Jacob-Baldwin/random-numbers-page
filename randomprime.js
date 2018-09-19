// import that math.js library for the isprime function
const math = require('./math.js');
const randomrange = require ('./randomrange.js');

// computes a random prime number between 0 and 10000
function getRandomPrime() {
  var i;
  while (true) {
    i = randomrange(0, 10000);
    if (math.isPrime(i)) {
      return i;
    }
  }
}
