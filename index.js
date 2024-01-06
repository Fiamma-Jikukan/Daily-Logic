const fs = require('fs')
// const config = require('./db.json');
// console.log(config);

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }));


const transfer = (theDatabase) => {
    if (theDatabase["not"].length === 0) {
        theDatabase["not"] = [...theDatabase["used"]]
        theDatabase["used"] = []
        console.log(theDatabase);
        const theNewOne = JSON.stringify(theDatabase, null, 2)
        fs.writeFileSync('./db.json', theNewOne)
        return;
    }
    randomNum = Math.floor(Math.random() * theDatabase["not"].length)
    itemOfTheDay = theDatabase["not"][randomNum]
    console.log(itemOfTheDay);
    theDatabase["used"].push(itemOfTheDay)
    theDatabase["not"].splice(randomNum, 1)
    const theNewOne = JSON.stringify(theDatabase, null, 2)
    fs.writeFileSync('./db.json', theNewOne)
    return;

}

transfer(db);