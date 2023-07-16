const utilsView = require("./utilsView");

function showMenu() {

    let menu = `-----------------------------------------------------\n`+
               `  -                Qual a boa?                    -  \n`+
               `-----------------------------------------------------\n`+
               `\t 1 - Turismo\n`+
               `\t 2 - Eventos\n`+
               `\t 3 - Notícias\n`+
               `\t 4 - Quiz / Promoções\n`+
               `\t 5 - Login\n`+
               `\t 6 - Registre-se\n`+
               `\t 7 - Sair\n`;

    utilsView.showMessage(menu);
}

function ask() {
    let ans = utilsView.ask("Qual opção você deseja?");
    return ans;
}

function notifyError(error) {
    utilsView.showError(error);
}

function showExitMessage(name) {
    utilsView.showMessage(`Ecerrando aplicação... Até Logo, ${name}!`);
}

module.exports = {
    showMenu,
    ask,
    notifyError,
    showExitMessage
}