const express = require('express');
const bodyParser = require('body-parser');
const { add, show, home, edit, del } = require('./controller');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Start Server on Port', PORT)
});

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html')
    home(req, res)
})

app.get('/kutipan', (req, res) => {
    show(req, res);
})

app.post('/kutipan/add', (req, res) => {
    add(req, res);
})

app.post('/kutipan/edit', (req, res) => {
    edit(req, res);
})

app.post('/kutipan/delete', (req, res) => {
    del(req, res);
})