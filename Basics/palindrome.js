function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() !== str[str.length - (i+1)].toLowerCase()){
        return false;
    }
  }
  return true;
}

console.log(isPalindrome("Adrrd"));

// Short answer
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }