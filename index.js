const fs = require('fs')

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }));

const transfer = (theDatabase) => {
    if (theDatabase["not"].length === 0) {
        theDatabase["not"] = [...theDatabase["used"]];
        theDatabase["used"] = [];
        const theNewOne = JSON.stringify(theDatabase, null, 2);
        fs.writeFileSync('./db.json', theNewOne);
        console.log("All of the logical fallacies and biases were seen! Restarting the cycle.");
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