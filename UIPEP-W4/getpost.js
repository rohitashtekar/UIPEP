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

const sendLocalData = (method, url, data) => {
    return fetch(url, {
        method : method,
        headers : data ? { 'Accept':'application/json, text/plain */*','Content-Type':'application/json'} : {},
        body : JSON.stringify(data)
    }).then(response => {
        return response.json();
    });
};

const getUserDetails = () => {
    sendLocalData('GET','users.json').then(responseData => {
        let output = '<h2> User Details </h2>'
        responseData.forEach((user) => {
        output += `<ul>
                <li>Id: ${user.id}</li>
                <li>Name: ${user.first_name} ${user.last_name}</li>
                <li>Email-Id: ${user.email}</li>
                </ul>`
        });
        document.querySelector('.output').innerHTML = output;
    });
}

document.querySelector('.get-local').addEventListener('click', getUserDetails)

const sendUserDetails = () => {
    
};

function retrieveData(){
    let email = document.querySelector('.email').value;
    let fName = document.querySelector('.fname').value;
    let lName = document.querySelector('.lname').value;
    
    
    let data = { 
        email : email,
        username : fName + " " + lName
    };
    // console.log(data);
    return data;
};

document.querySelector('.sub-local').addEventListener('click', () => {
    let retData = retrieveData()
    const options = {
                method : 'POST',
                headers : new Headers ({
                    'Content-Type':'application/json'
                }),
                body : JSON.stringify(retData)
            }
            return fetch('https://jsonplaceholder.typicode.com/posts', options)
            .then(response => {
                return response.json();
            })
            .then((response) => {
                document.querySelector('.output').innerHTML = JSON.stringify(response);
            });
});
