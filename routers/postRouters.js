const express = require('express');
const postControllers = require('../controllers/postControllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  middleware.authorizationToken,
  middleware.validatePost,
  postControllers.create,
);

router.get(
  '/',
  middleware.authorizationToken,
  postControllers.getAll,
);

module.exports = router;