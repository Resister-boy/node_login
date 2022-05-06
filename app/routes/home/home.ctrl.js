'use strict';

const home = (req, res) => {
    res.render('home/index');
}

const login = (req, res) => {
    res.render('home/login');
}

const info = (req, res) => {
    res.send('Information');
}

module.exports = {
    home,
    login,
    info
}