function hasMajorityElements(arr){
    let max = 0; 
    let elementCount = {};
    for (let i=0; i<arr.length; i++){
        let c = 0;
        for (let j=0; j<arr.length; j++){
            if (arr[j] == arr[i]){
                c++;
            }
            elementCount[arr[i]] = c;
        }
        if (c> arr.length/2){
            return true;
        }
    }

    return false;

}

console.log(hasMajorityElements([3,1,3,4,4]));