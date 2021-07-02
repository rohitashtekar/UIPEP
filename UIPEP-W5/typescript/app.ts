// function add(num1: number,num2: number) {
//     return num1 + num2;
// }

// let res = add(10, 12);
// console.log(res);

// const obj: {
//     name: string;
//     age: number;
// } = {
const obj = {
    name: "Rohit",
    age: 23,
    hobbies: [`Sports`,`Cooking`,`Football`]
};

let favActivities: string[];
favActivities = ["Cycling","Working out"];

console.log(obj.hobbies);

for(let hobby of obj.hobbies){
    console.log(hobby.toUpperCase());
}
obj.hobbies.push(`Reading`);
console.log(obj);