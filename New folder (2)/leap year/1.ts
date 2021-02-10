let foo = (value:number)=>{
    if(value%400===0){
     console.log(true);
    }else if(value%100===0){
        console.log(false);
       }else if(value%4===0){
        console.log("true");
       }else{
           console.log(false);
       }
}
foo(4);
console.log("every where");