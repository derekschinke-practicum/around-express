const router = require('express').Router();

const { getCards, createCard } = require('../controllers/card');

router.get('/cards', getCards);
router.post('/cards', createCard);

module.exports = router;
