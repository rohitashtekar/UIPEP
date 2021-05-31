// fetch
const getBtn = document.querySelector('.get-btn');
const postBtn = document.querySelector('.post-btn');

let output = document.querySelector('.output');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method : method,
        headers : data? {'Content-Type':'application/json'} : {},
        body : JSON.stringify(data)
    }).then(response => {
        return response.json();
    });
};

const getData = () => {
    sendHttpRequest('GET','https://reqres.in/api/users').then(response => {
        output.innerHTML = JSON.stringify(response);
    })
};

const postData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(responseData => {
        output.innerHTML = JSON.stringify(responseData);
    });
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);

const getUserDetails = () => {
    fetch('users.json')
    .then((response) => response.json())
    .then((responseData) => {
        let output = '<h2> Users </h2>'
        responseData.forEach(function(user){
        output += `<ul>
                <li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.email}</li>
                </ul>`
        });
        document.querySelector('.output').innerHTML = output
    })
}

document.querySelector('.get-local').addEventListener('click', getUserDetails)

const submitUserDetails = () => {
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    fetch('users.json',{
        method : 'POST',
        headers : {
            'Content-type': 'application/json'
        },
        body : JSON.stringify({email : email, password : password})
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData)
        })
        document.querySelector('.output').textContent = output
}

document.querySelector('.sub-local').addEventListener('click', submitUserDetails)
