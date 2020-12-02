const path = require('path');

const getFileContent = require('../helpers/getFileContent');

const userDataPath = path.join(__dirname, '..', 'data', 'userData.json');

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

module.exports = { getUsers, getOneUser };