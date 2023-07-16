const fs = require("fs");
const pathArq = 'resource/user.txt';


class User {
    constructor(name, email, cpf, password) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }

    toString() {
        let string = `\t-------------------------------------------------------------------------\n` +
            `\t  >> ${this.name}\n` +
            `\t     ${this.email}\n` +
            `\t     CPF: ${this.cpf}\n` +
            `\t-------------------------------------------------------------------------\n`;

        return string;
    }

    toStringTXT() {
        return `\r\n${this.name};${this.email};${this.cpf};${this.password}`;
    }
}

function tryLoadList() {
    let list = new Array();

    let document = fs.readFileSync(pathArq, 'utf8');
    let listOfelements = document.split('\r\n');

    listOfelements.forEach(element => {
        let reg = element.split(';');
        let user = new User(reg[0], reg[1], reg[2], reg[3]);
        list.push(user);
    });

    return list;
}

function createNewUser(form) {
    let newUser = new User(form.name, form.email, form.cpf, form.password);
    fs.appendFileSync(pathArq, newUser.toStringTXT(), 'utf8');

    return newUser;
}

module.exports = {
    tryLoadList,
    createNewUser
}