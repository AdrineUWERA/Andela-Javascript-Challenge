function sortAndRemovePrime(arr){ 
    for(var i=0;i<arr.length;i++){
        if(isPrimeNumber(arr[i])){
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--;
        }
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    }

    return arr;

}

function isPrimeNumber(num){
    if (num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }

    return true;
}

console.log(sortAndRemovePrime([1,2,3,11,4,5,8,9,6,1]));