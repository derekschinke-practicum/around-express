const router = require('express').Router();

const getCards = require('../controllers/card');

router.get('/cards', getCards);

module.exports = router;
