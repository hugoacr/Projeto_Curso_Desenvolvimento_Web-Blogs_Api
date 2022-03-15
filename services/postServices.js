const { Op } = require('sequelize');
const { BlogPost, Categorie, User } = require('../models');

const create = async ({ title, content, categoryIds, tokenData }) => {
  console.log('teste');
  const alreadyExists = await Categorie.findAll({
    attributes: ['id'],
    where: { id: { [Op.or]: categoryIds } }, 
  });
  if (alreadyExists.length !== categoryIds.length) {
    return { code: 400, response: { message: '"categoryIds" not found' } }; 
  }
  console.log({ title, content, userId: tokenData.id, published: new Date() });
  const newPost = await BlogPost
  .create({ title, content, userId: tokenData.id, published: new Date() });
  // Já tinha usado o metodo delete em um dos projetos de REDUX, como dica de colegas
  // porém lendo o site abaixo entendi que poderia ampliar o seu uso
  // https://www.horadecodar.com.br/2020/12/11/remover-propriedade-de-objeto-javascript/#:~:text=Voc%C3%AA%20deve%20apenas%20utilizar%20delete%20com%20o%20nome%20da%20chave!%20%3D)
  delete newPost.dataValues.published;
  return { code: 201, response: newPost.dataValues }; 
};

const getAll = async () => {  
  const postList = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { code: 200, response: postList };
};

const getById = async (postId) => {  
  const postById = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!postById) {
    return { code: 404, response: { message: 'Post does not exist' } }; 
  }
  return { code: 200, response: postById };
};

const update = async ({ postId, title, content, tokenData }) => {
  const validateUser = await BlogPost.findByPk(postId);
  if (validateUser.userId !== tokenData.id) {
    return { code: 401, response: { message: 'Unauthorized user' } };
  }
  await BlogPost.update(
    { title,
    content,
    updated: new Date() },
    { where: { id: postId } },
  );

  const postById = await BlogPost.findOne({
    where: { id: postId },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { code: 200, response: postById };
};

const clear = async ({ postId, tokenData }) => {
  const validateClear = await BlogPost.findByPk(postId);
  if (!validateClear) {
    return { code: 404, response: { message: 'Post does not exist' } }; 
  }
  if (validateClear.dataValues.userId !== tokenData.id) {
    return { code: 401, response: { message: 'Unauthorized user' } };
  }

  await BlogPost.destroy({ where: { id: postId } });
  return { code: 204, response: {} };
};

const getByQueryParam = async (queryParam) => {
  console.log(queryParam);
  if (!queryParam) return getAll();
  const postList = await BlogPost.findAll({
    where: { [Op.or]: [
      { title: { [Op.substring]: queryParam } },
      { content: { [Op.substring]: queryParam } },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { code: 200, response: postList };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  clear,
  getByQueryParam,
};