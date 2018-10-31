function stringLastIndexOf(string,char){
    let splitted = string.split('');
    let x,y,z;
	for(let i = 1; i < splitted.length; i++){
	if(splitted[i] == char ){
	 x = i;
	}else{
        y = -1;
    }
    }
    if(x>0){
         z = x;
    }else{
        z = y;
    }
    return z;
}

console.log(stringLastIndexOf('shreekar','x'));