let username = document.querySelector('.username-input');
let usernameReg = /^[\w]{6,}[^\s\!\@\#\$\%\^\&\*\(\)\=\[\]\{\}\;\:\"\'\<\>]*$/;

let password = document.querySelector('.password-input');
let passwordReg = /^[^\(\)\=\[\]\{\}\;\:\"\'<>][a-zA-Z0-9]{8,}/;

// let validityText = document.querySelector('.validity')

function Invalid(input){
    input.classList.add('invalid');
    input.classList.remove('valid');
    // input.style = 'margin-bottom: 0.2rem';
    // validityText.innerText = `Invalid input`; //rohit_ashtekar
    // validityText.style = 'color: red';
}

function Valid(input){
    input.classList.remove('invalid');
    input.classList.add('valid');
    // input.style = 'margin-bottom: 0.2rem';
    // validityText.innerText = `Valid input`;
    // validityText.style = 'color: limegreen';
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
