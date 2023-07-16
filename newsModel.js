const fs = require("fs");
const pathArq = 'resource/news.txt';

class News {
    constructor(headline, abstract, date, source, website) {
        this.headline = headline;
        this.abstract = abstract;
        this.date = new Date(date);
        this.source = source;
        this.website = website;
    }

    toString() {
        let string = 
            `\t--------------------------------------------------------------------------------------------------\n` +
            `\t  >> \[${formatDate(this.date)}\] ${this.headline}\n` +
            `\t     ${this.abstract}\n` +
            `\t  Fonte: ${this.source}\n` +
            `\t  Site: ${this.website}\n` +
            `\t--------------------------------------------------------------------------------------------------\n`;

        return string;
    }
}

function formatDate(date) {
    let day = date.toLocaleString().slice(3,5);
    let month = date.toLocaleString().slice(0,2);

    return `${day}/${month}/${date.getFullYear()}`;
}

function tryLoadList() {
    let list = new Array();

    let document = fs.readFileSync(pathArq, 'utf8');
    let listOfelements = document.split('\r\n');

    listOfelements.forEach(element => {
        let reg = element.split(';');
        let news = new News(reg[0], reg[1], reg[2], reg[3], reg[4]);
        list.push(news);
    });

    return list;
}

module.exports = {
    tryLoadList
}