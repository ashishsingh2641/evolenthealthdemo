const express = require('express');

const contactlistData = require('./contactlistData.json');
const recentlyAddedData = require('./recentlyAdded.json');

const app = express();

const port = 5000;

app.get('/api/contactlist', (req, res) => {
    const data = contactlistData;
    res.json(data);
})

app.get('/api/recentlyadded', (req, res) => {
    const data = recentlyAddedData;
    res.json(data);
})


app.listen(port, ()=> console.log(`server is litning port ${port}`));
