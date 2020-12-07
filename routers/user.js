const router = require('express').Router();

const { getUsers, getOneUser, createUser } = require('../controllers/user');

router.get('/users', getUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);

module.exports = router;
