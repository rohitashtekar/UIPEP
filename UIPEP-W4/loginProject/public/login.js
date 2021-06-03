let username = document.querySelector('.username-input');
let usernameReg = /^[\w]{6,}[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]*$/;

let password = document.querySelector('.password-input');
let passwordReg = /^[^\(\)\=\[\]\{\}\;\:\"\'<>][a-zA-Z0-9]{8,}/;

let validUser = document.querySelector('.valid-user');
let validPass = document.querySelector('.valid-pass');

function Invalid(input){
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function Valid(input){
    input.classList.remove('invalid');
    input.classList.add('valid');
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
        validUser.innerText = `Invalid input`; //rohit_ashtekar
        validUser.style = 'color: red';
    }
}

password.addEventListener('blur', validatePassword);
function validatePassword(){
    if(passwordReg.test(password.value)){
        Valid(password);
        validPass.innerText = `Valid input`;
        validPass.style = 'color: limegreen';
    }
    else{
        Invalid(password);
        validPass.innerText = `Invalid input`; //rohit_ashtekar
        validPass.style = 'color: red';
    }
}
