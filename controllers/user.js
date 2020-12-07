const path = require('path');

// const User = require('../models/user');
const getFileContent = require('../helpers/getFileContent');

const userDataPath = path.join(__dirname, '..', 'data', 'users.json');

function getUsers(req, res) {
  return getFileContent(userDataPath, res)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send({ message: err }));
}

function getOneUser(req, res) {
  return getFileContent(userDataPath)
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: 'User ID not found' });
    })
    .catch((err) => res.status(500).send({ message: err }));
}

// function createUser(req, res) {
//   const { name, about, avatar } = req.body;
// }

module.exports = { getUsers, getOneUser };
