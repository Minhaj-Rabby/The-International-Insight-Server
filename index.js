const express = require('express');
const catagories= require('./data/categories.json');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
res.send('The International Insight Server is running')
});

app.get('/catagories', (req, res) =>{
res.send(catagories);
});

app.listen(port, () => {
    console.log(`The International Insight Server running on port ${port}`);
});
