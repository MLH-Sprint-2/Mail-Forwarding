const express = require('express');
const { aliasRouter } = require('./routes/aliasRoutes');
const app = express();
// ! Middleware
app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
//     app.use((req, res, next) => {
//         req.requestTime = new Date().toISOString();
//         console.log('Hello from middleware');
//         next();
//     });
// }

// app.use(express.static(`${__dirname}/public`));

// * ROUTES
app.use('/api/v1/alias', aliasRouter);

module.exports = app;
