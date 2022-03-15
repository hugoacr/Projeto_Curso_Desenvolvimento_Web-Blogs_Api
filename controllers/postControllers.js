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

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, response } = await postServices.getById(id);
    return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

const update = async (req, res, next) => {
  try {
      const { tokenData } = req;
      const { id } = req.params;
      const { title, content } = req.body;
      const { code, response } = await postServices
      .update({ postId: id, title, content, tokenData });
      return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

const clear = async (req, res, next) => {
  try {
      const { tokenData } = req;
      const { id } = req.params;
      const { code, response } = await postServices
      .clear({ postId: id, tokenData });
      return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

const getByQueryParam = async (req, res, next) => {
  try {
      const { q } = req.query;
      const { code, response } = await postServices.getByQueryParam(q);
      return res.status(code).json(response);
  } catch (error) {
      next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  clear,
  getByQueryParam,
};