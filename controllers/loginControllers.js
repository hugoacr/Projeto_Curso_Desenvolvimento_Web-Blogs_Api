const loginServices = require('../services/loginServices');

const createNewLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { code, response } = await loginServices.createNewLogin(email, password);
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewLogin,
};