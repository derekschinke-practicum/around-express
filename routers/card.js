const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
} = require('../controllers/card');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards/:id', deleteCard);
router.put('/cards/:id/likes', likeCard);

module.exports = router;
