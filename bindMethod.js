function makeDogBark() {
    console.log("".concat(this.name, " says: Woof Woof!"));
}
function singing() {
    console.log("Welcome");
}
var fido = {
    name: "FIDO",
    bark: makeDogBark
};
var snoopy = {
    name: "SNOOPY"
};
var snoopyBark = fido.bark.bind(snoopy);
fido.bark();
snoopy.bark();
