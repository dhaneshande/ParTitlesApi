const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
// adding middleware - corss
app.use(cors());
// adding middleware - body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.send('Titles API');
});
app.listen(3000, () => { console.log('Server listening at port: 3000'); });
