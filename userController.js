const model = require("../model/userModel");

let listOfUsers = new Array();

function getListOfUsers() {
    return tryLoadList();
}

function tryLoadList() {
    if (listOfUsers.length == 0) {
        listOfUsers = model.tryLoadList();
    }
    return listOfUsers;
}

function tryCreateNewUser(form) {

    let hasUser = searchUserByCPF(form.cpf)

    if (hasUser == null) {
        let user = model.createNewUser(form);
        if (user != null) {
            listOfUsers.push(user);
            return true;
        }
    }
    return false;
}

function searchUserByCPF(cpf){
    for(let i = 0; i< listOfUsers.length; i++){
        if(listOfUsers[i].cpf==cpf){
            return listOfUsers[i];
        }
    }
    return null;
}

module.exports = {
    getListOfUsers,
    tryLoadList,
    tryCreateNewUser
}