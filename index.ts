
//variable
let humanName:string = "Nishan";
let age:number = 30;

//objects
const Person = {
    name: "Nishan",
    age: 30,
    hobies: ['sports', 'cooking']
}

//1 type looping to see all data of hobies
Person.hobies.forEach((x)=> {
    console.log(x.toUpperCase());
})

//Alternate of above
for (const x of Person.hobies){
    console.log(x.toUpperCase());
}



//tupple
let role: [number, string] = [2, "hello"];
console.log(role[0]);

//array
let hobby1: string[] = ["walking", "sports"];
console.log(hobby1[0]);

let hobby2: any[] = ["sports", "wrting", 100];
console.log(hobby2[2]);

//enumeration
enum Color{
    RED="red",     //in java it is RED("red")
    BLUE = "blue",
}

console.log(Color.RED);


//union type and type of function
function combine (input1: number|string, input2: number|string){
    let result: number|string;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1+input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineName = combine("Ariful ", "Nishan");
const combineNumber = combine (7,8);

console.log(combineName + " & " + combineNumber);


//mixup type
type user = {name:string, age: number}
const u1: user = {name: "nishan",age: 8}