function inPlaceReverse(arr) {
  for (let k = 0; k < arr.length/2; k++) { 
    [arr[k] , arr[arr.length - (k+1)]] = [arr[arr.length - (k+1)], arr[k]];
  }
  return arr;
}

console.log(inPlaceReverse([1, 2, 3, 4, 5, 6, 7]));

