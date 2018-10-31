function max(array){
    let max;
    for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i+1]){
            let x = array[i+1];
             array[i+1] = array[i];
             array[i] = x;
        }
        max = array[i];
    }
   return max;
}

console.log(max([1,3,2,4,6,5]));