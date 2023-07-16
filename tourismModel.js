const fs = require("fs");
const pathArq = 'resource/tourism.txt';


class TourismPlace {
    constructor(name, adress, hour, price, website) {
        this.name = name;
        this.adress = adress;
        this.hour = hour == "hour" ? "Necessário consultar horário de funcionamento!" : hour;
        this.price = price == "price" ? "Entrada Livre" : price;
        this.website = website == "website" ? null : website;
    }

    toString(){
        let string = `\t-------------------------------------------------------------------------\n`+
                     `\t  >> ${this.name}\n`+
                     `\t     ${this.adress}\n`+
                     `\t     Preço: ${this.price}\n`+
                     `\t     Horario: ${this.hour}\n`;
        string += this.website == null ? "": `\t     Site: ${this.website}\n`;
        string += `\t-------------------------------------------------------------------------\n`;
        
        return string;
    }
}

function tryLoadList() {
    let list = new Array();

    let document = fs.readFileSync(pathArq, 'utf8');
    let listOfelements = document.split('\r\n');

    listOfelements.forEach(element => {
        let reg = element.split(';');
        let tourismPlace = new TourismPlace(reg[0], reg[1], reg[2], reg[3], reg[4]);
        list.push(tourismPlace);
    });

    return list;
}

module.exports = {
    tryLoadList
}