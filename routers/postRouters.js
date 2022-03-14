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

module.exports = router;