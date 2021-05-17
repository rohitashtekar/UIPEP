// console.log('Hello World, In Javascript');
// console.log(55);
// console.log(5==4);
// console.log('Who are cute and adorable');

// var dogs = "Cats are adorable";
// console.log(dogs);
// dogs = dogs.replace('Cats','Dogs');
// console.log(dogs);

// function makeMoreExciting(string){
//     return string +'!!!!!'
// }

// console.log(makeMoreExciting(dogs))

// var sentence = ('Hello, Javascript ' + 'Welcome');
// console.log(sentence);

// //  Wrong --
// //  function yellIt(string){
// //     string = string.toUpperCase()
// //     string = makeMoreExciting(string)
// //     console.log(string)
// // }

//Generic function------

// function yellIt(string){
//     string = string.toUpperCase()
//     return makeMoreExciting(string)
// }

// console.log(yellIt(sentence))

// var myCatBuddies = ["bella", "tabby", "cello"]
// console.log(myCatBuddies)

// console.log(myCatBuddies[0])

// add an element to the array with push

// myCatBuddies.push("taffy")
// console.log(myCatBuddies)

// .length method

// console.log(myCatBuddies.length)

//Object called person-----

// var person = {
//     name: "Rohit",
//     age: 23,
//     city: "Bgm",
//     wantBurger: true,
//     address: {
//         area: "Tilakwadi",
//         pin: 590006 
//     },
//     locale: "Shanti Nagar"
// };

// console.log(person);
// console.log(person.age);
// console.log(person.name);
// console.log(person.address);
// console.log(person.address.pin);

//Functions within Objects------

// var dog = {
//     owner: "Rohit",
//     speak() {
//         console.log("Woof Woof");
//     },
//     name: "Lucy"
// }

// console.log(dog.name);
// console.log(dog.speak());

// Object within an object

// var me = {
//     name: {
//         firstName: "Rohit",
//         initial: "A",
//         lastName: "Ashtekar"
//     },
//     address: {
//         area: "Tilakwadi",
//         locale: "Shanti Nagar",
//         pin: 590006
//     }
// };

// console.log(me.name);
// console.log(me.name.initial);
// console.log(me.address.pin);
// console.log(me)

//Objects inside an array-----

// var arr = [{date: "13-05-2021", mission: "Accomplished"},{location: "Dubai", target: "Eliminated"}];

//Arrays inside an Object--------

// var geo = {
//     locations: ["India", "Sri-Lanka", "Nepal", "Bhutan", "Tibet"], 
//     continents: ["Asia", "Africa", "North-America", "South-America", "Antartica", "Australia", "Europe"]
// }

// console.log(arr);
// console.log(geo);

//Functions-------

// var something = 1;
// function add(someNumber){
//     someNumber = something + someNumber;
//     return someNumber;
// }
// console.log(add(5));

// var homeCity = 'Belgaum';
// var myArea = 'Tilakwadi';
// var myState = 'Karnatka';

// function logOutDetails(city,area,state){
//     console.log(`You are from ${city}, ${area}, ${state}`)
// }
// logOutDetails(homeCity, myArea, myState);
// logOutDetails("Bgm","Shahpur","Kerela");

//Values, Numbers and Operators---------

// add = 5 + 4;
// sub = 100-54;
// mul = 6 * 24;
// div = 100 / 5;
// mod = 62 % 10;

// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);

// console.log("Hello");
// console.log('Hello again');
// console.log(`Helloo againn`);

// console.log("A newline character is written like \"\\n\" ");
// console.log("Hello," + " World!" + " Whats\'s up\?");

// console.log(typeof "Hello");
// console.log(typeof 506);
// console.log(typeof '*');
// console.log(typeof "506");

// console.log(5 === 4);
// console.log(4 != 5);
// console.log(4 > 4);
// console.log(4 <= 4);
// console.log(4 === 4.0);

// console.log("-----")

// console.log("Z" > "a");
// console.log("Rohit" < "Vineet");

// console.log(NaN == NaN);

// console.log(false || true);

// console.log(!(false || true));

// console.log(5 < 2 ? "Correct" : "Wrong");

// console.log(0 * null);
// console.log("25" - "10");
// console.log(typeof("25" - "10"));
// console.log("15" + 1);
// console.log(typeof("15" + 1));
// console.log("25" * 2);
// console.log(false === 0);

// console.log(null == undefined);

// let sum = 50 + 49;
// console.log(sum);

// let ten = 10;
// console.log(ten * ten);

// let one = 1, two = `2`;
// console.log(one + two);

// one = 10, two = '2';
// console.log(one + two);
// console.log(typeof(one + two));

