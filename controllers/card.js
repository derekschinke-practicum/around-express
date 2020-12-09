const Card = require('../models/card');

const handleError = require('../helpers/handleError');

module.exports.getCards = (req, res) =>
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => handleError(err, res, 'card'));

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => handleError(err, res, 'card'));
};

module.exports.deleteCard = (req, res) =>
  Card.findByIdAndDelete(req.params._id)
    .then((card) => res.status(200).send(card))
    .catch((err) => handleError(err, res, 'card'));

module.exports.likeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true, runValidators: true }
  )
    .then((card) => res.status(200).send(card))
    .catch((err) => handleError(err, res, 'card'));

module.exports.unlikeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true, runValidators: true }
  )
    .then((card) => res.status(200).send(card))
    .catch((err) => handleError(err, res, 'card'));
