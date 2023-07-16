const model = require("../model/tourismModel");
const view = require("../view/tourismView");

let listOfPlaces = new Array();

function init() {
    if (listOfPlaces.length == 0) {
        listOfPlaces = model.tryLoadList();
    }

    view.show(listOfPlaces);
    view.ask("Apenter tecla Enter para continar...");
}

module.exports = {
    init
}