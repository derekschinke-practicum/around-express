const Card = require('../models/card');

module.exports.getCards = (req, res) =>
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send({ message: err }));

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(500).send({ message: err }));
};

module.exports.deleteCard = (req, res) =>
  Card.findByIdAndDelete(req.params._id)
    .then((card) => {
      if (card) {
        return res.status(200).send();
      }
      return res.status(404).send({ message: 'Card ID not found' });
    })
    .catch((err) => res.status(500).send({ message: err }));
