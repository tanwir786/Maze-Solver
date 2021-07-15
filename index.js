const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server Started!');
})
app.get('/', (req, res) => {
    res.render('app');
})