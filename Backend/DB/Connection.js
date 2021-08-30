var mysql = require('mysql');
const host = 'localhost';
const db = 'prueba';
const user = 'root';
const password = 'root';

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    database: db,
    user: user,
    password: password,
});

connection.connect(function (err) {
    if (err) {
        console.error('Error de connection: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + connection.threadId);
});

module.exports = connection;
