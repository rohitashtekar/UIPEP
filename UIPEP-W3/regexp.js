// const string = `A random string of alphabets`;

// let regex1 = /alpha/;
// console.log(regex1.test(string));

// let regex2 = /^A/;
// console.log(regex2.test(string));

// let regex3 = /alphabets$/;
// console.log(regex3.test(string));

// const stringOne = `12448799`;

// let regex5 = /[0-9]/;
// console.log(regex5.test(stringOne));

// let date = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(date.test("05-20-2021 06:30"));

// console.log(date.test("20-may-2021 07:40"));

// let binary = /^01/;
// console.log(binary.test("01101010010"));

// console.log(/\d+/.test("abc345"));

// console.log(/colou?r/.test("color"));

// let regex4 = /A random [a-z]{7,8}/;
// console.log(regex4.test(string));

// let dateAndTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateAndTime.test("5-20-2021 8:45"));

// let avengers = /avengers+ (assemble+)/i;
// console.log(avengers.test("Avengers assemble assemble"))

// let result = /\d+/.exec("three three 100");
// console.log(result);

// console.log(result.index);

// console.log("three three 100".match(/\d+/));

// let text = /'([^']*)'/;
// console.log(text.exec("he said hi 'bro'"));

// console.log(new Date());
// console.log(new Date(2013, 2, 05));

// console.log(new Date(2011, 1, 05).getTime());

// console.log(new Date(1294165800000));

// console.log(Date.now());

// let string = "rohit@gmail.com";

// let strRegex = /@gmail.com/;
// console.log(strRegex.test(string));

// let string = "rohit,deva sayed";
// let regex5 = /[\s,+]/;
// console.log(string.split(regex5));

// let string = " ";
// let regex = /\s/;
// console.log(regex.test(string));

// let testStr = "Repeat, Repeat, Repeat";
// let regex = /repeat/i;
// console.log(regex.test(testStr));
// console.log(testStr.match(regex));

// let timStr = "I need some timber wood";
// let timStrOne = "I am a runner on tiger street";

// let regex = /ti./;

// let regex = /.er+/;
// console.log(timStr.match(regex));
// console.log(timStrOne.match(regex));

// let string = "Beware of buuugs in your code, as well as biig bugs in the house, check your bag";
// let regex = /b[aiu]+g/g;

// let regex = /b[aiu]+g/g;

// console.log(string.match(regex));

// let string = "The quick brown fox jumps over the lazy dog";

// let regex = /[a-zA-Z]/g;

// console.log(string.match(regex));

// let numStr = "Hello my number is 129495812";
// let regex = /[0-9e-hm-o]/gi;
// console.log(numStr.match(regex));

// let numStr = "Hello my number is 129495812";
// let regex = /[^aeiou 12]/gi;
// console.log(numStr.match(regex));

// let regex = /\+[0-9]{1,3}\s[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
// console.log(regex.test("+91 7795476167"));

// let regex = /\+\d{2,3}\s\d{10,10}$/;
// function check(question){    
//     console.log(regex.test(prompt(question)));  
// };

// check("Enter Phone number: ");

// let regex = /.+/;
// console.log(regex.test("enter anything any alphabet any number any number of times"));

// let regex = /male|female|other/i;
// function check(question){    
//     console.log(regex.test(prompt(question)));  
// };

// check("Enter Gender: ");

