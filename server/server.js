require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 8080;

// express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
});

// listen for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});