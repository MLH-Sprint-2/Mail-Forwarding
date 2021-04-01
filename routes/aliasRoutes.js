const express = require('express');
const {
    getAlias,
    checkBody,
    createAlias
} = require('../controllers/aliasController');

// * Routes
const router = express.Router();


// * :id represents a variable id '?' means optional
router.route('/').get(getAlias).post(checkBody, createAlias);


exports.aliasRouter = router; 