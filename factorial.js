function factorial(num) {
    let x = num;  
    let y = x -1;
    for(let i = 0; i < num-1; i++){
        z = x * y;
        //console.log(z,x,y);
        x = z;
     console.log(x);
        y--;
    }   
    return x; 
}
console.log(factorial(5));