let firstName = document.querySelector('.fname');
let firstNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let lastName = document.querySelector('.lname');
let lastNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let emailId = document.querySelector('.email');
let emailReg = /^[\w]+@[a-zA-z]+[^\!\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]\.(com|in|co\.in|co|org|edu)$/i;

let username = document.querySelector('.username');
let usernameReg = /^[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>][\w]{6,}$/;

let passOne = document.querySelector('.passone');
let passOneReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>]+[a-zA-Z0-9]{8,}/;

let passTwo = document.querySelector('.passtwo');
let passTwoReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>][a-zA-Z0-9]{8,}/;

let validFname = document.querySelector('.valid-fname');
let validLname = document.querySelector('.valid-lname');
let validEmail = document.querySelector('.valid-email');
let validUser = document.querySelector('.valid-user');
let validPass = document.querySelector('.valid-passone');

function Invalid(input){
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function Valid(input){
    input.classList.remove('invalid');
    input.classList.add('valid');
}

firstName.addEventListener('blur', validateFirstName);
function validateFirstName(){
    if(firstNameReg.test(firstName.value)){
        Valid(firstName);
        validFname.innerText = `Valid input`;
        validFname.style = 'color: limegreen';
    }
    else{
        Invalid(firstName);
        validFname.innerText = `Invalid input`;
        validFname.style = 'color: red';
    }
}

lastName.addEventListener('blur', validateLastName);
function validateLastName(){
    if(lastNameReg.test(lastName.value)){
        Valid(lastName);
        validLname.innerText = `Valid input`;
        validLname.style = 'color: limegreen';
    }
    else{
        Invalid(lastName);
        validLname.innerText = `Invalid input`;
        validLname.style = 'color: red';
    }
}

emailId.addEventListener('blur', validateEmailId);
function validateEmailId(){
    if(emailReg.test(emailId.value)){
        Valid(emailId);
        validEmail.innerText = `Valid input`;
        validEmail.style = 'color: limegreen';
    }
    else{
        Invalid(emailId);
        validEmail.innerText = `Invalid input`; //rohit_ashtekar
        validEmail.style = 'color: red';
    }
}

username.addEventListener('blur', validateUsername);
function validateUsername(){
    if(usernameReg.test(username.value)){
        Valid(username);
        validUser.innerText = `Valid input`;
        validUser.style = 'color: limegreen';
    }
    else{
        Invalid(username);
        validUser.innerText = `Invalid input`;
        validUser.style = 'color: red';
    }
}

passOne.addEventListener('blur', validatePassOne);
function validatePassOne(){
    if(passOneReg.test(passOne.value)){
        Valid(passOne);
        validPass.innerText = `Valid input`;
        validPass.style = 'color: limegreen';
    }
    else{
        Invalid(passOne);
        validPass.innerText = `Invalid input`;
        validPass.style = 'color: red';
    }
}

// passTwo.addEventListener('blur', validatePassTwo);
// function validatePassTwo(){
//     if(passTwoReg.test(passTwo.value)){
//         Valid(passTwo);
//     }
//     else{
//         Invalid(passTwo);
//     }
// }
