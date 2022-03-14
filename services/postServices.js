const { Op } = require('sequelize');
const { BlogPost } = require('../models');
const { Categorie } = require('../models');

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
  delete newPost.dataValues.published;
  return { code: 201, response: newPost.dataValues }; 
};

module.exports = {
  create,
};