const Card = require('../models/card');

const handleError = require('../helpers/handleError');

module.exports.getCards = (req, res) =>
  Card.find({})
    .then((card) => res.status(200).send(card))
    .catch((err) => handleError(err, res, 'card'));

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((cards) => res.status(200).send(cards))
    .catch((err) => handleError(err, res, 'card'));
};

module.exports.deleteCard = (req, res) =>
  Card.findByIdAndDelete(req.params._id)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => handleError(err, res, 'card'));
