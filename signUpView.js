const prompt = require('prompt-sync')();
const utils = require("./utilsView");

function show(array) {
    utils.showMessage("Iniciando novo cadastro de usuário...");

    let form = {
        name : utils.ask("Qual o seu nome?"),
        email : utils.ask("Qual o seu e-mail?"),
        cpf : utils.ask("Digite seu CPF"),
        password : null
    }

    let confirmPass = false;
    let password = null;
    while(!confirmPass){
        password = utils.ask("Digite uma Senha");
        let confirmation = utils.ask("Digite novamente a Senha escolhida para confirmação");

        if (password == confirmation && password.trim() != "") {
            confirmPass = true;
        } else {
            utils.showError("Senha não confirmada. Verifique a senha e digite novamente.");
        }
    }

    form.password = password;

    return form;
}

function ask(question) {
    prompt(question);
}

function showMessage(message){
    utils.showMessage(message);
}

module.exports = {
    show,
    ask, 
    showMessage
}