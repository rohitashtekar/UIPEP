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

let greet : Function;

greet = () => {
   console.log("Hello, People");
}

greet();
