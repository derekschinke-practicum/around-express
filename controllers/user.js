const User = require('../models/user');

module.exports.getUsers = (req, res) =>
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send({ message: err }));

module.exports.getUserById = (req, res) =>
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch((err) => res.status(500).send({ message: err }));

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).send({ message: err }));
};
