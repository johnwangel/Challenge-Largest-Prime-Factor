/*jshint esversion: 6 */
exports.largestPrimeFactor = function(n){

  function isPrime(testNo){
    for (let j = 2; j <= Math.floor(Math.sqrt(testNo)); j++) {
      if (j == testNo){ return testNo; }
      if (testNo%j === 0){ return false; }
    }
  }

  for (let i = Math.floor(Math.sqrt(n)); i > 0 ; i--) {
    if (n%i === 0){
      if (isPrime(i) !== false) { return i; }
    }
  }
};