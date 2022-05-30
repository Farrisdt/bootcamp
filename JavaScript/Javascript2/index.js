//week 2 Wednesday
const axios = require('axios')
const cheerio = require('cherrio')
const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States';

    axios
        .get(url)
        .then((response) => {
            const loadedPage = cheerio.load(response.data);
            const presidentTableRows =loadedPage('table[class=wikitable] >tbody >tr', 'tr'.each);
            presidentTavleRows.each((i, e) => {
                    var cells = e.children
                    if(cells && cells.length >8){
                        cells.forEach((element, i) => {
                            
                        }
                    }
                    cells.forEach((element, i) => {
                        if(element.children){
                            console.log();
                    if(i===7){
                        element.children.forEach((element, i) =>{
                            if(element.children){
                                console.log();
                            }
                        })
                    })
                    }
            })
            if (i === 0){
            const children = e.children;
            children.forEach((e) => console.log(e));
                
        }});

        .catch((error) => {
            console.log(error);
        })

// % npx nodemon index.js autoruns the program in bash, might need to install libraries idk