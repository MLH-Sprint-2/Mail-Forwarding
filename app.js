const express = require('express');
const { aliasRouter } = require('./routes/aliasRoutes');
const { domainRouter } = require('./routes/domainRoute');

const cors = require('cors')

const app = express();

// ! Middleware
app.use(cors());
app.use(express.json());

// * ROUTES
app.use('/api/v1/domains', domainRouter);
app.use('/api/v1/alias', aliasRouter);

module.exports = app;
