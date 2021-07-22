// function add(num1: number,num2: number) {
//     return num1 + num2;
// }
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
// let res = add(10, 12);
// console.log(res);
// enum Role{ admin = 1, read_only = 2, author = 200}
// const obj: {
//     name: string;
//     age: number;
// } = {
// const obj = {
//     name: "Rohit",
//     age: 23,
//     hobbies: [`Sports`,`Cooking`,`Football`],
//     role: Role.read_only
// };
// let favActivities: string[];
// favActivities = ["Cycling","Working out"];
// console.log(obj.hobbies);
// for(let hobby of obj.hobbies){
//     console.log(hobby.toUpperCase());
// }
// favActivities.push(`Reading`);
// console.log(favActivities);
// if (obj.role === 1){
//     console.log(`Your role is admin`);
// }
// else if (obj.role === 2){
//     console.log(`Your role is read_only`);
// }
// else if (obj.role === 200){
//     console.log(`Your role is author`);
// }
// else {
//     console.log(`You are not authorized!`);
// }
// function combine(s1: string, n1: number) {
//     let result = s1 + n1;
//     console.log(result);
// }
// combine('rohit',23);
var Employee = /** @class */ (function () {
    function Employee(empNo, name, salary) {
        this.empNo = empNo;
        this.name = name;
        this.salary = salary;
        this.bonus = this.salary * 0.1;
    }
    Employee.prototype.getDetails = function () {
        return "Employee number is " + this.empNo + " and name is " + this.name;
    };
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Bonus", {
        get: function () {
            return this.bonus;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empNo, name, salary, noOfReportees) {
        var _this = _super.call(this, empNo, name, salary) || this;
        _this.noOfReportees = noOfReportees;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        var details = _super.prototype.getDetails.call(this);
        return details + " and has " + this.noOfReportees + " reportees.";
    };
    return Manager;
}(Employee));
var ro = new Employee("A12RTZ", "Rohit", 1000);
ro.getDetails();
