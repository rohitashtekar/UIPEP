import User, { printName as printUserName, printAge} from './exportmod.js'

let userOne = new User("rohit", 23);

console.log(userOne);

printUserName(userOne);
printAge(userOne);