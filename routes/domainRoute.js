const express = require('express');
const {
    getDomains
} = require('../controllers/domainController');

// * Routes
const router = express.Router();


router.route('/').get(getDomains);


exports.domainRouter = router; 