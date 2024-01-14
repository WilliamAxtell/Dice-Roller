const express = require('express');
const router = express.Router();

const { rollDice } = require('../controllers/tasks.js');

router.route('/ajax-roller').post(rollDice);

module.exports = router;