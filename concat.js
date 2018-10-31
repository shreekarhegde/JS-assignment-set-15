function concat(array1,array2,array3 = [0],array4 = [0],array5 = [0]){
    let x = [];
    array1.forEach(element => {
       // console.log(element);
        if(Array.isArray(element)){
           // console.log(element);
            element = element.pop();
            //console.log(element);
        }
        console.log(element);
        x.push(element);
    });
    // array2.forEach(element => {
    //     if(Array.isArray(element)){
    //         element = element.pop();
    //     }
    //     array1.push(element);
    // });
return x;
}

console.log(concat([1,[[2]],[[3]],4]));