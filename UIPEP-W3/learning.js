/*
console.log('Hello World, In Javascript');
console.log(55);
console.log(5==4);
console.log('Who are cute and adorable');

var dogs = "Cats are adorable";
console.log(dogs);
dogs = dogs.replace('Cats','Dogs');
console.log(dogs);

function makeMoreExciting(string){
    return string +'!!!!!'
}

console.log(makeMoreExciting(dogs))

var sentence = ('Hello, Javascript ' + 'Welcome');
console.log(sentence);

//  Wrong --
//  function yellIt(string){
//     string = string.toUpperCase()
//     string = makeMoreExciting(string)
//     console.log(string)
// }

//Generic function

function yellIt(string){
    string = string.toUpperCase()
    return makeMoreExciting(string)
}

console.log(yellIt(sentence))

var myCatBuddies = ["bella", "tabby", "cello"]
console.log(myCatBuddies)

console.log(myCatBuddies[0])

add an element to the array with push

myCatBuddies.push("taffy")
console.log(myCatBuddies)

.length method

console.log(myCatBuddies.length)

//Object called person

var person = {
    name: "Rohit",
    age: 23,
    city: "Bgm",
    wantBurger: true,
    address: {
        area: "Tilakwadi",
        pin: 590006 
    },
    locale: "Shanti Nagar"
};

console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person.address);
console.log(person.address.pin);

//Functions within Objects

var dog = {
    owner: "Rohit",
    speak() {
        console.log("Woof Woof");
    },
    name: "Lucy"
}

console.log(dog.name);
console.log(dog.speak());

Object within an object

var me = {
    name: {
        firstName: "Rohit",
        initial: "A",
        lastName: "Ashtekar"
    },
    address: {
        area: "Tilakwadi",
        locale: "Shanti Nagar",
        pin: 590006
    }
};

console.log(me.name);
console.log(me.name.initial);
console.log(me.address.pin);
console.log(me)

//Objects inside an array

var arr = [{date: "13-05-2021", mission: "Accomplished"},{location: "Dubai", target: "Eliminated"}];

//Arrays inside an Object

var geo = {
    locations: ["India", "Sri-Lanka", "Nepal", "Bhutan", "Tibet"], 
    continents: ["Asia", "Africa", "North-America", "South-America", "Antartica", "Australia", "Europe"]
}

console.log(arr);
console.log(geo);

//Functions

var something = 1;
function add(someNumber){
    someNumber = something + someNumber;
    return someNumber;
}
console.log(add(5));

var homeCity = 'Belgaum';
var myArea = 'Tilakwadi';
var myState = 'Karnatka';

function logOutDetails(city,area,state){
    console.log(`You are from ${city}, ${area}, ${state}`)
}
logOutDetails(homeCity, myArea, myState);
logOutDetails("Bgm","Shahpur","Kerela");

//Values, Numbers and Operators

add = 5 + 4;
sub = 100-54;
mul = 6 * 24;
div = 100 / 5;
mod = 62 % 10;

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

console.log("Hello");
console.log('Hello again');
console.log(`Helloo againn`);

console.log("A newline character is written like \"\\n\" ");
console.log("Hello," + " World!" + " Whats\'s up\?");

console.log(typeof "Hello");
console.log(typeof 506);
console.log(typeof '*');
console.log(typeof "506");

console.log(5 === 4);
console.log(4 != 5);
console.log(4 > 4);
console.log(4 <= 4);
console.log(4 === 4.0);

console.log("-----")

console.log("Z" > "a");
console.log("Rohit" < "Vineet");

console.log(NaN == NaN);

console.log(false || true);

console.log(!(false || true));

console.log(5 < 2 ? "Correct" : "Wrong");

console.log(0 * null);
console.log("25" - "10");
console.log(typeof("25" - "10"));
console.log("15" + 1);
console.log(typeof("15" + 1));
console.log("25" * 2);
console.log(false === 0);

console.log(null == undefined);

let sum = 50 + 49;
console.log(sum);

let ten = 10;
console.log(ten * ten);

let one = 1, two = `2`;
console.log(one + two);

one = 10, two = '2';
console.log(one + two);
console.log(typeof(one + two));

console.log(Math.max(2, 4,234,12,7,1));

console.log(Math.min(2, 4, 12, 1) + 100);
*/

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
num = prompt("Enter a number between 0 and 100!");
if(num > 0 && num <= 20){
    console.log("You are Lucky");
}
else if(num > 20 && num <= 50){
    console.log("You are a little lucky");
}
else if(num > 50 && num < 80){
    console.log("You are not lucky enough today, haha Im joking");
}
else if(num > 80 && num < 100){
    console.log("You are unlucky today, Just kidding bro")
}
else{
    console.log('Number is out of range!');
}

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

firstName = "Saurav";
lastName = "Ganguly";
honorific = "Dada";
greeting = "Hats off";

function greet( firstName, lastName, honorific, greeting){
    return `${greeting} ${honorific} ${lastName}! Thank you for joining us, ${firstName}! 
    I hope you have a wonderful day, ${honorific} ${lastName}.`;
}


console.log(greet(firstName,lastName,honorific,greeting));

console.log(greet("Rahul","Dravid","Mr.","Hello"));

function addFive(number){
    let sum = number + 5;
    return sum;
}

console.log(addFive(15));

let finalAnswer = addFive;
console.log(finalAnswer(5))

//Exercise
const character = 'a';
const timesToRepeat = 50;
let answer = '';

for(let i = 0; i < timesToRepeat; i++){
    answer += character;
}

console.log(answer);