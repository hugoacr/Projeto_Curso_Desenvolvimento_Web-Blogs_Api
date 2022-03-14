const postServices = require('../services/postServices');

const create = async (req, res, next) => {
  try {
    const { tokenData } = req;
    console.log(tokenData);
    const { title, content, categoryIds } = req.body;
    const { code, response } = await postServices
    .create({ title, content, categoryIds, tokenData });
    return res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
      const { code, response } = await postServices.getAll();
      return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

module.exports = {
  create,
  getAll,
};