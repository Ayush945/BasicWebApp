const express = require('express');
const db = require('../DBConnection/dbConnection');

const app = express()
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send("Welcome to Web App")
})

app.get('/get-items', async (req, res) => {
    res.send(db.query('SELECT * FROM USER'))
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})