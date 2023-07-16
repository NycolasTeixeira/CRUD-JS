const model = require("../model/newsModel");
const view = require("../view/newsView");

let listOfNews = new Array();

function init() {
    if (listOfNews.length == 0) {
        listOfNews = model.tryLoadList();
    }

    view.show(listOfNews);
    view.ask("Aperte tecla Enter para continar...");
}

module.exports = {
    init
}