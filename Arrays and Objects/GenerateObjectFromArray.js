function generateObject(arr){
    let people={};
    for(let i=0;i<arr.length;i++){
        let innerObj={};
        innerObj[arr[i].split(" ")[1]] = arr[i].split(" ")[2];
        people[arr[i].split(" ")[0]] = innerObj;
    }

    return people;
}

console.log(generateObject(['Patrick wyne, 30', 'lil wyne, 32', 'Eric mimi, 21', 'Dodos deck, 21', 'Alian Dwine, 22', 'Patrick wyne, 33', 'Patrick wyne, 100', 'Patrick wyne, 40']))