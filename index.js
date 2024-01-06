const fs = require('fs')
// const config = require('./db.json');
// console.log(config);

const dbString = fs.readFile('./db.json', { encoding: 'utf-8' }, (err, jsonString) => {
    if (err) {
        console.log(err);
    }
    else {
        const db = JSON.parse(jsonString)
    }
})


const transfer = (db) => {
    return "this is db"
}

// console.log(transfer("g"));