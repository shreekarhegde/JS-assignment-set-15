function anagramCheck(a,b){
    a = a.split('');
       a.forEach(ele => {
           console.log(ele);
           console.log(b);
       if(b.includes(ele)){
       x = true;
       }else{
       x =false;
       }
       })
       return x;
   }

   console.log(anagramCheck('listen','ix'));