// console.log(Math.max(2, 4,234,12,7,1));

// console.log(Math.min(2, 4, 12, 1) + 100);


// let number = 0;
// number = Number(prompt("Hey buddy, Enter a number."));
// while (number > 0 && number <= 10) {
//     console.log(number);
//     number += 1;
// }

// let age;
// do {
//   age = prompt("Whats your age?");
// } while (age > 10 && age < 23);
// console.log("Age Entered is: ",age);

//If loop and nested If
// num = prompt("Enter a number between 0 and 100!");
// if(num > 0 && num <= 20){
//     console.log("You are Lucky");
// }
// else if(num > 20 && num <= 50){
//     console.log("You are a little lucky");
// }
// else if(num > 50 && num < 80){
//     console.log("You are not lucky enough today, haha Im joking");
// }
// else if(num > 80 && num < 100){
//     console.log("You are unlucky today, Just kidding bro")
// }
// else{
//     console.log('Number is out of range!');
// }

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("The square root of " + theNumber + " is: " +
//               theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

//For loop
// for(let i=5; i<=10; i++){
//     console.log(i);
// }

// for(let i=5; i<=10; i++){
//     console.log(i);
//     if(i === 8){
//         break;
//     }
// }

//Switch
// console.log("Menu:\n 1.Tacos \n 2.Ramen \n 3.Pani Puri \n 4.Pizza")
// switch (prompt("What is your favorite food")) {
//     case "tacos":
//       console.log("Mexico has the best Tacos");
//       break;
//     case "ramen":
//       console.log("Japan has the best Ramen");
//       break;
//     case "pani puri":
//       console.log("India has the best Pani Puri");
//       break;
//     case "pizza":
//       console.log("Italy has the best Pizza");
//       break;
//     default:
//       console.log("Not an eatable form the menu!");
//       break;
// }

//Functions

// const makeNoise = function() {
//     console.log("Meow!");
// }

// makeNoise()

// firstName = "Saurav";
// lastName = "Ganguly";
// honorific = "Dada";
// greeting = "Hats off";

// function greet( firstName, lastName, honorific, greeting){
//     return `${greeting} ${honorific} ${lastName}! Thank you for joining us, ${firstName}! 
//     I hope you have a wonderful day, ${honorific} ${lastName}.`;
// }


// console.log(greet(firstName,lastName,honorific,greeting));

// console.log(greet("Rahul","Dravid","Mr.","Hello"));

// function addFive(number){
//     let sum = number + 5;
//     return sum;
// }

// console.log(addFive(15));

// let finalAnswer = addFive;
// console.log(finalAnswer(5))

//Exercise
// const character = 'a';
// const timesToRepeat = 50;
// let answer = '';

// for(let i = 0; i < timesToRepeat; i++){
//     answer += character;
// }
// console.log(answer);

// let person = {
//     name: 'Akash',
//     age: '25',
//     location: 'India'
// };

// function logOutDetails(object){
//     console.log(object.name);    
//     console.log(object.age);    
//     console.log(object.location);    
// }

// logOutDetails(person);

// const hummus = function(factor) {
//     function ingredient(amount, unit, name) {
//       let ingredientAmount = amount * factor;
//       if (ingredientAmount > 1) {
//         unit += "s";
//       }
//       console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1, "can", "chickpeas");
//     ingredient(0.25, "cup", "tahini");
//     ingredient(0.25, "cup", "lemon juice");
//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5, "teaspoon", "cumin");
// };

// console.log(hummus(5));

// function greet(who) {
//     console.log("Hello " + who);
//   }
//   greet("Potter");
//   console.log("Welcome to Hogwarts!");

// function power(base, exponent = 3) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//       result *= base;
//     }
//     return result;
// }

// console.log(power(3));

// function wrapValue(n) {
//     let local = n;
//     return() => local;
// }
  
// let wrap1 = wrapValue(5);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function addTo(passed){
//     function add(inner){
//         return passed + inner;
//     }
//     return add;
// }

//closure
// let addThree = new addTo(15);
// let addFour = new addTo(14);

// console.log(addThree(3));
// console.log(addFour(6));
// console.dir(addThree);
// console.dir(addFour);

// var passed = 3;
// var addTo = function(){
//     var inner = 2;
//     return passed + inner;
// }
// console.dir(addTo);

// function fact(num) {
// if (num === 0 || num === 1) {
//     return 1;
// } else {
//     return num * fact(num - 1);
// }
// }

// console.log(fact(0));

// const number = parseInt(prompt('Enter the number of terms:'));

// let num1 = 0, num2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(num1);
//     nextTerm = num1 + num2;
//     num1 = num2;
//     num2 = nextTerm;
// }

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//         return history;
//         } else if (current > target) {
//         return null;
//         } else {
//         return find(current + 5, `(${history} + 5)`) ||
//                 find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(18));

// function counts(cows, chickens){
//     let cowString = String(cows);
//     while(cowString.length < 3){
//         cowString = "0" + cowString;
//     }
//     console.log(cowString + " cows");

//     let chickenString = String(chickens);
//     while(chickenString.length < 3){
//         chickenString = "0" + chickenString;
//     }
//     console.log(chickenString + " chickens");
// }
    
// console.log(counts(14, 91));

// function counts(number, label){
//     let numString = String(number);
//     while(numString.length < 3){
//         numString = "0" + numString;
//     }
//     console.log(numString + " " + label);
// }

// function printInventory(cows,chickens,pigs){
//     counts(cows, "cows");
//     counts(chickens, "chickens");
//     counts(pigs, "pigs");
// }

// console.log(printInventory(23,76,52));

// let myNumbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(myNumbers.join(" | "));
// myNumbers.push(11);
// console.log(myNumbers);
// myNumbers[0] = 0;
// console.log(myNumbers);
// myNumbers.shift();
// console.log(myNumbers);

// myNumbers.unshift(1);
// console.log(myNumbers);

// let myCities = ["Thane","borivali","jogeshwari","AndherI","BANdra"];
// for(let i = 0; i < myCities.length; i++){
//     console.log(myCities[i].toUpperCase());
// }

// myCities.forEach(function(city){
//     console.log(city.toUpperCase());
// });

// 15th may--------------------------- 

// let person = {
//     adult : false,
//     skills: ['c','c++','Python','HTML','CSS']
// };
// person.skills[2] = "JavaScript";

// console.log(person.adult);
// console.log(person.skills);
// console.log(person.skills[3]);
// delete person.skills[2];
// console.log(person.skills);

// console.log(person.skills);
// console.log("adult" in person);

// console.log(Object.keys({x : 1, y : 2, z : 3}));

// Object.assign(person, {adult:true});
// console.log(person);
// console.log(typeof(person));

// Computing correlation---------
// function phi(table){
//     return (table[3] * table[0] - table[2] * table[1]) / 
//             Math.sqrt((table[3] + table[2]) *
//                       (table[0] + table[1]) *
//                       (table[1] + table[3]) * 
//                       (table[0] + table[2]));
// }

// console.log(phi([76, 9, 4, 1]));

// let journal1 = [];

// function addEntry(events,squirrel){
//     journal1.push({events,squirrel});
// }

// addEntry(["work", "touched tree", "pizza", "running",
//           "television"], false);
// addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);



// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0];
//     for (let i = 0; i < journal.length; i++) {
//       let entry = journal[i], index = 0;
//       if (entry.events.includes(event)) index += 1;
//       if (entry.squirrel) index += 2;
//       table[index] += 1;
//     }
//     return table;
// }
  

// console.log(tableFor("pizza",JOURNAL))

// let line = "Hello, \nI am an Intern";
// console.log(line.slice(0,5));
// console.log(line.lastIndexOf("n"));
// console.log(line.trim()); doesnt work

// let line = "ro";
// console.log(line.padStart(6,0))

// let line = "Hello I am an Intern";
// line = line.split(" ");
// console.log(line)
// console.log(line.join("."))

// let sentence = "hello"
// console.log("hell ".repeat(3));
// console.log(Math.min(121,323,456,123,114,55));
// console.log(Math.max(121,323,456,123,114,55));
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.round(3.141592653589793));

