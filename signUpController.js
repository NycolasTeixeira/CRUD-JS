const userController = require("./userController");
const view = require("../view/signUpView");

function init() {
    let listOfUsers = userController.getListOfUsers();
    if (listOfUsers.length == 0) {
        listOfUsers = userController.tryLoadList();
    }

    let form = view.show();
    let result = userController.tryCreateNewUser(form);
    if(result){
        view.showMessage("Usuario cadastrado com sucesso!");
    } else {
        view.showMessage("Erro ao cadastrar usuário! Entre em contato com o suporte.")
    }
    view.ask("Aperte tecla Enter para continar...");    
}

module.exports = {
    init
}