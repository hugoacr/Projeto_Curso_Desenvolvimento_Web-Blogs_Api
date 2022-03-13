const express = require('express');
const categorieControllers = require('../controllers/categorieControllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.authorizationToken,
  categorieControllers.create,
);

router.get(
  '/',
  middleware.authorizationToken,
  categorieControllers.getAll,
);

module.exports = router;