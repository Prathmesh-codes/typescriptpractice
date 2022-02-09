// //Variable declaration
// //implicit delaration
var n = 100;
console.log("num=".concat(n, ",type=").concat(typeof n));
//explicit declaration
var k = 100;
console.log('k=${k},type=${typeof k}');
//data type
var s = 10.5;
console.log("s = ".concat(s, ", data type = ").concat(typeof s));
//String
var namef = 'Prathamesh';
console.log("First name = ".concat(namef, ", data type = ").concat(typeof namef));
//Multiple Lines
var desc = "abc, home,\nMahatma phule Chowk, Pune,\nMaharashtra";
console.log("Address = ".concat(desc, ", data type = ").concat(typeof desc));
//boolean
var candrive = true;
console.log("Can Drive = ".concat(candrive, ", data type = ").concat(typeof candrive));
//undefined
var myvar;
console.log("My var= ".concat(myvar, ", data type = ").concat(typeof myvar));
//Object
var a = null;
console.log("a = ".concat(a, ", data type = ").concat(typeof a));
//object: collection of key value pairs
var person = { name: 'Person 1', address: 'Pune' };
console.log("Person = ".concat(person, ", data type = ").concat(typeof person));
//Dynamic type casting
var num = 'AbraKaDabra';
console.log("num = ".concat(num, ", data type = ").concat(typeof num));
//Checking Equality
// console.log("50"==50)
// console.log('50'===50)
//function
function greet() {
    console.log("Hello from function"); //function defination
}
greet(); //function call
//Array
var numbers = [10, 20, 'a', 15];
console.log("numbers = ".concat(numbers, ", data type = ").concat(typeof numbers));
// implicit object
var ppl = {
    name: 'ppl1',
    age: 30
};
console.log(ppl);
//explicit
var ppl2 = { name: 'person2',
    address: 'mumbai' };
console.log(ppl2);
//explicit version2
var per3 = {
    name: 'person3',
    'address': 'delhi'
};
console.log(per3);
//enum
var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["GREEN"] = 1] = "GREEN";
    color[color["BLUE"] = 2] = "BLUE";
})(color || (color = {}));
var red = color.RED;
console.log("color=".concat(color, ",type=").concat(typeof color));
var myVar1 = 'test';
var myVar2 = 12;
console.log(myVar1 + myVar2);
