 function unShift(array,value) { 
    for (var i = array.length - 1; i >=0; i--) {
       array[i +1] = array[i];
    }
    array[0] = value;
    return array;
   };
    console.log(unShift([1,2,3,4,5],4));