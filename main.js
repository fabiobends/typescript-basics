"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var phrase = "Hello";
console.log(phrase);
var x = 10;
var y = 20;
var sum;
var title = 'Duh';
var isBeginner = true;
var total = 0;
var name = "Fábio";
var sentence = "My name is " + name + ", just a beginner";
console.log(sentence);
var a = null;
var b = undefined;
var weirdBool = null;
var weirdString = undefined;
var weirdNumber = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var various = ['Fábio', 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c = Color.Red; // result = 0
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'hey';
var myVariable = 0;
var hasName = function (obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
};
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase(); //error only when executing
// these can be accepted with 'any'!
// myVariable();
// myVariable.name = 'huu';
// myVariable.toUpperCase();
// ok
var k;
k = 10;
k = 'k';
//  not ok
var l = 10; // it's a number in the initialization
// l = '10';
var multiType;
multiType = 10;
multiType = false;
// ?: assignment (optional)
// const add = (num1: number, num2?: number) => {
//   if (num2) {
//     return num1 + num2;
//   }
//   return num1 + num2;
// }
var add = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1 + num2;
};
add(5, 10); // the first case
add(5); // the second case
function fullName(person) {
    return console.log(person.name + " " + person.lastname);
}
var p = {
    name: "Bruce",
    lastname: "Wayne"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello sr. " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Daniel");
// console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Delegating works");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Lucas");
// console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
