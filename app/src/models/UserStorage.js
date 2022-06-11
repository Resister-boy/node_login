'use strict';

const fs = require('fs').promises;

class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id)
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUsers(isAll, ...fields) {
        return fs
        .readFile('./app/src/database/users.json')
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
        // const users = this.#users;
        
    };

    static getUserInfo(id) {
        return fs
        .readFile('./app/src/database/users.json')
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }


    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw ('Already Exist');
        } else {
            users.name.push(userInfo.name);
            users.id.push(userInfo.id);
            users.password.push(userInfo.password);
            fs.writeFile('./app/src/database/users.json', JSON.stringify(users));
            throw ('Create Account Successfully')
        }
    }
}

module.exports = UserStorage;