const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const errorHandler = require('./errorHandler');
const validateDisplayName = require('./validateDisplayName');
const authorizationToken = require('./authorizationToken');
const validatePost = require('./validatePost');

module.exports = {
  validateEmail,
  validatePassword,
  errorHandler,
  validateDisplayName,
  authorizationToken,
  validatePost,
};