// let {name} = {name: "Ro", age: 23};
// console.log(name);

//JSON
// let words = {
//     squirrel : false,
//     events : ["hello","world","whats","up"]
// };

// words = JSON.stringify(words)

// console.log(words);

// console.log(JSON.parse(words))

// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.
// function range(start,end){
//     let num = [];
//       for(let i = start; i <= end; i++){
//             num.push(i);
//       }
//     return num;
// }

// function sum(numbers){
// 	let result = 0;
//   	for(let i = numbers[0]; i <= numbers.length; i++){
//     	result += i;
//     }
// 	return result;
// }

// function range(start, end, step) {
//     let num = [];
//     if(step === undefined) step = 1;
//     if(step >= 0){
//         for(let i=start; i<=end; i+=step) {
//             num.unshift(i);
//             return num;
//         }
//         return num;
//     }
//     else{
//         for(let i=end; i>=start; i+=step) {
//             num.unshift(i);
//             return num;
//         }
//         return num;
//     }

//   }
//   console.log(range(5, 2,-1));

// function reverseArray(string){
// 	let result = [];
//   	for(let i = string.length-1;i !== -1; i--){
//     	result.push(string[i]);
//     }
//   	return result;
// }
// function reverseArrayInPlace(string){
//      let start = 0;
//       let end = (string.length)-1;
//       let temp;
//   if(string.length % 2 === 0){
//       while(start < end){
//       temp = string[start];
//       string[start] = string[end];
//       string[end] = temp;

