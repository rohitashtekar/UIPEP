let firstName = document.querySelector('.fname');
let firstNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let lastName = document.querySelector('.lname');
let lastNameReg = /^[^\!\@\#\$\%\^\&\*\(\)\=\_ \[\]\{\}\;\:\"\'\<\>\-][a-zA-Z]+$/;

let emailId = document.querySelector('.email');
let emailReg = /^[\w]+@[a-zA-z]+[^\!\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]\.(com|in|co\.in|co|org|edu)$/i;

let username = document.querySelector('.username');
let usernameReg = /^[\w]+[\-]*[\w]*[^\s\!\@\#\$\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]$/;

let passOne = document.querySelector('.passone');
let passOneReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>]+[a-zA-Z0-9]{7,}/;

let passTwo = document.querySelector('.passtwo');
let passTwoReg = /^[^\(\)\=\[\]\{\}\;\:\"\'\<\>][a-zA-Z0-9]{7,}/;

let validFname = document.querySelector('.valid-fname');
let validLname = document.querySelector('.valid-lname');
let validEmail = document.querySelector('.valid-email');
let validUser = document.querySelector('.valid-user');
let validPass = document.querySelector('.valid-passone');
let signupBut = document.querySelector('.signup-btn');
let confirmPass = document.querySelector('.confirm-valid');

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

passTwo.addEventListener('blur', validatePassTwo);
function validatePassTwo(){
    if(passTwoReg.test(passTwo.value)){
        if(passOne.value === passTwo.value){
            Valid(passTwo);
            confirmPass.innerText = `Passwords match`;
            confirmPass.style = 'color: limegreen';
        }
        else{
            Invalid(passTwo);
            confirmPass.innerText = `Passwords do not match, Try again`;
            confirmPass.style = 'color: red';
        }
    }
    else {
        Invalid(passTwo);
        confirmPass.innerText = `Passwords do not match, Try again`;
        confirmPass.style = 'color: red';
    }
    
}

// form input
let form = document.querySelector('.form');
form.addEventListener('submit', registerUser);

async function registerUser(event) {
    event.preventDefault();

    const fNameValue = document.querySelector('.fname').value;
    const lNameValue = document.querySelector('.lname').value;
    const emailIdValue= document.querySelector('.email').value;
    const usernameValue = document.querySelector('.username').value;
    const passOneValue = document.querySelector('.passone').value;
    // const passTwoValue = document.querySelector('.passtwo').value;
    
    const result = await fetch('/signup', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            fNameValue,
            lNameValue,
            emailIdValue,
            usernameValue,
            passOneValue
        })
    }).then(res => res.json())

    if(result.status === 'ok') {
        alert(`User created successfully!`);
    }
    else {
        alert(result.error);
    }
}
