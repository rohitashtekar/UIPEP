let firstName = document.querySelector('.fname-input');
let firstNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let lastName = document.querySelector('.lname-input');
let lastNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let age = document.querySelector('.age-input');
let ageReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-]\+[0-9]{1,3}$/;

let emailId = document.querySelector('.email-input');
let emailReg = /^[\w]+@[a-zA-z]+[^\!\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]\.(com|in|co\.in|co|org|edu)$/i;

let countryCode = document.querySelector('.cc-input');
let codeReg = /^\+[0-9]{1,3}$/;

let phoneNumber = document.querySelector('.phone-input');
let phoneReg = /^[^\s\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][0-9]{10,11}$/;

let username = document.querySelector('.username-input');
let usernameReg = /^[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>][\w]{6,}$/;

let passOne = document.querySelector('.passone-input');
let passOneReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>]+[a-zA-Z0-9]{8,}/;

let passTwo = document.querySelector('.passtwo-input');
let passTwoReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>][a-zA-Z0-9]{8,}/;

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
    }
    else{
        Invalid(firstName);
    }
}

lastName.addEventListener('blur', validateLastName);
function validateLastName(){
    if(lastNameReg.test(lastName.value)){
        Valid(lastName);
    }
    else{
        Invalid(lastName);
    }
}


age.addEventListener('blur', validateAge);
function validateAge(){
    if(ageReg.test(age.value)){
        Valid(age);
    }
    else{
        Invalid(age);
    }
}

emailId.addEventListener('blur', validateEmailId);
function validateEmailId(){
    if(emailReg.test(emailId.value)){
        Valid(emailId);
    }
    else{
        Invalid(emailId);
    }
}

countryCode.addEventListener('blur', validateCountryCode);
function validateCountryCode(){
    if(codeReg.test(countryCode.value)){
        Valid(countryCode);
    }
    else{
        Invalid(countryCode);
    }
}

phoneNumber.addEventListener('blur', validatePhoneNumber);
function validatePhoneNumber(){
    if(phoneReg.test(phoneNumber.value)){
        Valid(phoneNumber);
    }
    else{
        Invalid(phoneNumber);
    }
}

username.addEventListener('blur', validateUsername);
function validateUsername(){
    if(usernameReg.test(username.value)){
        Valid(username);
    }
    else{
        Invalid(username);
    }
}

passOne.addEventListener('blur', validatePassOne);
function validatePassOne(){
    if(passOneReg.test(passOne.value)){
        Valid(passOne);
    }
    else{
        Invalid(passOne);
    }
}

passTwo.addEventListener('blur', validatePassTwo);
function validatePassTwo(){
    if(passTwoReg.test(passTwo.value)){
        Valid(passTwo);
    }
    else{
        Invalid(passTwo);
    }
}
