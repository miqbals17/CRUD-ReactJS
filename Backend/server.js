const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('Start Server on Port', PORT)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quote', (req, res) => {
    console.log(req.body)
})