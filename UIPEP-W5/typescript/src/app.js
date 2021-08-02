"use strict";
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
// let greet : Function;
// greet = () => {
//    console.log("Hello, People");
// }
// const add = (a:number, b:number, c:number|string = 10) => {
//    let result: number;
//    result = a + b;
//    console.log(`Add:`,result);
//    console.log(`3rd Para:`,c);
// }
// add(5,6);
// const minus = (a: number, b: number) => {
//    return a - b;
// }
// let result1 = minus(10,6);
// console.log(`Minus:`,result1);
// type strOrNum = string | number;
// function details(user: {name: string, uid: strOrNum}){
//    console.log(`${user.name} with UID ${user.uid}, says Hello!`);
// }
// let user1 = {
//    name: "Rohit",
//    uid: 1264
// }
// details(user1)
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//     return action === 'add' ? numOne + numTwo : numOne - numTwo;
// }
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//    console.log(`${ninja.name} is ${ninja.age} years old!`);
// };
// logDetails({name: "Rohit", age: 23});
// let anchor = document.querySelector('a')!;
// console.log(anchor.href);
var invoice_js_1 = require("./classes/invoice.js");
var invOne = new invoice_js_1.Invoice('Rohit', 'Whey Protein', 1100);
var invTwo = new invoice_js_1.Invoice('Vineet', 'Funafa', 800);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 500;
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invOne, invTwo);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
