// function add(num1: number,num2: number) {
//     return num1 + num2;
// }
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
var greet;
greet = function () {
    console.log("Hello, People");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    var result;
    result = a + b;
    console.log("Add:", result);
    console.log("3rd Para:", c);
};
add(5, 6);
var minus = function (a, b) {
    return a - b;
};
var result1 = minus(10, 6);
console.log("Minus:", result1);
function details(user) {
    console.log(user.name + " with UID " + user.uid + ", says Hello!");
}
var user1 = {
    name: "Rohit",
    uid: 1264
};
details(user1);
var calc;
calc = function (numOne, numTwo, action) {
    return action === 'add' ? numOne + numTwo : numOne - numTwo;
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old!");
};
logDetails({ name: "Rohit", age: 23 });
