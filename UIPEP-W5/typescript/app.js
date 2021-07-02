// function add(num1: number,num2: number) {
//     return num1 + num2;
// }
// let res = add(10, 12);
// console.log(res);
// const obj: {
//     name: string;
//     age: number;
// } = {
var obj = {
    name: "Rohit",
    age: 23,
    hobbies: ["Sports", "Cooking", "Football"]
};
var favActivities;
favActivities = ["Cycling", "Working out"];
console.log(obj.hobbies);
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
favActivities.push("Reading");
console.log(favActivities);
