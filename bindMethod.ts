interface Dog{
    name:string;
    bark():void;
}

function makeDogBark(this:Dog){
    console.log (`${this.name} says: Woof Woof!`)
}

const fido:Dog ={
    name: "FIDO",
    bark: makeDogBark,
};

const snoopy:Dog = {
    name: "SNOOPY",
    };

const snoopyBark = fido.bark.bind(snoopy);

fido.bark();
snoopy.bark();