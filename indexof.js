function stringIndexOf(a,b){
    let splitted = a.split('');
    let count = 0;  
    let y;
        for(let i = 0; i < splitted.length; i++) {    
        if(splitted[i] == b){
        count++;
        y = count;
        }else if(splitted[i] != b){
        y = -1;
        }
        } 
        return y;
    }

console.log(stringIndexOf('awesome','w'));  