//variable
var humanName = "Nishan";
var age = 30;
//objects
var Person = {
    name: "Nishan",
    age: 30,
    hobies: ['sports', 'cooking']
};
//1 type looping to see all data of hobies
Person.hobies.forEach(function (x) {
    console.log(x.toUpperCase());
});
//Alternate of above
for (var _i = 0, _a = Person.hobies; _i < _a.length; _i++) {
    var x = _a[_i];
    console.log(x.toUpperCase());
}
//tupple
var role = [2, "hello"];
console.log(role[0]);
//array
var hobby1 = ["walking", "sports"];
console.log(hobby1[0]);
var hobby2 = ["sports", "wrting", 100];
console.log(hobby2[2]);
//enumeration
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
console.log(Color.RED);
//union type and type of function
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineName = combine("Ariful ", "Nishan");
var combineNumber = combine(7, 8);
console.log(combineName + " & " + combineNumber);
