const { Pool } = require('pg');

const pool = new Pool({
    port: 5432,
    user: 'postgres',
    database: 'basiccrud',
    password: 'Ayush'
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
`;

const createItemQuery = `
CREATE TABLE IF NOT EXISTS item (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE NOT NULL,
    item_price VARCHAR(50) UNIQUE NOT NULL,
    user_id INT REFERENCES users(id) ON DELETE CASCADE
    );
`;

pool.query(createTableQuery, (err, result) => {
    if (err) {
        console.error('Error executing query:', err)
    }
    else {
        console.log("Table created Successfully: ")
    }

});
pool.query(createItemQuery, (err, result) => {
    if (err) {
        console.error('Error creating table:', err)
    }
    else {
        console.log("Item Table created")
    }
})

module.exports = pool;