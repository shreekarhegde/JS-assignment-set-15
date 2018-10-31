function slice(array, index, previousToThis = array.length) {
    if(previousToThis>array.length){
        previousToThis = array.length;
    }
    console.log(previousToThis);
    let newArray = [];
    let anotherArray = [];
    let x = [];
    for (let i = 0; i < previousToThis; i++) {
        newArray[i] = array[i];
    }
    for (let j = newArray.length - 1; j >= index; j--) {
        anotherArray[j] = newArray[j];
        x.unshift(anotherArray[j]);
    }
    return x;
}

//console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice([1, 2, 3, 4, 5], 2, 4));
//console.log(slice([1, 2, 3, 4, 5], 2));
console.log(slice([1, 2, 3, 4, 5], 2,10));