//       start ++;
//       end--;
//     }
// }	
//   else{
//     while(start !== end){
//       temp = string[start];
//       string[start] = string[end];
//       string[end] = temp;

//       start ++;
//       end--;
//     }
// }
// }

// let arrayValue = [1, 2, 3, 4, 5,6,7];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// →[5, 4, 3, 2, 1]
 
// function arrayToList(arr){
// 	let list = null;	
//   	for(i = arr.length-1; i >= 0; i--){
//     	list = {value : arr[i], rest : list}
//     }
//   	return list;
// }

// function listToArray(list){	
//   	let arr = [];
//   	for(let node = list; node; node = node.rest){
//     	arr.push(node.value);
//     }
//   	return arr;
// }
// function prepend(val,res){
// 	return {value : val, rest : res}
// }
// function nth(list,n){
// 	if(n === 0){
//     	return list.value;
//     }
//   	else{
//     	return nth(list.rest, n - 1);
      
//     }
// }

// console.log(arrayToList([10, 20]));

// console.log(listToArray(arrayToList([10, 20, 30])));

// console.log(prepend(10, prepend(20, null)));

// console.log(nth(arrayToList([10, 20, 30]), 0));

// function repeat( n, action){
//     for(let i = 0; i < n; i++){
//         action(i);
//     }
// }
// repeat(5, console.log);

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

//Higher order Functions-------
// function greaterThan(n){
//     return m => m > n;
// }

// let greaterThan50 = greaterThan(50);
// console.log(greaterThan50(55));

// forEach-------
// let arr = [1,2,3,4,5,2354,546,2,123,45,67,2,78,2345,4578,8,9,67,3,23,21,124,5,3,11,44,5];
// arr.forEach(function(array){
//     console.log(array);
// });

//companies Data---------
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//filter-------
// const newArr = arr.filter(num => num > 2);
// console.log(newArr);

// let newArr = arr.filter(function(numbers){
//     if(numbers > 5 ){
//         return true;
//     }
// });

// let newArr = arr.filter(numbers => numbers > 100);
// console.log(newArr);

// map------
// let arrays = [[1, 2, 3], [4, 5], [6]];
// let newArr = arrays.map(function (array){
//         return `${array}`;
// });
// console.log(newArr);

// let newArr = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(newArr);

// let newArr = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(newArr);

// reduce-------
// let newArray = arrays.reduce((array1,array2) => array1.concat(array2));
// console.log(newArray);

// function loop(value, test, update, body){
//     for(let i = value; test(i); i = update(i)){
//         body(i);
//     }
// }
// loop(7, n => n > 0, n => n - 1, console.log);

// let age = companies.reduce(function(start,end){
//     let age = end - start;
//     return age; 
// });
// console.log(ages);

// let ageSum = ages.reduce(function(age,sum){
//     return sum + age;
// });
// console.log(ageSum);

// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)  
//     .reduce((a,b) => a + b, 0);

// console.log(combined);

// The secret life of objects-------
// function speak(line){
//     console.log(`The ${this.type} Rabbit says "${line}"`);
// };

// let whiteRabbit = {type : "white", speak};
// let hungryRabbit = {type : "hungry", speak};

// whiteRabbit.speak("What is this on my fur" + ", I think there is a bug on me");
// hungryRabbit.speak("I need food ASAP");

// speak.call(whiteRabbit, "Please dont bite me");
// speak.call(hungryRabbit, "uhmmm, tastes good");

// prototype------
// let protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} Rabbit says ${line}`);
//     }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak = "I am stealthy and quick!";

// console.log(killerRabbit);

// function Rabbit(breed){
//     this.type = breed;
// }
// Rabbit.prototype.speak = function(line){
//     console.log(`The ${this.type} Rabbit says ${line + " hehe"}`);
// }

// let weirdRabbit = new Rabbit("weird");

// class Declaration-----

class Rabbit{
    constructor(breed){
        this.type = breed;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let tinyRabbit = new Rabbit("tiny");

console.log(killerRabbit.speak("wtf"));
console.log(tinyRabbit.speak("I am tiny"));

// let object = new class { getWord(){ return "Hello";}};
// console.log(object.getWord());



