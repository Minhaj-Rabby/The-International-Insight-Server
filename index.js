const express = require('express');
const catagories = require('./data/categories.json');
const news = require('./data/news.json');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('The International Insight Server is running')
});

app.get('/catagories', (req, res) => {
    res.send(catagories);
});

app.get('/news', (req, res) => {
    res.send(news);
});

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id===0)
    {
        res.send(news);
    }
    const catagoryNews = news.filter(n => parseInt(n.category_id) === id);
    res.send(catagoryNews);
});


app.listen(port, () => {
    console.log(`The International Insight Server running on port ${port}`);
});
