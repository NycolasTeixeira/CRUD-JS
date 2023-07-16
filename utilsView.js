const prompt = require("prompt-sync")();

function ask(question){
    console.log(question);
    let ans = prompt(">> ");
    return ans;
}

function showMessage(message){
    console.log(message);
}

function showError(error){
    console.log(`::ERROR:: ${error}`);
}

module.exports = {
    ask,
    showMessage,
    showError
}