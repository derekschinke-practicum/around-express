const path = require('path');

const getFileContent = require('../helpers/getFileContent');

const userDataPath = path.join(__dirname, '..', 'data', 'userData.json');

function findUser(users, req) {
  return users.friends.find((user) => user._id === req.params.id);
}

function getUsers(req, res) {
  return getFileContent(userDataPath, res).then((users) =>
    res.status(200).send(users)
  );
}

function getOneUser(req, res) {
  return getFileContent(userDataPath)
    .then((users) => {
      const user = findUser(users, req);
      if (user) {
        return res.status(200).send(user);
      }
      return res.status(404).send({ message: "Such user doesn't exist" });
    })
    .catch((err) => res.status(400).send(err));
}

module.exports = { getUsers, getOneUser };
