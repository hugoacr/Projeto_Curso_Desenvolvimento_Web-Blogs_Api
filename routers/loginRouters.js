const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const { validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validateEmail,
  validatePassword,
  loginControllers.createNewLogin,
);

module.exports = router;