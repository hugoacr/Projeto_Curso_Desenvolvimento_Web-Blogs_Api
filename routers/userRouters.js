const express = require('express');
const userControllers = require('../controllers/userControllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.validateDisplayName,
  middleware.validateEmail,
  middleware.validatePassword,
  userControllers.create,
);

router.get(
  '/',
  middleware.authorizationToken,
  userControllers.getAll,
);

router.get(
  '/:id',
  middleware.authorizationToken,
  userControllers.getById,
);

router.delete(
  '/me',
  middleware.validatePostUpdate,
  middleware.authorizationToken,
  userControllers.clear,
);

module.exports = router;