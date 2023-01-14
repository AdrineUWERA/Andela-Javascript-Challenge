function getPrimeNumbers(arr) {
  let primeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }

  return primeNumbers;
}

function isPrimeNumber(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
