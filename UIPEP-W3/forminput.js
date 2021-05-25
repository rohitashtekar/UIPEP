let username = document.querySelector('.username-input');
let password = document.querySelector('.password-input');

let usernameReg = /^[\w]+[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]*$/;
let passwordReg = /^[a-zA-Z0-9]{8,}/;

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
    }
    else{
        Invalid(username);
    }
}

password.addEventListener('blur', validatePassword);
function validatePassword(){
    if(passwordReg.test(password.value)){
        Valid(password);
    }
    else{
        Invalid(password);
    }
}
