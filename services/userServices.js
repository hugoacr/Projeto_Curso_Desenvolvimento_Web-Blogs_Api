const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const create = async (displayName, email, password, image) => {  
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) {
    return { code: 409, response: { message: 'User already registered' } }; 
  }
  const creatNewUser = await User.create({ displayName, email, password, image });
  const token = jwtGenerator({ id: creatNewUser.id, email });
  return { code: 201, response: { token } };
};

const getAll = async () => {  
  const userList = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { code: 200, response: userList };
};

const getById = async (userId) => {  
  const userById = await User.findOne({
    where: { id: userId },
    attributes: { exclude: ['password'] },
  });
  if (!userById) {
    return { code: 404, response: { message: 'User does not exist' } }; 
  }
  return { code: 200, response: userById };
};

const clear = async ({ tokenData }) => {
  await User.destroy({ where: { id: tokenData.id } });
  return { code: 204, response: {} };
};

  module.exports = {
    create,
    getAll,
    getById,
    clear,
  };