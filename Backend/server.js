const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Start Server on Port', PORT)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quote', (req, res) => {
    console.log('Helooooooo')
})