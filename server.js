const express = require('express');
const morgan = require('morgan');

if(process.env.NODE_ENV == 'local') require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({ message: 'Awesome, it works!', uptime: process.uptime() });
})

const UserRoute = require('./routes/user.route');

app.use(UserRoute);

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`http://0.0.0.0:${PORT}`);
})