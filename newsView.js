const prompt = require('prompt-sync')();

function show(array) {
    array.forEach(element => {
        console.log(element.toString());
    });
}

function ask(question) {
    prompt(question);
}

module.exports = {
    show,
    ask
}