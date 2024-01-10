const fs = require('fs')

const db = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }));

const finish = (finalDB) => {
    const theNewOne = JSON.stringify(finalDB, null, 2);
    fs.writeFileSync('./db.json', theNewOne);
}

const transfer = (theDatabase) => {
    if (theDatabase["not"].length === 0) {
        theDatabase["not"] = [...theDatabase["used"]];
        theDatabase["used"] = [];
        finish(theDatabase);
        console.log("All of the logical fallacies and biases were seen! Restarting the cycle.");
        console.log("Here is the new item of the day:");
    }
    randomNum = Math.floor(Math.random() * theDatabase["not"].length)
    itemOfTheDay = theDatabase["not"][randomNum]
    console.log(itemOfTheDay);
    theDatabase["used"].push(itemOfTheDay)
    theDatabase["not"].splice(randomNum, 1)
    finish(theDatabase);
    return;
}

transfer(db);