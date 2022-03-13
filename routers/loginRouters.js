const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateEmail,
  middleware.validatePassword,
  loginControllers.createNewLogin,
);

module.exports = router;