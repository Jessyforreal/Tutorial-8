const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'posts',
    password: 'Damsel850'
})

module.exports = connection