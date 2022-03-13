const express = require('express');
const userControllers = require('../controllers/userControllers');
const { validateEmail, validatePassword, validateDisplayName } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userControllers.create,
);

module.exports = router;