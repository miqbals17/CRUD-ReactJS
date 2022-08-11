const express = require('express');
const bodyParser = require('body-parser');
const { add } = require('./controller');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Start Server on Port', PORT)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/kutipan', (req, res) => {
    add(req, res);
})