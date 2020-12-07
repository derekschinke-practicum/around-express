const router = require('express').Router();

const { getUsers, getOneUser } = require('../controllers/user');

router.get('/users', getUsers);
router.get('/users/:id', getOneUser);

module.exports = router;
