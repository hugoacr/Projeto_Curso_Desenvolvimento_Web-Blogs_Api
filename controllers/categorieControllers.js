const categorieServices = require('../services/categorieServices');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { code, response } = await categorieServices.create(name);
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { code, response } = await categorieServices.getAll();
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};