'use strict';

const loginForm = document.querySelector('.login-form');
const id = document.querySelector('.id');
const password = document.querySelector('.password');
const button = document.querySelector('button');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/';
        } else {
            alert(res.msg);
        }
    })
    // .catch((err) => {
    //     console.error(new Error('Login Error'))
    // })
    .finally(() => {
        console.log('Thank you')
    })
});