//call back function cb
//cb:(numb:number)=> number means cb is a variable can be pointed to a function which have one 
//number variable and return number result

function addHandler(n1:number, n2:number, cb:(numb:number)=>number){
   const sum = n1 + n2;
   return cb(sum);
}

let data = addHandler(10,20,(x)=>{
    return x;
})

console.log(data);