const fs = require('fs-extra');
const db_filename = './fbcp.json';

let db = fs.readJSONSync(db_filename);
fs.writeJSONSync(`./bak.d/db_${Date.now()}.bak`, db);

let { _ } = db;

const highestId = n => n.reduce((prev, { id = 0 }) => Math.max(prev, id), 0);
let startId = 1;

// let { array } = fs.readJSONSync('./ankidb.json');
// let startId = highestId(lexeme) + 1;
// console.log(startId);
// console.log(lexeme);

// console.log(Object.getOwnPropertyNames(array));

// so have done 0-9 from ankidb

// array = array.slice(0, 10);
// array = array.map(({ id = 0, word, inner }) => ({
//     id: startId++,
//     headword: word,
//     definitions: inner,
// }));

_ = _.map(({ name, ...rest }) => ({
    name,
    id: startId++,
    tags: ['method', 'blades'],
}));

// console.log(traits);

// db.lexeme = [...array, ...lexeme];
// db.lexeme = lexeme;
// console.log(lexeme);

fs.writeJSONSync(db_filename, { _ });