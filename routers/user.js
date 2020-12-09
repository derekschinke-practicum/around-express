const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} = require('../controllers/user');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/me', updateUser);

module.exports = router;
