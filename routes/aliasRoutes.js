const express = require('express');
const {
    getAlias,
    checkBody,
    createAlias
} = require('../controllers/aliasController');

// * Routes
const router = express.Router();



// router.route('/').get(getAlias).post(checkBody, createAlias);

// * :domain represents a variable domain
router.route('/:domain').get(getAlias).post(checkBody, createAlias);

exports.aliasRouter = router; 