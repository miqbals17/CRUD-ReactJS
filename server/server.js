const express = require('express');
const bodyParser = require('body-parser');
const { add, show, home, edit, del } = require('./controller');
const { routes } = require('./routes');
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Start Server on Port', PORT)
});

routes(app);