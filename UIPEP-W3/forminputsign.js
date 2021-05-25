let firstName = document.querySelector('.fname-input');
let lastName = document.querySelector('.lname-input');
let age = document.querySelector('.age-input');
let emailId = document.querySelector('.email-input');
let countryCode = document.querySelector('.cc-input');
let phoneNumber = document.querySelector('.phone-input');
let username = document.querySelector('.username-input');
let passOne = document.querySelector('.passone-input');
let passTwo = document.querySelector('.passtwo-input');

let firstNameReg = /^[a-zA-Z]+[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-]$/;
let lastNameReg = /^[a-zA-Z]+[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-]$/;
let ageReg = /^\+[0-9]{1,3}[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-]$/;
let emailReg = /^[\w]+@[a-zA-z]+\.(com|in|co\.in)$/i;
let codeReg = /^\+[0-9]{1,3}$/;
let phoneReg = /^[0-9]{10,11}[^\s\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-]*$/;
let usernameReg = /^[\w]+[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]*$/;
let passOneReg = /^[a-zA-Z0-9]{8,}/;
let passTwoReg = /^[a-zA-Z0-9]{8,}/;

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
