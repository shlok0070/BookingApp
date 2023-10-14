const mysql = require('mysql');

// Setup database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nodecomplete1',
    database: 'node-complete' 
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database...');
});

module.exports = db;
