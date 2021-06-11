let username = document.querySelector('.username-input');
let password = document.querySelector('.password-input');

let validity = document.querySelector('.validity');

function Invalid(input){
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function Valid(input){
    input.classList.remove('invalid');
    input.classList.add('valid');
}

let loginForm = document.querySelector('.form');
loginForm.addEventListener('submit', loginUser)
    
async function loginUser(event) {
    event.preventDefault();

    const usernameValue = document.querySelector('.username-input').value;
    const passOneValue = document.querySelector('.password-input').value;
    
    const result = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            usernameValue,
            passOneValue
        })
    }).then(res => res.json())

    if(result.status === 'ok') {
        console.log(`Got the token:`,result.data);
        // validity.innerText = `Success!`;
        // validity.style = 'color: limegreen';
        window.location.replace("/home.html");
    }
    else {
        validity.innerText = `Username/Password Incorrect!`;
        validity.style = 'color: red';
    }
}
