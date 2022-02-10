//constructor function to create a class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Person(name, id) {
    this.name = name;
    this.id = id;
}
var p1 = new Person('Prathmesh', 1);
console.log(p1);
//Object literal to create an object
var Persona = {
    name: 'Person 2',
    age: 20
};
console.log(Persona);
//Object.create to create an object
var person3 = Object.create({});
person3.name = 'P3';
person3.age = 40;
console.log(person3);
//Object creation using class
var person4 = /** @class */ (function () {
    function person4(name, age) {
        this.name = name;
        this.age = age;
    }
    person4.prototype.printinfo = function () {
        console.log("name:".concat(this.name));
        console.log("age:".concat(this.age));
    };
    return person4;
}());
var per = new person4("abc", 45);
console.log(per);
// per.age=12; //Age can not be modified because it is declared as private
//INHERITANCE
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(rn, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.rn = rn;
        return _this;
    }
    return student;
}(person4));
var s1 = new student(1, 'student1', 12);
s1.printinfo();
//Readonly specifier
var science = /** @class */ (function () {
    function science() {
        this.pi = 3.14;
    }
    return science;
}());
var m1 = new science;
// m1.pi=23 can not be modified
//STATIC Properties
//member variable can be called by class.member name
var k = /** @class */ (function () {
    function k() {
    }
    k.kval = 15;
    return k;
}());
console.log("value:".concat(k.kval));
