const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);