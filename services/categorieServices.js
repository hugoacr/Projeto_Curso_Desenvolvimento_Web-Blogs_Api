const { Categorie } = require('../models');

const create = async (nameCategorie) => {
  if (!nameCategorie) {
    return { code: 400, response: { message: '"name" is required' } }; 
  }
  const categorie = await Categorie.create({ name: nameCategorie });
  return { code: 201, response: categorie };
};
  
  module.exports = {
    create,
  };