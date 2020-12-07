const path = require('path');

const getFileContent = require('../helpers/getFileContent');

const cardDataPath = path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) =>
  getFileContent(cardDataPath, res)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send({ message: err }));

module.exports.createCard = (req) => {
  // eslint-disable-next-line no-console
  console.log(req.user._id);
};
