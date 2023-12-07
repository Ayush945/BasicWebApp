const express = require('express');
const db = require('../DBConnection/dbConnection');

const app = express()
const port = process.env.PORT || 3000;

app.get('/api', async (req, res) => {
    res.send("Welcome to Web App")
})

app.get('/api/get-items', async (req, res) => {
    res.send(db.query('SELECT * FROM ITEM'))
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})