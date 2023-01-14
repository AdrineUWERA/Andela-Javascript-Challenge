function reverseArr(arr) {
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(reverseArr(["a", "b", "c"]));

// Short Answer

// function reverseArr(arr) {
//   let newArr = [];
//   newArr = arr.reverse();

//   return newArr;
// }