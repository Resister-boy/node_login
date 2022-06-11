'use strict';

const res = require('express/lib/response');
const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, password } = await UserStorage.getUserInfo(client.id);
       
        if (id) {
            if(id === client.id && password === client.password) {
                return { success: true };
            }
            return { success: false, msg: 'Your Password is wrong'}
        }
        return { success: false, msg: 'Your ID Is not Exist'}
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return res.json(response);
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = User;