function concat(arr1,arr2){
    let args = Object.values(arguments).slice(1);
    args.forEach((value) => {
        if(Array.isArray(value)){
            value.forEach((element) => {
                arr1.push(element);
            })
        }   
    })
    return arr1
}
console.log(concat([1,2,3],[4,5,6]));   
console.log(concat([1, 2, 3], [4], [5], [6]));
console.log(concat([1], [[2], [3]], [4])); 