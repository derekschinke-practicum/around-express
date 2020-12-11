const User = require('../models/user');

const handleError = require('../helpers/handleError');

module.exports.getUsers = (req, res) => User.find({})
  .then((users) => res.status(200).send(users))
  .catch((err) => handleError(err, res, 'user'));

module.exports.getUserById = (req, res) => User.findById(req.params.id)
  .then((user) => res.status(200).send(user))
  .catch((err) => handleError(err, res, 'user'));

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => handleError(err, res, 'user'));
};

module.exports.updateUser = (req, res) => User.findByIdAndUpdate(
  req.params.id,
  { $set: { name: req.body.name, about: req.body.about } },
  { new: true, runValidators: true },
)
  .then((user) => res.status(200).send(user))
  .catch((err) => handleError(err, res, 'user'));

module.exports.updateAvatar = (req, res) => User.findByIdAndUpdate(
  req.params.id,
  { $set: { avatar: req.body.avatar } },
  { new: true, runValidators: true },
)
  .then((user) => res.status(200).send(user))
  .catch((err) => handleError(err, res, 'user'));
