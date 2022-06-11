'use strict';

const loginForm = document.querySelector('.register-form');
const name = document.querySelector('.name')
const id = document.querySelector('.id');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password')
const button = document.querySelector('button');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!id.value) return alert('Type your ID');
    if (password.value !== confirmPassword.value) return alert('Check your password')
    const req = {
        name: name.value,
        id: id.value,
        password: password.value,
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/login';
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